from flask import Blueprint
from flask_login import login_required, current_user
from app.models import Share

share_routes = Blueprint('shares', __name__)

@share_routes.route('/')
@login_required
def shares():
    shares = Share.query.filter(Share.user_id == current_user.id)
    return {'shares': [ share.to_dict() for share in shares ]}


@share_routes.route('/<int:id>', methods=['POST'])
@login_required
def share():
    form = ShareForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        share = Share(
            user_id=current_user.id,
            sneax_id=id,
            price_per_share=form.data['price_per_share'],
            number_of_shares=form.data['number_of_shares'],
        )


    # shares = Share.query.filter(Share.user_id == id)
    # return {'shares': [shares.to_dict() for share in shares ]}


# @share_routes.route('/<int:id>')
# @login_required
# def sneax(id):
#     sneax = Sneax.query.get(id)
#     return sneax.to_dict()
