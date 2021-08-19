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


# post route
@watchlist_routes.route('/add', methods=['POST'])
@login_required
def add_watchlist():
    form = WatchlistForm()
    if not form.validate_on_submit():
        watchlist = Watchlist(
            list_name = form.data['list_name'],
            user_id = form.data['user_id']
        )
        db.session.add(watchlist)
        db.session.commit()
        return watchlist.to_dict()
    return {'error' : 'Invalid request'}


@watchlist_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_watchlist(id):
    watchlist = Watchlist.query.filter(Watchlist.user_id == current_user.id, Watchlist.id == id)
    res = Watchlist.query.get(id)
    if watchlist:
        db.session.delete(res)
        db.session.commit()
        return watchlist.to_dict()


@watchlist_routes.route('/edit/<int:id>', methods=['PUT'])
@login_required
def update_watchlist(id):
    res = Watchlist.query.get(id)
    form = WatchlistForm()
    
    res.list_name = form.data['list_name']
    res.user_id = form.data['user_id']
    db.session.commit()
    return res.to_dict()
    # return {'error' : 'Invalid request'}









