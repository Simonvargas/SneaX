from .db import db
from sqlalchemy.sql import func


class Share(db.Model):
    __tablename__ = 'shares'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    sneax_id = db.Column(db.Integer, db.ForeignKey('sneaxs.id'))
    price_per_share = db.Column(db.Integer, nullable=False)
    number_of_shares = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=func.now())

    users = db.relationship('User', back_populates='share')
    sneaker = db.relationship('Sneax')


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'sneax_id': self.sneax_id,
            'price_per_share': self.price_per_share,
            'number_of_shares': self.number_of_shares,
        }
