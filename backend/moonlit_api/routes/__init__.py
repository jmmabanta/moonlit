from flask import Blueprint
from .stocks import stocks
from .login import login
from .userinfo import userinfo

main = Blueprint('main', __name__)

main.register_blueprint(stocks)
main.register_blueprint(login)
main.register_blueprint(userinfo)
