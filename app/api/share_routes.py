from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Share, Sneax, db

from app.forms import ShareForm

share_routes = Blueprint('shares', __name__)

@share_routes.route('/')
@login_required
def shares():
    shares = Share.query.filter(Share.user_id == current_user.id)
    sneax = Sneax.query.join(Share).filter(Share.user_id == current_user.id).all()
    return {'shares': [ share.to_dict() for share in shares ], 'sneax': [ sneak.to_dict() for sneak in sneax ],}


@share_routes.route('/<int:id>')
@login_required
def exists(id):
    shares = Share.query.filter((Share.user_id == current_user.id), (Share.sneax_id == id) )
    return {'existing': [ share.to_dict() for share in shares ]}


@share_routes.route('/<int:id>', methods=['POST'])
@login_required
def share(id):
    form = ShareForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if not form.validate_on_submit():  # why is this false?
        share = Share(
            user_id=current_user.id,
            sneax_id=id,
            price_per_share=form.data['price_per_share'],
            number_of_shares=form.data['number_of_shares'],
        )
        db.session.add(share)
        db.session.commit()
        return share.to_dict()


@share_routes.route('/users/<int:id>', methods=['POST'])
@login_required
def update(id):
    share = Share.query.get(id)
    form = ShareForm()
    share.price_per_share = form.data['price_per_share']
    share.number_of_shares = form.data['number_of_shares']
    db.session.commit()
    return share.to_dict()


@share_routes.route('/remove/<int:id>', methods=['DELETE'])
@login_required
def remove(id):
    share = Share.query.get(id)
    db.session.delete(share)
    db.session.commit()
    return share.to_dict()





# @share_routes.route('/<int:id>', methods=['PUT'])
# @login_required
# def sharez():
#     form = ShareForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         share = Share(
#             user_id=current_user.id,
#             sneax_id=id,
#             price_per_share=form.data['price_per_share'],
#             number_of_shares=form.data['number_of_shares'],
#         )


    # shares = Share.query.filter(Share.user_id == id)
    # return {'shares': [shares.to_dict() for share in shares ]}


# @share_routes.route('/<int:id>')
# @login_required
# def sneax(id):
#     sneax = Sneax.query.get(id)
#     return sneax.to_dict()
