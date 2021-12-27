from flask import Blueprint, request, jsonify
from ..models import User
from ..database import db

userinfo = Blueprint('userinfo', __name__)


@userinfo.route('/userinfo', methods=['POST'])
def get_username():
    user_id = hex(int(request.form.get('user_id')))
    user = User.query.filter_by(google_id=user_id).first()
    return jsonify({'name': user.name, 'picture': user.picture})
