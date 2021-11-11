from sqlalchemy.ext.mutable import Mutable
from sqlalchemy.dialects.postgresql import ARRAY
from .database import db


# From: https://stackoverflow.com/questions/52643188/how-to-search-using-sqlalchemy-in-a-mutable-array
# Allows PostgreSQL arrays to be mutable
class MutableList(Mutable, list):
    def append(self, value):
        list.append(self, value)
        self.changed()

    def remove(self, value):
        list.remove(self, value)
        self.changed()

    @classmethod
    def coerce(cls, key, value):
        if not isinstance(value, MutableList):
            if isinstance(value, list):
                return MutableList(value)
            return Mutable.coerce(key, value)
        return value


class Stock(db.Model):
    __tablename__ = 'stocks'
    id = db.Column(db.Integer, nullable=False,
                   primary_key=True, autoincrement=True)
    ticker = db.Column(db.String(10), nullable=False)
    name = db.Column(db.String(128), nullable=False)
    price = db.Column(db.Numeric(20, 2), nullable=False, default=0.00)
    change = db.Column(db.Numeric(20, 2), nullable=False, default=0.00)

    def __init__(self, ticker, name, price, change):
        self.ticker = ticker
        self.name = name
        self.price = price
        self.change = change


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, nullable=False,
                   primary_key=True, autoincrement=True)
    google_id = db.Column(db.Text)
    name = db.Column(db.Text)
    email = db.Column(db.Text)
    picture = db.Column(db.Text)
    portfolio = db.Column(MutableList.as_mutable(ARRAY(db.Text)), default=[])

    def __init__(self, google_id, name, email, picture, portfolio):
        self.google_id = google_id
        self.name = name
        self.email = email
        self.picture = picture
        self.portfolio = portfolio
