from flask.cli import AppGroup
from .users import seed_users, undo_users
from .sneaxs import seed_sneaxs, undo_sneaxs
from .shares import seed_shares, undo_shares
from .watchs import seed_watchs, undo_watchs
from .watchlists import seed_watchlists, undo_watchlists

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_sneaxs()
    seed_shares()
    seed_watchs()
    seed_watchlists()


    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_sneaxs()
    undo_shares()
    undo_watchs()
    undo_watchlists()

    # Add other undo functions here
