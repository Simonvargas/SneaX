from flask_wtf import FlaskForm
from wtforms import StringField, validators


class ShareForm(FlaskForm):
    user_id = IntegerField('user_id', [validators.DataRequired(]))
    sneax_id = IntegerField('sneax_id', [validators.DataRequired(]))
    price_per_share = IntegerField('price_per_share', [validators.DataRequired(]))
    number_of_shares = IntegerField('number_of_shares', [validators.DataRequired(]))
