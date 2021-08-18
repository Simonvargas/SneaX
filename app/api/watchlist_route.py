from flask import Blueprint
from flask_login import login_required, current_user
from app.models import Watchlist, db, Watch
from app.forms import WatchlistForm



watchlist_routes = Blueprint('watchlists', __name__)


@watchlist_routes.route('/')
@login_required
def get_watchlist():
    watchlists = Watchlist.query.filter(Watchlist.user_id == current_user.id)
    watchs = Watch.query.filter((Watchlist.user_id == current_user.id) & (Watchlist.id == Watch.watchlist_id))

    return {'watchlist' : [watchlist.to_dict() for watchlist in watchlists]}
# 'watchs' : [watch.to_dict() for watch in watchs]


@watchlist_routes.route('/add', methods=['POST'])
@login_required
def add_watchlist():
    form = WatchlistForm()
    if form.validate_on_submit():
        watchlist = Watchlist()
        form.populate_obj(watchlist)
        db.session.add(watchlist)
        db.session.commit()
        return watchlist.to_dict()
    return {'error' : 'Invalid request'}


@watchlist_routes.route('/delete/<int:watchlist_id>', methods=['DELETE'])
@login_required
def delete_watchlist(watchlist_id):
    watchlist = Watchlist.query.filter(Watchlist.user_id == current_user.id, Watchlist.id == watchlist_id).all()
    if watchlist:
        db.session.delete(watchlist)
        db.session.commit()
        return watchlist.to_dict()


@watchlist_routes.route('/edit/<int:watchlist_id>', methods=['PUT'])
@login_required
def update_watchlist(watchlist_id):
    watchlist = Watchlist.query.filter(Watchlist.user_id == current_user.id, Watchlist.id == watchlist_id).all()
    form = WatchlistForm()
    if form.validate_on_submit():
        form.populate_obj(watchlist)
        db.session.commit()
        return watchlist.to_dict()
    return {'error' : 'Invalid request'}









