from flask_wtf import FlaskForm
from wtforms import StringField, validators


class WatchlistForm(FlaskForm):
    list_name = StringField('list_name', [validators.DataRequired(]))
    user_id = IntegerField('user_id', [validators.DataRequired(]))
