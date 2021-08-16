from app.models import Watchlist, db

def seed_watchlists():
    watchlist1 = Watchlist(name="My watchlist", user_id=1)
    watchlist2 = Watchlist(name="Watchlist", user_id=2)
    watchlist3 = Watchlist(name="My Watchlist", user_id=3)

    db.session.add(watchlist1)
    db.session.add(watchlist2)
    db.session.add(watchlist3)

    db.session.commit()

def undo_watchlists():
    db.session.execute('TRUNCATE watchlists RESTART IDENTITY CASCADE;')
    db.session.commit()
