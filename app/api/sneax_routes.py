from flask import Blueprint
from flask_login import login_required
from app.models import Sneax

sneax_routes = Blueprint('sneaxs', __name__)

@sneax_routes.route('/')
# @login_required
def sneaxs():
    sneaxs = Sneax.query.all()
    return {'sneaxs': [sneax.to_dict() for sneax in sneaxs ]}


@sneax_routes.route('/<int:id>')
@login_required
def sneax(id):
    sneax = Sneax.query.get(id)
    return sneax.to_dict()
