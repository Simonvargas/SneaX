from flask_wtf import FlaskForm
from wtforms import StringField, validators, IntegerField


class UserForm(FlaskForm):
    wallete = IntegerField('wallet', [validators.DataRequired()])
