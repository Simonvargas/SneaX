from app.models import db, Sneax


# Adds a demo user, you can add other users here if you want
def seed_sneaxs():
    yeezy = Sneax(
        name='Yeezy Boost 350 v2 Sesame', market_price=450, image='https://images.stockx.com/360/adidas-Yeezy-Boost-350-V2-Sesame/Images/adidas-Yeezy-Boost-350-V2-Sesame/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1606322910&h=320&fm=webp', details='We don’t know if Kanye loves Sesame seeds but we do know that he’s released the adidas Yeezy Boost 350 V2 Sesame. This major silhouette comes with a sesame upper, sesame midsole, and a gum sole. These sneakers released in November 2018 and retailed for $220. While getting your grub on stay fresh and cop these on StockX today.', brand_name='Adidas')
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
    black = Sneax(    # sample
        name='adidas Forum Low Bad Bunny Back to School', market_price=310, image='https://images.stockx.com/360/adidas-Forum-Low-Bad-Bunny-Triple-Black/Images/adidas-Forum-Low-Bad-Bunny-Triple-Black/Lv2/img02.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1629307061&h=320&fm=webp', details='The adidas Forum Low Bad Bunny Back To School features a triple black leather and suede upper atop a black sole. Like previous Bad Bunny Forum releases, this Forum is equipped with a double tongue and padded ankle strap. The adidas Forum Low Bad Bunny Back To School released in August of 2021 and retailed for $160.', brand_name='Adidas')
    colorful = Sneax(    # sample
        name='Forum Low END Friends and Forum', market_price=300, image='https://images.stockx.com/images/adidas-Forum-Low-END-Friends-and-Forum.png?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=1&trim=color&updated_at=1609406855&pad=0&fm=webp', details='END Friends and Forum', brand_name='adidas')
    plain = Sneax(    # sample
        name='Forum Low Donovan Mitchell', market_price=115, image='https://images.stockx.com/images/adidas-Forum-Low-Donovan-Mitchell.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=1&trim=color&updated_at=1629223311&pad=0&fm=webp', details='Donovan Mitchell', brand_name='adidas')
    weird = Sneax(    # sample
        name='Sleek Super Beyonce Ivy Park White Blue', market_price=181, image='https://images.stockx.com/images/adidas-Sleek-Super-Beyonce-Ivy-Park-White-Blue.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=1&trim=color&updated_at=1627647999&pad=0&fm=webp', details='Sleek Super Beyonce Ivy Park White Blue', brand_name='adidas')
    twist = Sneax(    # sample
        name='Jordan 12 Retro Twist', market_price=223, image='https://images.stockx.com/360/Air-Jordan-12-Retro-Twist/Images/Air-Jordan-12-Retro-Twist/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1626802580&h=320&fm=webp', details='The Air Jordan 12 Twist features a white tumbled leather paneled upper with a pebbled leather mudguard. From there, red metallic Jumpman side tabs and eyelets, black woven heel tabs, and a sculptural sole completes the design. The Air Jordan 12 Twist released in July of 2021 and retailed for $190.', brand_name='Air Jordan')
    anoter = Sneax(    # sample
        name='adidas Yeezy Boost 350 V2 Black Red (2017/2020)', market_price=443, image='https://images.stockx.com/360/adidas-Yeezy-Boost-350-V2-Core-Black-Red-2017/Images/adidas-Yeezy-Boost-350-V2-Core-Black-Red-2017/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1606320792&h=320&fm=webp', details='PLEASE NOTE: This page is for the original and restock, so production dates may vary. The adidas Yeezy Boost 350 V2 Black Red is one of the first original colorways to drop after the silouhette’s debut in 2016. Despite its original 2017 release, the 350 V2 Black Red restocked in 2020, giving fans a second chance at grabbing a pair at retail. The adidas Yeezy 350 V2 Black Red features familiar style cues that made the silhouette popular today. The upper consists of black Primeknit material for breathability. A black ribbed midsole encases an entire BOOST cushioning system for added comfort. Lastly, signature “SPLY-350” is knitted along the lateral side of each pair. The adidas Yeezy 350 V2 originally released in February of 2017 and retailed for $220.', brand_name='adidas')
    yellow = Sneax(    # sample
        name='Jordan 4 Retro Lightning (2021)', market_price=325, image='https://images.stockx.com/360/Air-Jordan-4-Retro-Lightning-2021/Images/Air-Jordan-4-Retro-Lightning-2021/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1629383902&h=320&fm=webp', details='Originally released in 2006, the Air Jordan 4 Retro Lightning (2021) is one of the most renowned retro Jordan 4 colorways in Jordan Brand\'s catalog. It features a Tour Yellow Durabuck upper with black netted panels and dark grey eyelets. On the tongue, a black Jordan Flight logo patch with white and yellow accents complements the upper. From there, a Jumpman logo on the heel tab and white midsole with a visible Air unit completes the design. The Air Jordan 4 Retro Lightning (2021) released in August of 2021 and retailed for $190.', brand_name='Air Jordan')
    solid = Sneax(    # sample
        name='Yeezy Boost 700 Wave Runner Solid Grey', market_price=521, image='https://images.stockx.com/360/adidas-Yeezy-Wave-Runner-700-Solid-Grey/Images/adidas-Yeezy-Wave-Runner-700-Solid-Grey/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1628533740&h=320&fm=webp', details='A new set of waves are rolling in as the adidas Yeezy Wave Runner 700s get ready for their first restock on March 10th, 2018. First releasing in November of 2017, the Yeezy Boost 700’s represented what was a significant shift in Kanye’s design aesthetic, moving from the minimalistic silhouettes of early Yeezy seasons to this chunky runner model. It once again showed how Kanye stays ahead of the curve, as chunkier sneakers became more en vogue in 2018. The shoe features an upper with grey and black suede overlays, premium leather with blue mesh underlays, neon green laces, and its signature chunky midsole with encapsulated Boost technology. Translation: these may look bold but are still comfy as hell. The Yeezy Wave Runners will stay at the same retail cost of $300 for the upcoming restock, but have averaged a sale price well above retail on StockX since their initial drop. So if you’re looking to add these to your Yeezy collection, remember that fortune favors the bold bidders.', brand_name='Adidas')
    j4 = Sneax(    # sample
        name='Jordan 4 Retro University Blue', market_price=397, image='https://images.stockx.com/360/Air-Jordan-4-Retro-University-Blue/Images/Air-Jordan-4-Retro-University-Blue/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1616520672&h=320&fm=webp', details='Jordan Brand paid homage to MJ’s alma mater with the Air Jordan 4 University Blue. The University Blue colorway draws a close resemblance to the extremely rare Air Jordan 4 UNC PE that was given to Tarheel student-athletes in 2019. The Air Jordan 4 University Blue features a University Blue suede upper with mesh netting on the quarter panel and tongue. Similar to OG Jordan 4 colorways of the past, the eyelets, heel tab, and sections of the midsole are a speckled Cement Grey. Hits of black appear on the wing eyelets, sole, and Jumpman logo on the heel tab. Two woven labels are stitched to the tongue; one being the classic Jumpman woven label; the other being a Team Jordan jock tag. A black, white, and Tech Grey sole with a clear Air unit completes the design. The Air Jordan 4 University Blue released in April of 2021 and retailed for $200.', brand_name='Air Jordan')
    what = Sneax(    # sample
        name='adidas Yeezy Foam RNNR MX Cream Clay', market_price=380, image='https://images.stockx.com/360/adidas-Yeezy-Foam-RNNR-MX-Cream-Clay/Images/adidas-Yeezy-Foam-RNNR-MX-Cream-Clay/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1628003512&h=320&fm=webp', details='Following previous monochromatic Foam RNNR\'s, the adidas Yeezy Foam RNNR MX Cream Clay is the first Foam RNNR to feature a multicolor palette. Cream, clay, and grey colors are all prominent on the upper in a streaked camo pattern, making the design a true statement piece. The adidas Yeezy Foam RNNR MX Cream Clay released in August of 2021 and retailed for $80.', brand_name='Adidas')
    off = Sneax(    # sample
        name='Nike Dunk Low Off-White Lot 11', market_price=520, image='https://images.stockx.com/360/Nike-Dunk-Low-Off-White-Lot-11/Images/Nike-Dunk-Low-Off-White-Lot-11/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1628509257&h=320&fm=webp', details='Off-White Lot 11 :: 100% Authentic', brand_name='Nike')
    frag = Sneax(    # sample
        name='Jordan 1 High OG SP Fragment x Travis Scott', market_price=4000, image='https://images.stockx.com/360/Air-Jordan-1-High-OG-SP-fragment-design-x-Travis-Scott/Images/Air-Jordan-1-High-OG-SP-fragment-design-x-Travis-Scott/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1628097985&h=320&fm=webp', details='The Air Jordan 1 High OG SP Fragment Design x Travis Scott fragment draws inspiration from a Jordan 1 Royal press sample from 1985 with its white and blue tumbled leather upper. Similar to previous Travis Scott Jordan 1s, signature reverse Swooshes and hidden stash pockets in the collar add on to the classic design. From there, both Travis Scott\'s Cactus Jack and Fragment logos are debossed in black on the heel wrap. The Air Jordan 1 High OG SP Fragment Design x Travis Scott released in July of 2021 and retailed for $200.', brand_name='Air Jordan')
    maadg = Sneax(    # sample
        name='adidas Yeezy Boost 350 V2 Carbon', market_price=340, image='https://images.stockx.com/360/adidas-Yeezy-Boost-350-V2-Carbon/Images/adidas-Yeezy-Boost-350-V2-Carbon/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1609432836&h=320&fm=webp', details='Kanye West and adidas keep the ball rolling with the Yeezy 350 V2 Carbon. This release marks the 12th colorway of the favorite 350 V2 model in 2020 and this colorway’s dark-hued upper makes it the perfect piece of footwear for fall. The Yeezy 350 V2 Carbon holds all of the familiar elements that make the silhouette so popular; breathable Primeknit solid black mesh with its signature side stripe, ribbed patterned off-white midsole, and classic BOOST cushioning make the 350 V2 Carbon easy to love and easy to wear. The Yeezy 350 V2 Carbon released in October of 2020.', brand_name='Adidas')
    travvii = Sneax(    # sample
        name='Jordan 6 Retro Travis Scott British Khaki', market_price=534, image='https://images.stockx.com/360/Air-Jordan-6-Retro-Travis-Scott-British-Khaki/Images/Air-Jordan-6-Retro-Travis-Scott-British-Khaki/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1620406101&h=320&fm=webp', details='sickkkkkkkkkkkkk', brand_name='Air Jordan')
    classicc = Sneax(    # sample
        name='Nike LD Waffle SF sacai Fragment Blue Void', market_price=501, image='https://images.stockx.com/360/Nike-Vaporwaffle-Sacai-fragment/Images/Nike-Vaporwaffle-Sacai-fragment/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1629130985&h=320&fm=webp', details='The classic fragment...Blue Void...~', brand_name='Nike')
    dunk = Sneax(    # sample
        name='Nike Dunk Low Off-White Lot 1', market_price=1220, image='https://images.stockx.com/360/Nike-Dunk-Low-Off-White-Lot-1/Images/Nike-Dunk-Low-Off-White-Lot-1/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1629306993&h=320&fm=webp', details='Nice shoes.. wanna race?', brand_name='Nike')
    heart = Sneax(    # sample
        name='Converse Chuck Taylor All-Star 70s Hi Comme des Garcons PLAY Black', market_price=180, image='https://images.stockx.com/360/Converse-Chuck-Taylor-All-Star-70s-Hi-Comme-des-Garcons-PLAY-Black/Images/Converse-Chuck-Taylor-All-Star-70s-Hi-Comme-des-Garcons-PLAY-Black/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1607647392&h=320&fm=webp', details='Don\'t break my heart', brand_name='Converse')
    chuck = Sneax(    # sample
        name='Converse Chuck Taylor All-Star 70s Hi Off-White', market_price=425, image='https://images.stockx.com/360/Converse-Chuck-Taylor-All-Star-70s-Hi-Off-White/Images/Converse-Chuck-Taylor-All-Star-70s-Hi-Off-White/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1606318827&h=320&fm=webp', details='This shoe is ugly.', brand_name='Converse')
    royal = Sneax(    # sample
        name='Nike Dunk High AMBUSH Deep Royal', market_price=404, image='https://images.stockx.com/360/Nike-Dunk-High-AMBUSH-Deep-Royal/Images/Nike-Dunk-High-AMBUSH-Deep-Royal/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1622142484&h=320&fm=webp', details='Adding to their collection of idiosyncratic Nike Dunks, Nike and AMBUSH bring a Deep Royal colorway to the unique silhouette. An exaggerated black Swoosh extends towards the heel and from there, bold AMBUSH branding projects off an elevated heel cap. Lastly, Deep Royal leather overlays are stacked on white leather panels to complete the design. The Nike Dunk High AMBUSH Deep Royal released in June of 2021 for $150.', brand_name='Nike')
    jeezy = Sneax(    # sample
        name='MSCHF x INRI x Nike Air Max 97 ‘Jesus Shoes’', market_price=4590, image='https://stockx.imgix.net/Nike-Air-Max-97-MSCHF-x-INRI-Jesus-Shoes-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1603481985', details='The MSCHF x INRI x Nike Air Max 97 ‘Jesus Shoes’ allows the wearer to literally walk on water. A custom design conceived and engineered by Brooklyn-based creative agency MSCHF, the retro runner’s Max Air unit is injected with 60cc of holy water, sourced from the River Jordan and blessed by a priest in Brooklyn. The pristine upper, constructed from blue-tinged mesh with white leather overlays, features a gold crucifix lace jewel and MSCHF branding on the left heel tab. ‘INRI’ is printed on the opposite tab (short for Iesus Nazarenus Rex Iudaeorum, which was inscribed on the cross), while the lateral forefoot is marked with an allusion to Matthew 14:25, the biblical chapter and verse that references Jesus’ feat of walking on water.', brand_name='Nike')
    delta = Sneax(    # sample
        name='Jordan Delta 2', market_price=125, image='https://images.stockx.com/images/Air-Jordan-Delta-2-Black-Infrared.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=1&trim=color&updated_at=1629246684&pad=0&fm=webp', details='The Jordan Delta 2 offers a fresh, fearless take on the features you want: durability, comfort and an attitude that is Jordan to the core. We updated design lines and swapped out some components, but the idea is the same as the first Delta. The 2 still has that clashing combination of supportive and space age-like materials, with lots of different textures and heavy stitching to create a look that is both adventurous and iconic.', brand_name='Nike')
    fyw = Sneax(    # sample
        name='adidas Y-3 FYW S-97', market_price=223, image='https://images.stockx.com/images/adidas-Y-3-FYW-S-97-Off-Black-White.png?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=1&trim=color&updated_at=1627415422&pad=0&fm=webp', details='Introduced in July 2019, the Y-3 FYW S-97 is a reimagined edition of the adidas Salvation sneaker. First seen in 1997, the Salvation is one of adidas’ original running silhouettes with Feet You Wear technology. The sneaker has been refreshed with a flexible Primeknit upper and adorned with the signature of Japanese fashion designer Yohji Yamamoto. Suede and leather detailing appear on the heel and forefoot. Below, the midsole features cut-outs to reveal the adidas Boost cushioning.', brand_name='adidas')
    nbOne= Sneax(    # sample
        name='New Balance 2002R', market_price=240, image='https://images.stockx.com/images/New-Balance-M2002-Protection-Pack-Rain-Cloud.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=1&trim=color&updated_at=1624346652&pad=0&fm=webp', details='The 2002R reintroduces a technical running favorite from 2010, outfitting the original design with modern performance upgrades. Don’t call it retro though. A mesh and suede overlay upper construction is rendered with sleek curves and cutout segments for a futuristic take on a classic look. The performance of a Stability Web equipped and N-ergy shock absorbing outsole, ABZORB midsole and ABZORB SBS heel cushioning offer comfort and performance that can’t be pinned down with a date.', brand_name='New Balance')
    nbTwo = Sneax(    # sample
        name='New Balance 574', market_price=128, image='https://images.stockx.com/images/new-balance-574-tds-white-grey-ver2.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=1&trim=color&updated_at=1623473292&pad=0&fm=webp', details='The 574 isn’t just any shoe. Crafted with updated materials, this women’s throwback sneaker is a symbol of ingenuity and originality — no matter how you wear it.', brand_name='New Balance')
    pollen = Sneax(    # sample
        name='Jordan 1 Retro High Pollen', market_price=251, image='https://images.stockx.com/360/Air-Jordan-1-Retro-High-Pollen/Images/Air-Jordan-1-Retro-High-Pollen/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1626802470&h=320&fm=webp', details='In a simple two-tone format, the upper of the Air Jordan 1 High Pollen is constructed of black tumbled leather with Pollen Yellow overlays and Swooshes. Matching woven tongue tags and a Jordan Wings logo on the collar add authentic 1980s detailing. The Air Jordan 1 High Pollen released in August of 2021 and retailed for $170.', brand_name='Air Jordan')
    retro = Sneax(    # sample
        name='Jordan 1 Retro High Travis Scott', market_price=2250, image='https://images.stockx.com/360/Air-Jordan-1-Retro-High-Travis-Scott/Images/Air-Jordan-1-Retro-High-Travis-Scott/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1608736403&h=320&fm=webp', details='Grab a pack of coffee beans to match the Jordan 1 Retro High Travis Scott. This AJ1 comes with a brown upper plus white accents, black Nike "Swoosh", sail midsole, and a brown sole. These sneakers released in May 2019 and retailed for $175. Mess the club up in these after buying them on StockX.', brand_name='Air Jordan')
    xxxiii = Sneax(    # sample
        name='Jordan XXXIII Travis Scott', market_price=280, image='https://images.stockx.com/360/Air-Jordan-XXXIII-Travis-Scott/Images/Air-Jordan-XXXIII-Travis-Scott/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1606344194&h=320&fm=webp', details='Before you change the song on Astroworld, cop the new Jordan XXXIII Travis Scott. This AJ33 come with a green upper, white Jordan Jumpman logo, white midsole plus green accents, and a green sole. These sneakers released in January 2019 and retailed for $175. After you stand in AstroThunder storm, go place a Bid on StockX now.', brand_name='Air Jordan')
    retsix = Sneax(    # sample
        name='Jordan 6 Retro Travis Scott (GS)', market_price=420, image='https://images.stockx.com/360/Air-Jordan-6-Retro-Travis-Scott-GS/Images/Air-Jordan-6-Retro-Travis-Scott-GS/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1606344162&h=320&fm=webp', details='MEDIUM OLIVE/BLACK-SAIL-UNIVERSITY', brand_name='Air Jordan')
    clog = Sneax(    # sample
        name='Crocs Classic Clog Diplo Take a Walk on the Weird Side', market_price=101, image='https://images.stockx.com/360/Crocs-Classic-Clog-Diplo-Take-a-Walk-on-the-Weird-Side/Images/Crocs-Classic-Clog-Diplo-Take-a-Walk-on-the-Weird-Side/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1624989940&h=320&fm=webp', details='Who would pay this much for this uglu shoe? You would! BUY BUY BUY! Only you have the power to make this particular sneax go up in market price! Think GME!', brand_name='Crocs')
    louis = Sneax(    # sample
        name='Louis Vuitton Trainer Green Mesh', market_price=2500, image='https://images.stockx.com/images/Louis-Vuitton-Trainer-Green-Mesh.png?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=1&trim=color&updated_at=1627055922&pad=0&fm=webp', details='Yeah yeah, you know you need it. Buy it and see it on your feet! Or imagine it, cause these are not real! ', brand_name='Louis Vuitton')
    trainer = Sneax(    # sample
        name='LV Trainer White SS21', market_price=1900, image='https://images.stockx.com/360/LV-Trainer-White-SS21/Images/LV-Trainer-White-SS21/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1620059814&h=320&fm=webp', details='Louis louis louis you stay on my mind! Baby, baby these shoes of mine get me nowhere. Now, Shine!', brand_name='Louis Vuitton')
    high = Sneax(    # sample
        name='Dior B23 High Top Logo Oblique', market_price=1100, image='https://images.stockx.com/360/Dior-B23-High-Top-Logo-Oblique/Images/Dior-B23-High-Top-Logo-Oblique/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1613339404&h=320&fm=webp', details='Dior vs Louis? I choose Dior. Look at this mamasita! Ai chi wa wa! bada bing bada boom', brand_name='Dior')
    b22 = Sneax(    # sample
        name='Dior B22 White Green', market_price=1350, image='https://images.stockx.com/images/Dior-B22-White-Green-4.png?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=1&trim=color&updated_at=1625240582&pad=0&fm=webp', details='I\'m getting tired. Think of your ow stupid text.', brand_name='Dior')
    bluyell = Sneax(    # sample
        name='B22 Blue Yellow', market_price=1700, image='https://images.stockx.com/images/B22-Blue-Yellow.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=1&trim=color&updated_at=1607668576&pad=0&fm=webp', details='Hi grandma!', brand_name='Dior')
    chanel = Sneax(    # sample
        name='Chanel Low Top Trainer CC Triple Black Sued', market_price=2000, image='https://images.stockx.com/images/Chanel-Low-Top-Trainer-CC-Triple-Black-Suede.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=1&trim=color&updated_at=1615419182&pad=0&fm=webp', details='Chanel is class. And class, is money. Are you money? No, you are human, but if you have money, that\s even better! Cause that means you can waste it on this. Buy it and find out how difficult it is to look pretty in NYC and walk 1000 miles only to have some kid to throw up on your Gucci purse. Sick!', brand_name='Chanel')
    sample = Sneax(    # sample
        name='name', market_price=0000, image='image', details='deets', brand_name='brand')
    navu = Sneax(    # sample
        name='Chanel CC High Top Navy', market_price=240, image='https://images.stockx.com/360/Chanel-CC-High-Top-Navy/Images/Chanel-CC-High-Top-Navy/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=1&updated_at=1603481985&h=320&fm=webp', details='This is the last shoe of the day. The last shoe you need to purchase to stay afloat. That is why it is a high top to get you "High"-er. Start thinking smart! Thats why that girl left you after matching with you only to find out you\'re really only 5\'8 and a half. These shoes are the boost you need! 5\'11 is only a few bucks away!', brand_name='Chanel')
    # sample = Sneax(    # sample
    #     name='name', market_price=0000, image='image', details='deets', brand_name='brand')
    # sample = Sneax(    # sample
    #     name='name', market_price=0000, image='image', details='deets', brand_name='brand')
    # sample = Sneax(    # sample
    #     name='name', market_price=0000, image='image', details='deets', brand_name='brand')
    # sample = Sneax(    # sample
    #     name='name', market_price=0000, image='image', details='deets', brand_name='brand')


    db.session.add(yeezy)
    db.session.add(pollen)
    db.session.add(navu)
    db.session.add(clog)
    db.session.add(chanel)
    db.session.add(b22)
    db.session.add(bluyell)
    db.session.add(high)
    db.session.add(trainer)
    db.session.add(louis)
    db.session.add(retsix)
    db.session.add(xxxiii)
    db.session.add(retro)
    db.session.add(travvii)
    db.session.add(jeezy)
    db.session.add(dunk)
    db.session.add(royal)
    db.session.add(chuck)
    db.session.add(heart)
    db.session.add(classicc)
    db.session.add(jordan)
    db.session.add(wings)
    db.session.add(mag)
    db.session.add(yeez7)
    db.session.add(jordan2)
    db.session.add(black)
    db.session.add(colorful)
    db.session.add(plain)
    db.session.add(weird)
    db.session.add(twist)
    db.session.add(anoter)
    db.session.add(yellow)
    db.session.add(solid)
    db.session.add(what)
    db.session.add(j4)
    db.session.add(off)
    db.session.add(frag)
    db.session.add(maadg)
    db.session.add(delta)
    db.session.add(fyw)
    db.session.add(nbTwo)
    db.session.add(travis)
    db.session.add(nbOne)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_sneaxs():
    db.session.execute('TRUNCATE sneaxs RESTART IDENTITY CASCADE;')
    db.session.commit()
