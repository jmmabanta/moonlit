import sys
import os
import requests
from flask import Blueprint, jsonify
from .models import Stock
from .database import db

main = Blueprint('main', __name__)


# TODO: Replace this shit API with one that can fetch multiplie prices
def finnhubGet(location=''):
    url = 'https://finnhub.io/api/v1' + location
    token = {'X-Finnhub-Token': os.environ.get('FINNHUB_KEY')}
    return requests.get(url, headers=token).json()


@main.route('/')
def main_index():
    return "API CONNECTED! :)"


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
