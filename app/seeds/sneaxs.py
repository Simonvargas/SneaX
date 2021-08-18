from app.models import db, Sneax


# Adds a demo user, you can add other users here if you want
def seed_sneaxs():
    yeezy = Sneax(
        name='Yeezy Boost 350 v2 Sesame', market_price=450, image='https://images.stockx.com/360/adidas-Yeezy-Boost-350-V2-Sesame/Images/adidas-Yeezy-Boost-350-V2-Sesame/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1606322910&h=320&fm=webp', details='We don’t know if Kanye loves Sesame seeds but we do know that he’s released the adidas Yeezy Boost 350 V2 Sesame. This major silhouette comes with a sesame upper, sesame midsole, and a gum sole. These sneakers released in November 2018 and retailed for $220. While getting your grub on stay fresh and cop these on StockX today.', brand_name='adidas')
    jordan = Sneax(
        name='Off-White x Air Jordan 1 Retro HIGH OG', market_price=5600, image='https://img.stadiumgoods.com/nike-x-off-white-the-10-air-jordan-1-off-white-chicago_12959919_34682110_1000.jpg', details='The Off-White x Air Jordan 1 Retro High OG was one of the most highly anticipated footwear collaborations of 2017. It marked the first time Virgil Abloh, founder of the Milan-based fashion label and Jordan Brand had teamed up. Nicknamed "The 10" edition, this pair comes in the original Chicago-themed white, black and varsity red colorway. Featuring a white, red and black-based deconstructed leather upper with a Swooshless medial side branded with "Off-White for Nike Air Jordan 1, Beaverton, Oregon, USA © 1985." Other details include: floppy ankle collars with hidden “85” written on the inside, an oversized off-centered Swoosh on the lateral sides, "Air" written on the midsole and the word "Shoelaces" on the laces with no branding on the tongue. Their release date is set for 2017 where they retailed for $190 in men\'s sizes only. As if the hype wasn\'t enough, the limited availability made these Off-White x Air Jordan 1 Retro High OG\'s highly sought after, way before their official release. Those of you in need of a pair can hit up the marketplace to buy them. If you got a pair and want to see what they\'re going for, check online and then decide if it\'s time to sell or wait.', brand_name='Nike')
    wings = Sneax(
        name='Jeremy Scott X Wings 3.0 \'Solid Gold\'', market_price=2000, image='https://cdn.flightclub.com/500/TEMPLATE/201074/1.jpg', details='The Jeremy Scott x Wings 3.0 ‘Solid Gold’ amplifies the silhouette’s maximalist design with an eye-catching metallic gleam. The exterior of the fashion-forward high-top is mostly obscured by a set of oversized patent leather wings coated in gold. The rest of the upper is similarly cast in metallic gold, while the sneaker’s midsole and rubber outsole are finished in complementary beige.', brand_name='Adidas')
    mag = Sneax(
        name='MAG (Back to the Future)', market_price=85000, image='https://images.complex.com/complex/images/c_crop,h_620,w_1063,x_18,y_0/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/q9h7orjnvgdksr2ormoz/nike-mag-2011?fimg-ssr-default', details='Back to the future shoe', brand_name='Nike')
    yeez7 = Sneax(
        name='adidas Yeezy 700 V3 Azael', market_price=700, image='https://images.stockx.com/360/adidas-Yeezy-700-V3-Azael/Images/adidas-Yeezy-700-V3-Azael/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1606319725&h=320&fm=webp', details='Yeezy introduces a new variation of the Boost 700 with the Yeezy Boost 700 V3 Azael, now available on StockX. The third incarnation of the Yeezy Boost 700 is one of the most sophisticated designs we’ve seen from the ongoing collaborations, playing with shape, line, texture, and even expectations. The outer shell is reminiscent of a race car and an astronaut’s suit with a sole unit that feels progressive and substantial. This 700 V3 is composed of an azael upper composed of monofilament engineered mesh with RPU overlays for structure and durability. The RPU cage has glow-in-the-dark features, along with 3M reflective detailing on the toe. The EVA midsole and herringbone rubber outsole completes the design. These sneakers released in December of 2019 and retailed for $200.', brand_name='Adidas')
    jordan2 = Sneax(    # sample
        name='Jordan 1 Retro High', market_price=595, image='https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/air-jordan-1-retro-og-hero_xf8joi.jpg', details='Combining elements of three certified classic AJ1’s, the 2018 Jordan 1 Retro High Bred Toe is like the Coachella lineup of OG 1s. Coming in gym red, black, and summit white, with red on the toe box, outsole, and wrapping around the ankle and heel, white side panels and midsole and black covering the rest of the sneaker, it’s a perfectly balanced mash-up of the Banned, Chicago, and Black Toe all in one. Originally releasing in February of 2018, the Bred toe has been one of the most popular sneakers on StockX since its drop. For fans of the AJ1, this colorway is a must Bid.', brand_name='Nike')
    travis = Sneax(    # sample
        name='Nike SB Dunk Low Travis Scott (Regular Box)', market_price=1569, image='https://images.stockx.com/360/Nike-SB-Dunk-Low-Travis-Scott/Images/Nike-SB-Dunk-Low-Travis-Scott/Lv2/img02.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1606325738&h=320&fm=webp', details='Travis Scott teamed up with Nike SB to release his first official skate shoe, the Nike SB Dunk Low Travis Scott (Regular Box), now available on StockX. This design follows a similar design aesthetic as seen on the Air Force 1 Low Travis Scott Cactus Jack, featuring an array of materials and prints. Unlike previous Travis Scott releases, these were not available on SNKRS and only available at select Nike SB stockists. This Nike SB Dunk Low is composed of suede upper with paisley canvas and plaid flannel overlays. As the paisley overlays wear off, an elephant print is revealed. Embroidered text around the collar, rope laces, and La Flame’s Cactus Jack logo on the puffy tongues completes this design. These sneakers released in February of 2020 and retailed for $150.', brand_name='Nike')
    # mag = Sneax(    # sample
    #     name='name', market_price=0000, image='img', details='deet', brand_name='brand')
    # mag = Sneax(    # sample
    #     name='name', market_price=0000, image='img', details='deet', brand_name='brand')

    db.session.add(yeezy)
    db.session.add(jordan)
    db.session.add(wings)
    db.session.add(mag)
    db.session.add(yeez7)
    db.session.add(jordan2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_sneaxs():
    db.session.execute('TRUNCATE sneaxs RESTART IDENTITY CASCADE;')
    db.session.commit()
