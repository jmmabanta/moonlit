import sys
import os
import requests
from flask import Blueprint, jsonify, request
from .models import Stock
from .database import db
import google.auth.transport.requests
from google.oauth2 import id_token

GOOGLE_CLIENT_ID = os.environ.get('GOOGLE_CLIENT_ID')
VALID_ISSUERS = ['accounts.google.com', 'https://accounts.google.com']

main = Blueprint('main', __name__)


# TODO: Replace this shit API with one that can fetch multiplie prices
def finnhubGet(location=''):
    url = 'https://finnhub.io/api/v1' + location
    token = {'X-Finnhub-Token': os.environ.get('FINNHUB_KEY')}
    return requests.get(url, headers=token).json()


@main.route('/', methods=['GET'])
def main_index():
    return "API CONNECTED! :)"


@main.route('/', methods=['POST'])
# From https://github.com/adpeace/helloapp-auth-example
def verify_user():
    token_id = request.form.get('token_id')
    google_request = google.auth.transport.requests.Request()

    user_info = id_token.verify_oauth2_token(
        token_id, google_request, GOOGLE_CLIENT_ID)

    if user_info['iss'] not in VALID_ISSUERS:
        raise ValueError('Wrong Issuer')
    print(user_info, file=sys.stderr)
    return jsonify(user_info)


@main.route('/stocks', methods=['GET'])
def get_stocks():
    stock_query = Stock.query.all()
    stocks = [{'id': s.id, 'ticker': s.ticker, 'name': s.name,
               'price': float(s.price), 'change': float(s.change)} for s in stock_query]
    return jsonify(stocks)


@main.route('/update', methods=['GET'])
def update_stocks():
    for s in Stock.query.order_by(Stock.price.desc()):
        stock = Stock.query.filter_by(id=s.id).first()
        stock.price = finnhubGet('/quote?symbol=' + stock.ticker)['c']
        stock.change = finnhubGet('/quote?symbol=' + stock.ticker)['d']
        print(stock.ticker, file=sys.stderr)
        print(stock.price, file=sys.stderr)
        print(stock.change, file=sys.stderr)
    db.session.commit()
    return get_stocks()
