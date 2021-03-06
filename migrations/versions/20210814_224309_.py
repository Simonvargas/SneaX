"""empty message

Revision ID: 9575fb90b1bb
Revises: b0aa5a46b07f
Create Date: 2021-08-14 22:43:09.911676

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9575fb90b1bb'
down_revision = 'b0aa5a46b07f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('sneaxs', sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True))
    op.add_column('sneaxs', sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('sneaxs', 'updated_at')
    op.drop_column('sneaxs', 'created_at')
    # ### end Alembic commands ###
