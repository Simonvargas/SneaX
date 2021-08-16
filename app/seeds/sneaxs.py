from app.models import db, Sneax


# Adds a demo user, you can add other users here if you want
def seed_sneaxs():
    yeezy = Sneax(
        name='Yeezy Boost 350 v2', market_price=450, image='https://images.stockx.com/360/adidas-Yeezy-Boost-350-V2-Sesame/Images/adidas-Yeezy-Boost-350-V2-Sesame/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1606322910&h=320&fm=webp', details='We don’t know if Kanye loves Sesame seeds but we do know that he’s released the adidas Yeezy Boost 350 V2 Sesame. This major silhouette comes with a sesame upper, sesame midsole, and a gum sole. These sneakers released in November 2018 and retailed for $220. While getting your grub on stay fresh and cop these on StockX today.', brand_name='adidas')
    jordan = Sneax(
        name='Off-White x Air Jordan 1 Retro HIGH OG', market_price=5600, image='https://img.stadiumgoods.com/nike-x-off-white-the-10-air-jordan-1-off-white-chicago_12959919_34682110_1000.jpg', details='The Off-White x Air Jordan 1 Retro High OG was one of the most highly anticipated footwear collaborations of 2017. It marked the first time Virgil Abloh, founder of the Milan-based fashion label and Jordan Brand had teamed up. Nicknamed "The 10" edition, this pair comes in the original Chicago-themed white, black and varsity red colorway. Featuring a white, red and black-based deconstructed leather upper with a Swooshless medial side branded with "Off-White for Nike Air Jordan 1, Beaverton, Oregon, USA © 1985." Other details include: floppy ankle collars with hidden “85” written on the inside, an oversized off-centered Swoosh on the lateral sides, "Air" written on the midsole and the word "Shoelaces" on the laces with no branding on the tongue. Their release date is set for 2017 where they retailed for $190 in men\'s sizes only. As if the hype wasn\'t enough, the limited availability made these Off-White x Air Jordan 1 Retro High OG\'s highly sought after, way before their official release. Those of you in need of a pair can hit up the marketplace to buy them. If you got a pair and want to see what they\'re going for, check online and then decide if it\'s time to sell or wait.', brand_name='Nike')
    wings = Sneax(
        name='Jeremy Scott X Wings 3.0 \'Solid Gold\'', market_price=2000, image='https://cdn.flightclub.com/500/TEMPLATE/201074/1.jpg', details='The Jeremy Scott x Wings 3.0 ‘Solid Gold’ amplifies the silhouette’s maximalist design with an eye-catching metallic gleam. The exterior of the fashion-forward high-top is mostly obscured by a set of oversized patent leather wings coated in gold. The rest of the upper is similarly cast in metallic gold, while the sneaker’s midsole and rubber outsole are finished in complementary beige.', brand_name='Adidas')
    mag = Sneax(
        name='MAG (Back to the Future)', market_price=85000, image='https://images.complex.com/complex/images/c_crop,h_620,w_1063,x_18,y_0/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/q9h7orjnvgdksr2ormoz/nike-mag-2011?fimg-ssr-default', details='Back to the future shoe', brand_name='Nike')

    db.session.add(yeezy)
    db.session.add(jordan)
    db.session.add(wings)
    db.session.add(mag)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_sneaxs():
    db.session.execute('TRUNCATE sneaxs RESTART IDENTITY CASCADE;')
    db.session.commit()
