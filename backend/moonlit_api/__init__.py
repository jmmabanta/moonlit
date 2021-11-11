from flask import Flask
from flask_cors import CORS
from .routes import main
from .database import db
from .config import Config


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)
    app.register_blueprint(main, url_prefix='')
    CORS(app, resources={r"/*": {"origins":
                                 ["http://localhost:3000",
                                  "https://jmmabanta.github.io"]
                                 }})
    return app
