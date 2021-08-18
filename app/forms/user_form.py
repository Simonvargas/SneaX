from flask_wtf import FlaskForm
from wtforms import StringField, validators, IntegerField


class UserForm(FlaskForm):
    wallet = IntegerField('wallet', [validators.DataRequired()])
