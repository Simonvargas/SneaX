from app.models import db, Share


# Adds a demo user, you can add other users here if you want
def seed_shares():
    share1 = Share(
        user_id=1, sneax_id=1, price_per_share=450, number_of_shares=100)
    share2 = Share(
        user_id=1, sneax_id=2, price_per_share=5600, number_of_shares=1000)
    share3 = Share(
        user_id=1, sneax_id=3, price_per_share=2000, number_of_shares=277)
    share4 = Share(
        user_id=2, sneax_id=1, price_per_share=450, number_of_shares=33)
    share5 = Share(
        user_id=2, sneax_id=2, price_per_share=5600, number_of_shares=500)
    share6 = Share(
        user_id=2, sneax_id=3, price_per_share=2000, number_of_shares=400)
    share7 = Share(
        user_id=3, sneax_id=1, price_per_share=450, number_of_shares=150)
    share8 = Share(
        user_id=3, sneax_id=2, price_per_share=5600, number_of_shares=1000)
    share9 = Share(
        user_id=3, sneax_id=3, price_per_share=2000, number_of_shares=250)
    share10 = Share(
        user_id=3, sneax_id=4, price_per_share=85000, number_of_shares=10)

    db.session.add(share1)
    db.session.add(share2)
    db.session.add(share3)
    db.session.add(share4)
    db.session.add(share5)
    db.session.add(share6)
    db.session.add(share7)
    db.session.add(share8)
    db.session.add(share9)
    db.session.add(share10)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_shares():
    db.session.execute('TRUNCATE shares RESTART IDENTITY CASCADE;')
    db.session.commit()
