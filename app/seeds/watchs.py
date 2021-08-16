from app.models import Watch, db, watch

def seed_watchs():
    watch1 = Watch(watchlist_id=1, sneax_id=1)
    watch2 = Watch(watchlist_id=1, sneax_id=2)
    watch3 = Watch(watchlist_id=1, sneax_id=3)
    watch4 = Watch(watchlist_id=2, sneax_id=1)
    watch5 = Watch(watchlist_id=2, sneax_id=2)
    watch6 = Watch(watchlist_id=2, sneax_id=4)
    watch7 = Watch(watchlist_id=3, sneax_id=2)
    watch8 = Watch(watchlist_id=3, sneax_id=3)
