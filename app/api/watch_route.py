from flask import Blueprint
from flask_login import login_required, current_user
from app.models import Watch

watch_routes = Blueprint("watchs", __name__)

@watch_routes.route("/") 
@login_required
def watchs():
    
# get route - watch query.all -dic 

# post route 
