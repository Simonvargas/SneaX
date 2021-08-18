from flask import Blueprint
from flask_login import login_required, current_user
from app.models import Watch, db, Sneax, Watchlist
# from app.forms import WatchForm

watch_routes = Blueprint('watchs', __name__)

@watch_routes.route('/')
@login_required
def watchs():
    # watchs = Watch.query.all()
    # sneaxs = Sneax.query.all()
    # watch_dict = [watch.to_dict() for watch in watchs]
    watchs = Watch.query.filter((Watchlist.user_id == current_user.id), (Watchlist.id == Watch.watchlist_id)).all()
    # nest sneaxs in watchs
    return{'watchs': [watch.to_dict() for watch in watchs]}


# post route
@watch_routes.route('/add', methods=['POST'])
@login_required
def post_watch():
    # form = WatchForm()
    # if form.validate_on_submit():
    watch = Watch()
    db.session.add(watch)
    db.session.commit()
    return watch.to_dict()

# delete route
@watch_routes.route('/delete/<int:watchlist_id>', methods=['DELETE'])
@login_required
def delete_watch(watchlist_id):
    watch= Watch.query.get(watchlist_id)
    db.session.delete(watch)
    db.session.commit()
    return watch.to_dict()
