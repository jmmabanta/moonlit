import os
import sys
import requests
from flask import Blueprint, jsonify, request
from ..models import Stock, User
from ..database import db

stocks = Blueprint('stocks', __name__)


# TODO: Replace this shit API with one that can fetch multiplie prices
def finnhubGet(location=''):
    url = 'https://finnhub.io/api/v1' + location
    token = {'X-Finnhub-Token': os.environ.get('FINNHUB_KEY')}
    return requests.get(url, headers=token).json()


@stocks.route('/', methods=['GET'])
def main_index():
    return "API CONNECTED! :)"


def get_portfolio(user_id):
    return User.query.filter_by(google_id=user_id).first().portfolio


def get_stocks(user_id):
    portfolio = get_portfolio(user_id)
    stock_query = Stock.query.filter(Stock.ticker.in_(portfolio)).all()
    stocks = [{'id': s.id, 'ticker': s.ticker, 'name': s.name,
               'price': float(s.price), 'change': float(s.change)} for s in stock_query]
    return jsonify(stocks)


# TODO: Make this update independently of browser
@stocks.route('/update', methods=['POST'])
def update_stocks():
    user_id = hex(int(request.form.get('user_id')))
    portfolio = get_portfolio(user_id)
    for s in Stock.query.filter(Stock.ticker.in_(portfolio)).order_by(Stock.price.desc()):
        stock = Stock.query.filter_by(id=s.id).first()
        stock.price = finnhubGet('/quote?symbol=' + stock.ticker)['c']
        stock.change = finnhubGet('/quote?symbol=' + stock.ticker)['d']
    db.session.commit()
    return get_stocks(user_id)
