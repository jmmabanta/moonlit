import os
import sys
import requests
from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object("config.Config")
CORS(app, resources={r"/*": {"origins":
                             ["http://localhost:3000",
                              "https://jmmabanta.github.io"]
                             }})

db = SQLAlchemy(app)


def finnhubGet(location=''):
    url = 'https://finnhub.io/api/v1' + location
    token = {'X-Finnhub-Token': os.environ.get('FINNHUB_KEY')}
    return requests.get(url, headers=token).json()


class Stock(db.Model):
    __tablename__ = 'stocks'
    id = db.Column(db.Integer, nullable=False,
                   primary_key=True, autoincrement=True)
    ticker = db.Column(db.String(10), nullable=False)
    name = db.Column(db.String(128), nullable=False)
    price = db.Column(db.Numeric(20, 2), nullable=False, default=0.00)
    change = db.Column(db.Numeric(20, 2), nullable=False, default=0.00)


@app.route('/')
def index():
    return "API CONNECTED! :)"


@app.route('/stocks', methods=['GET'])
def get_stocks():
    stock_query = Stock.query.all()
    stocks = [{'id': s.id, 'ticker': s.ticker, 'name': s.name,
               'price': float(s.price), 'change': float(s.change)} for s in stock_query]
    return jsonify(stocks)


@app.route('/update', methods=['GET'])
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


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
