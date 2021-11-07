from .database import db


class Stock(db.Model):
    __tablename__ = 'stocks'
    id = db.Column(db.Integer, nullable=False,
                   primary_key=True, autoincrement=True)
    ticker = db.Column(db.String(10), nullable=False)
    name = db.Column(db.String(128), nullable=False)
    price = db.Column(db.Numeric(20, 2), nullable=False, default=0.00)
    change = db.Column(db.Numeric(20, 2), nullable=False, default=0.00)
