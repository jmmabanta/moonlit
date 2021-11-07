from flask import Flask, Blueprint
from flask_cors import CORS
from .database import db
from .views import main
from .config import Config


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)
    app.register_blueprint(main, url_prefix='')
    return app
