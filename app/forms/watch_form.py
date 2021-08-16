from flask_wtf import FlaskForm
from wtforms import IntegerField, SubmitField, validators


class WatchForm(FlaskForm):
    watchlist_id = IntegerField('watchlist_id', [validators.DataRequired()])
    sneax_id = IntegerField('sneax_id', [validators.DataRequired()])
    submit = SubmitField("Add to Watchlist")

