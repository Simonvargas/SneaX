from app.models import Watch, db

def seed_watchs():
    watch1 = Watch(watchlist_id=1, sneax_id=1)
    watch2 = Watch(watchlist_id=1, sneax_id=2)
    watch3 = Watch(watchlist_id=1, sneax_id=3)
    watch4 = Watch(watchlist_id=2, sneax_id=1)
    watch5 = Watch(watchlist_id=2, sneax_id=2)
    watch6 = Watch(watchlist_id=2, sneax_id=4)
    watch7 = Watch(watchlist_id=3, sneax_id=2)
    watch8 = Watch(watchlist_id=3, sneax_id=3)

    db.session.add(watch1)
    db.session.add(watch2)
    db.session.add(watch3)
    db.session.add(watch4)
    db.session.add(watch5)
    db.session.add(watch6)
    db.session.add(watch7)
    db.session.add(watch8)

    db.session.commit()

def undo_watchs():
    db.session.execute('TRUNCATE watchs RESTART IDENTITY CASCADE;')
    db.session.commit()



