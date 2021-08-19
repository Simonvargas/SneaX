from .db import db
from sqlalchemy.sql import func

class Watchlist(db.Model):
    __tablename__ = 'watchlists'

    id = db.Column(db.Integer, primary_key=True)
    list_name = db.Column(db.String(100), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=func.now())

    user = db.relationship('User', back_populates='watchlist')
    watch = db.relationship('Watch', back_populates='listwatch', cascade="all, delete" )


    def to_dict(self):
        return {
            'id': self.id,
            'list_name': self.list_name,
            'user_id': self.user_id,
        }
