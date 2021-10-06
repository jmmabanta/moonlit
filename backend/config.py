import os


class Config():
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('POSTGRES_URI')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
