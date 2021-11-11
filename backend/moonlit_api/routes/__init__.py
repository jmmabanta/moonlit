from flask import Blueprint
from .stocks import stocks
from .login import login

main = Blueprint('main', __name__)

main.register_blueprint(stocks)
main.register_blueprint(login)
