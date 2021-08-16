from .db import db
from sqlalchemy.sql import func


class Sneax(db.Model):
    __tablename__ = 'sneaxs'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    market_price = db.Column(db.Integer, nullable=False)
    image = db.Column(db.String(1000), nullable=False)
    details = db.Column(db.String(2000), nullable=False)
    brand_name = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=func.now())


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'market_price': self.market_price,
            'image': self.image,
            'details': self.details,
            'brand_name': self.brand_name,
        }
