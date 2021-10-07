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


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
