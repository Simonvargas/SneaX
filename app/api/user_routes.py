from flask import Blueprint, request
from flask_login import login_required
from app.models import User, db
from app.forms import UserForm

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
# @login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>', methods=['POST'])
@login_required
def update(id):
    form = UserForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    user = User.query.get(id)
    user.wallet = form.data['wallet']
    db.session.commit()
    return user.to_dict()
