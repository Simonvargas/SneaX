from .db import db
from sqlalchemy.sql import func

class Watch(db.Model):
    __tablename__ = 'watchs'

    id = db.Column(db.Integer, primary_key=True)
    watchlist_id = db.Column(db.Integer, db.ForeignKey('watchlists.id'))
    sneax_id = db.Column(db.Integer, db.ForeignKey('sneaxs.id'))
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=func.now())

    listwatch = db.relationship('Watchlist', back_populates='watch')
    sneaker = db.relationship('Sneax')


    def to_dict(self):
        return {
            'id': self.id,
            'watchlist_id': self.watchlist_id,
            'sneax_id ': self.sneax_id,
        }
