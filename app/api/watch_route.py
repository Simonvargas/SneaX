from flask import Blueprint
from flask_login import login_required
from app.models import Watch, db
# from app.forms import WatchForm

watch_routes = Blueprint('watchs', __name__)

@watch_routes.route('/') 
@login_required
def watchs():
    watchs = Watch.query.all()
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

