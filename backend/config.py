import os


class Config(object):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        'DATABASE_URL')[:8] + "ql" + os.environ.get('DATABASE_URL')[8:]
    SQLALCHEMY_TRACK_MODIFICATIONS = False
