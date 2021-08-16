from flask import Blueprint
from flask_login import login_required
from app.models import Watch, db

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
    watch = Watch()
    db.session.add(watch)
    db.session.commit()
    return watch.to_dict()

# delete route 

