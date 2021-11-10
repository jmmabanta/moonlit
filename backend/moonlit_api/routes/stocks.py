import os
import sys
import requests
from flask import Blueprint, jsonify, request
from ..models import Stock, User
from ..database import db
from ..util import finnhubGet

stocks = Blueprint('stocks', __name__)


# Helper Methods
def get_portfolio(user_id):
    return User.query.filter_by(google_id=user_id).first().portfolio


def get_stocks(user_id):
    portfolio = get_portfolio(user_id)
    stock_query = Stock.query.filter(Stock.ticker.in_(portfolio)).all()
    stocks = [{'id': s.id, 'ticker': s.ticker, 'name': s.name,
               'price': float(s.price), 'change': float(s.change)} for s in stock_query]
    return jsonify(stocks)


def verify_stock(ticker):
    # Check if stock already belongs in master db
    if Stock.query.filter_by(ticker=ticker).first() is not None:
        return (True, ticker)

    # Check if stock ticker exists, and add it to master db
    results = finnhubGet('/search?q=' + ticker)
    # print(results, file=sys.stderr)
    if results['count'] >= 1:
        new_stock_ticker = results['result'][0]['symbol']
        new_stock_name = results['result'][0]['description']
        prices = finnhubGet('/quote?symbol' + new_stock_ticker)
        new_stock = Stock(new_stock_ticker, new_stock_name,
                          prices['c'], prices['d'])
        db.session.add(new_stock)
        db.session.commit()
        return (True, new_stock_ticker)

    return (False, "TICKER NOT FOUND!!!!")


# Routes
@stocks.route('/', methods=['GET'])
def main_index():
    return "API CONNECTED! :)"


# TODO: Make this update independently of browser
@stocks.route('/update', methods=['POST'])
def update_stocks():
    user_id = hex(int(request.form.get('user_id')))
    portfolio = get_portfolio(user_id)
    for s in Stock.query.filter(Stock.ticker.in_(portfolio)).order_by(Stock.price.desc()):
        stock = Stock.query.filter_by(id=s.id).first()
        prices = finnhubGet('/quote?symbol=' + stock.ticker)
        stock.price = prices['c']
        stock.change = prices['d']
    db.session.commit()
    return get_stocks(user_id)


@stocks.route('/add', methods=['POST'])
# TODO: Add stock ticker verification, and add it to master database and to user
def add_stock():
    user_id = hex(int(request.form.get('user_id')))
    user = User.query.filter_by(google_id=user_id).first()
    ticker = str.upper(request.form.get('ticker'))

    verification = verify_stock(ticker)
    if verification[0]:
        if verification[1] in user.portfolio:
            return get_stocks(user_id)
        user.portfolio.append(verification[1])
        db.session.commit()
    return get_stocks(user_id)
