import os
from flask import Blueprint, jsonify, request
import google.auth.transport.requests
from google.oauth2 import id_token
from ..database import db
from ..models import User

GOOGLE_CLIENT_ID = os.environ.get('GOOGLE_CLIENT_ID')
VALID_ISSUERS = ['accounts.google.com', 'https://accounts.google.com']

login = Blueprint('login', __name__)


@login.route('/', methods=['POST'])
# From https://github.com/adpeace/helloapp-auth-example
def login_user():
    token_id = request.form.get('token_id')
    google_request = google.auth.transport.requests.Request()

    # Verify login token
    user_info = id_token.verify_oauth2_token(
        token_id, google_request, GOOGLE_CLIENT_ID)

    if user_info['iss'] not in VALID_ISSUERS:
        raise ValueError('Wrong Issuer')

    google_id = hex(int(user_info['sub']))

    # Add user to db if they are new
    if User.query.filter_by(google_id=google_id).first() is None:
        new_user = User(google_id, user_info['name'],
                        user_info['email'], user_info['picture'], [])
        db.session.add(new_user)
        db.session.commit()

    return jsonify(user_info)
