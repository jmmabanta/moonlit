import os


class Config(object):
    DEBUG = True

    # Heroku PostgreSQL url starts with 'postgres://' instead of 'postgresql://'
    # which the latter is needed by sqlaclhemy
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        'DATABASE_URL')[:8] + "ql" + os.environ.get('DATABASE_URL')[8:]

    SQLALCHEMY_TRACK_MODIFICATIONS = False
