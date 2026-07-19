import React from 'react';

export default function BukharaEn() {
    return (
        <div className="min-h-screen bg-stone-50 text-slate-900">
            <header className="navbar border-b border-slate-200/80 bg-white/80">
                <div className="nav-inner">
                    <a className="logo" href="/">Uz<span>Explore</span></a>
                    <nav className="nav-links" aria-label="Primary navigation">
                        <a href="/#home">Home</a><a href="/#cities">Cities</a><a
                        href="#attractions">Attractions</a><a href="#restaurants">Restaurants</a><a
                        href="#hotels">Hotels</a><a href="#contacts">Contact</a>
                    </nav>
                    <div className="nav-actions">
                        <button className="bukhara-theme-toggle" type="button" aria-label="Toggle theme"
                                title="Toggle theme"><span aria-hidden="true">◐</span></button>
                        <div className="language-switch" aria-label="Language selector"><a className="active"
                                                                                           href="/bukhara"
                                                                                           aria-label="English">EN</a><a
                            href="/ru/bukhara" aria-label="Russian">RU</a></div>
                        <a className="btn btn-primary" href="#categories">Explore Bukhara</a>
                    </div>
                </div>
            </header>
            <main>
                <section className="bukhara-hero bukhara-silk-hero" id="top">
                    <div className="bukhara-silk-hero__art" aria-hidden="true">
                        <div className="bukhara-ornament bukhara-ornament--one"/>
                        <div className="bukhara-ornament bukhara-ornament--two"/>
                        <div className="bukhara-particles"><i style={{"--i": 0}}/><i style={{"--i": 1}}/><i
                            style={{"--i": 2}}/><i style={{"--i": 3}}/><i style={{"--i": 4}}/><i style={{"--i": 5}}/><i
                            style={{"--i": 6}}/><i style={{"--i": 7}}/><i style={{"--i": 8}}/><i style={{"--i": 9}}/><i
                            style={{"--i": 10}}/><i style={{"--i": 11}}/><i style={{"--i": 12}}/><i
                            style={{"--i": 13}}/></div>
                        <svg className="bukhara-route" viewBox="0 0 1000 390" preserveAspectRatio="none">
                            <path className="bukhara-route__shadow"
                                  d="M-20 310 C160 250 238 340 390 250 S660 145 1020 78"/>
                            <path className="bukhara-route__line"
                                  d="M-20 310 C160 250 238 340 390 250 S660 145 1020 78"/>
                            <circle cx={390} cy={250} r={7}/>
                            <circle cx={688} cy={143} r={9}/>
                            <circle cx={908} cy={91} r={6}/>
                        </svg>
                        <div className="bukhara-skyline"><span className="dome dome--one"/><span
                            className="arch arch--one"/><span className="minaret"><i/></span><span
                            className="dome dome--two"/><span className="arch arch--two"/><span
                            className="dome dome--three"/></div>
                    </div>
                    <div className="bukhara-hero__content">
                        <span className="eyebrow">✦ Living heart of the Silk Road</span>
                        <h1>Bukhara</h1>
                        <p>A city of sun-warmed brick, blue domes and thousand-year routes—ancient, yet unmistakably
                            alive.</p>
                        <div className="bukhara-live-time"><span>Local time</span><strong
                            data-bukhara-time>--:--:--</strong><small>Bukhara · UTC+5</small></div>
                        <div className="hero-actions"><a className="btn btn-light" href="#attractions">Explore
                            Places</a><a className="btn btn-ghost"
                                         href="https://www.openstreetmap.org/search?query=Bukhara%2C%20Uzbekistan"
                                         target="_blank" rel="noopener noreferrer">View Map ↗</a></div>
                        <div className="bukhara-hero__facts"><span><strong>2500+</strong> years</span><span
                            className="bukhara-hero__heritage"><strong>UNESCO World Heritage Historic Centre</strong></span><span><strong>140+</strong> monuments</span><span><strong>UTC+5</strong> local time</span>
                        </div>
                    </div>
                </section>
                <section className="bukhara-section" id="about">
                    <div className="bukhara-about">
                        <div><span className="section-kicker">About Bukhara</span><h2>A medieval city that still feels
                            alive</h2><p>Bukhara’s historic centre is a UNESCO World Heritage Historic Centre and
                            preserves one of Central Asia’s most complete medieval cityscapes. Its monuments span more
                            than a thousand years, while its lanes remain places to shop, eat, pray and meet.</p><p>Most
                            Old City highlights are walkable. Allow at least two full days, dress respectfully at
                            religious sites, and save Poi Kalyan for the warm light before sunset.</p></div>
                        <div className="bukhara-stats">
                            <article><strong>2500+</strong><span>years of history</span></article>
                            <article><strong>1993</strong><span>UNESCO World Heritage</span></article>
                            <article><strong>140+</strong><span>architectural monuments</span></article>
                            <article><strong>79</strong><span>place cards in this guide</span></article>
                        </div>
                    </div>
                </section>
                <nav className="bukhara-categories" id="categories" aria-label="Bukhara guide categories">
                    <a href="#attractions"><span>🏛</span>Attractions</a><a href="#restaurants"><span>🍽</span>Restaurants</a><a
                    href="#fast-food"><span>🍔</span>Fast Food</a><a href="#cafes"><span>☕</span>Cafes</a><a
                    href="#hotels"><span>🛏</span>Hotels</a><a href="#pools"><span>🏊</span>Swimming Pools</a><a
                    href="#parks"><span>🌳</span>Parks</a><a href="#shopping"><span>🛍</span>Shopping</a><a
                    href="#museums"><span>🖼</span>Museums</a><a href="#mosques"><span>🕌</span>Mosques</a><a
                    href="#photos"><span>📷</span>Photo Spots</a><a href="#transport"><span>🚆</span>Transport</a><a
                    href="#contacts"><span>☎</span>Useful Contacts</a>
                </nav>
                <section className="bukhara-section bukhara-section--tint" id="attractions">
                    <div className="bukhara-heading">
                        <div><span className="section-kicker">Essential Bukhara</span><h2>Top Attractions</h2></div>
                        <p>Fifteen real landmarks, each linked to its map location and photographed at the named
                            site.</p></div>
                    <div className="bukhara-card-grid bukhara-card-grid--attractions">
                        <article className="bukhara-place-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Ark%20Bukhara.jpg?width=1000"
                            alt="Curved walls and entrance of the Ark of Bukhara" loading="lazy"/>
                            <div><h3>Ark of Bukhara</h3><p>The monumental citadel and former residence of Bukhara’s
                                rulers.</p><span className="bukhara-location">📍 Near Ark Fortress</span>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Ark%20of%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Ark%20of%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Ark%20of%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-place-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/View%20of%20Po-i-Kalyan.jpg?width=1000"
                            alt="Poi Kalyan complex and Kalyan Minaret" loading="lazy"/>
                            <div><h3>Poi Kalyan Complex</h3><p>Bukhara’s signature ensemble of minaret, mosque and
                                Mir-i-Arab Madrasah.</p><span
                                className="bukhara-location">📍 Khodja Nurobobod Street</span>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Poi%20Kalyan%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Poi%20Kalyan%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Poi%20Kalyan%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-place-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/45%20Lab-i%20Hauz%20complex%201810.jpg?width=1000"
                            alt="Historic pool and buildings at Lyabi-Hauz" loading="lazy"/>
                            <div><h3>Lyabi-Hauz</h3><p>A shaded historic pool framed by madrasahs, mulberry trees and
                                city life.</p><span className="bukhara-location">📍 Mekhtar Anbar Street</span>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Lyabi-Hauz%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Lyabi-Hauz%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Lyabi-Hauz%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-place-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Chor%20Minor%2C%20Bukhara.jpg?width=1000"
                            alt="Four blue-topped towers of Chor Minor" loading="lazy"/>
                            <div><h3>Chor Minor</h3><p>A distinctive gatehouse crowned by four individually decorated
                                towers.</p><span className="bukhara-location">📍 Chor Minor Street</span>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Chor%20Minor%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Chor%20Minor%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Chor%20Minor%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-place-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Samanid%20Mausoleum%2C%20Bukhara.jpg?width=1000"
                            alt="Ornate brickwork of the Samanid Mausoleum" loading="lazy"/>
                            <div><h3>Samanid Mausoleum</h3><p>A 10th-century masterpiece of patterned baked-brick
                                architecture.</p><span className="bukhara-location">📍 Samanid Park</span>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Samanid%20Mausoleum%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Samanid%20Mausoleum%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Samanid%20Mausoleum%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-place-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Tok-i-Sarrafon%20Bukhara.jpg?width=1000"
                            alt="Brick vaults of Bukhara's Trading Domes" loading="lazy"/>
                            <div><h3>Trading Domes</h3><p>Historic covered crossroads where crafts and Silk Road trade
                                continue.</p><span className="bukhara-location">📍 Old City bazaar route</span>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Trading%20Domes%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Trading%20Domes%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Trading%20Domes%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-place-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Magoki%20Attori%20Mosque1.jpg?width=1000"
                            alt="Ancient brick facade of Magoki-Attori Mosque" loading="lazy"/>
                            <div><h3>Magoki-Attori Mosque</h3><p>One of the city’s oldest surviving monuments, now a
                                carpet museum.</p><span className="bukhara-location">📍 Near Lyabi-Hauz</span>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Magoki-Attori%20Mosque%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Magoki-Attori%20Mosque%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Magoki-Attori%20Mosque%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-place-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Bolo-Khauz%20Mosque.jpg?width=1000"
                            alt="Carved wooden columns of Bolo Hauz Mosque" loading="lazy"/>
                            <div><h3>Bolo Hauz Mosque</h3><p>An elegant mosque renowned for its painted ceiling and
                                carved columns.</p><span className="bukhara-location">📍 Opposite the Ark</span>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Bolo%20Hauz%20Mosque%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Bolo%20Hauz%20Mosque%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Bolo%20Hauz%20Mosque%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-place-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Abdul%20Aziz%20Khan%20Madrasa%20Bukhara.jpg?width=1000"
                            alt="Colorful portal of Abdulaziz Khan Madrasah" loading="lazy"/>
                            <div><h3>Abdulaziz Khan Madrasah</h3><p>A richly ornamented 17th-century school with
                                exceptional portal decoration.</p><span className="bukhara-location">📍 Khodja Nurobobod Street</span>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Abdulaziz%20Khan%20Madrasah%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Abdulaziz%20Khan%20Madrasah%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Abdulaziz%20Khan%20Madrasah%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-place-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Bukhara%20Ulugbek%20Madrasa%20entrance.jpg?width=1000"
                            alt="Facade of Ulugh Beg Madrasah in Bukhara" loading="lazy"/>
                            <div><h3>Ulugh Beg Madrasah</h3><p>The oldest surviving madrasah in Central Asia, built for
                                the scholar-ruler.</p><span className="bukhara-location">📍 Kosh Madrasah ensemble</span>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Ulugh%20Beg%20Madrasah%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Ulugh%20Beg%20Madrasah%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Ulugh%20Beg%20Madrasah%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-place-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Fayzulla%20Khodjaev%20House%20%2812251472084%29.jpg?width=1000"
                            alt="Decorated courtyard of Fayzulla Khojaev House" loading="lazy"/>
                            <div><h3>Fayzulla Khojaev House Museum</h3><p>A merchant house with painted rooms and
                                displays on Bukharan domestic life.</p><span className="bukhara-location">📍 70 A. Tuqay Street</span>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Fayzulla%20Khojaev%20House%20Museum"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Fayzulla%20Khojaev%20House%20Museum"
                                    target="_blank" rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Fayzulla%20Khojaev%20House%20Museum"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-place-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Sitorai%20Mokhi-hosa.jpg?width=1000"
                            alt="Summer palace of Sitorai Mokhi-Khosa" loading="lazy"/>
                            <div><h3>Sitorai Mokhi-Khosa Palace</h3><p>The last emir’s summer palace blends Bukharan
                                craft with European design.</p><span
                                className="bukhara-location">📍 Mohi Khosa village</span>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Sitorai%20Mokhi-Khosa%20Palace"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Sitorai%20Mokhi-Khosa%20Palace" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Sitorai%20Mokhi-Khosa%20Palace"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-place-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Kukeldash%20Madrasa%20Bukhara.jpg?width=1000"
                            alt="Courtyard and facade of Kukeldash Madrasah" loading="lazy"/>
                            <div><h3>Kukeldash Madrasah</h3><p>A vast 16th-century madrasah anchoring the Lyabi-Hauz
                                ensemble.</p><span className="bukhara-location">📍 Lyabi-Hauz</span>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Kukeldash%20Madrasah%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Kukeldash%20Madrasah%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Kukeldash%20Madrasah%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-place-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Toqi%20Zargaron.jpg?width=1000"
                            alt="Domed bazaar of Toqi Zargaron" loading="lazy"/>
                            <div><h3>Toqi Zargaron</h3><p>The largest surviving trading dome, historically associated
                                with jewellers.</p><span className="bukhara-location">📍 Beside Poi Kalyan</span>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Toqi%20Zargaron%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Toqi%20Zargaron%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Toqi%20Zargaron%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-place-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Chashma-Ayub%20Mausoleum.jpg?width=1000"
                            alt="Conical domes of Chashma-Ayub Mausoleum" loading="lazy"/>
                            <div><h3>Chashma-Ayub Mausoleum</h3><p>A many-domed shrine associated with the legend of the
                                Prophet Job’s spring.</p><span className="bukhara-location">📍 Samanid Park</span>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Chashma-Ayub%20Mausoleum%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Chashma-Ayub%20Mausoleum%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Chashma-Ayub%20Mausoleum%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="bukhara-section" id="restaurants">
                    <div className="bukhara-heading">
                        <div><span className="section-kicker">Local tables</span><h2>Restaurants</h2></div>
                        <p>Current Bukhara venues; confirm current hours and contact details before visiting.</p></div>
                    <div className="bukhara-card-grid bukhara-card-grid--rich">
                        <article className="bukhara-info-card bukhara-rich-card">
                            <div className="bukhara-card-gallery"
                                 aria-label="JOY Chaikhana Lounge / JOY Gastro Restaurant">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>JOY Chaikhana Lounge / JOY Gastro Restaurant</h3><p>Uzbek and Eastern European
                                dining in the Old City.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Hours:</b> Hours may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-card-actions"><a href="https://www.instagram.com/joy.bukhara/"
                                                                         target="_blank" rel="noopener noreferrer">Official
                                    page ↗</a></div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=JOY%20Chaikhana%20Lounge%20%2F%20JOY%20Gastro%20Restaurant%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=JOY%20Chaikhana%20Lounge%20%2F%20JOY%20Gastro%20Restaurant%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=JOY%20Chaikhana%20Lounge%20%2F%20JOY%20Gastro%20Restaurant%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card">
                            <div className="bukhara-card-gallery" aria-label="Old Bukhara Restaurant">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Old Bukhara Restaurant</h3><p>Uzbek restaurant near the historic centre.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Hours:</b> Hours may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-card-actions"><a href="https://old-bukhara.uz/" target="_blank"
                                                                         rel="noopener noreferrer">Official page ↗</a>
                                </div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Old%20Bukhara%20Restaurant%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Old%20Bukhara%20Restaurant%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Old%20Bukhara%20Restaurant%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card">
                            <div className="bukhara-card-gallery" aria-label="Ayvan Restaurant">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Ayvan Restaurant</h3><p>Contemporary Uzbek dining in a refined setting.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Hours:</b> Hours may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Ayvan%20Restaurant%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Ayvan%20Restaurant%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Ayvan%20Restaurant%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card">
                            <div className="bukhara-card-gallery" aria-label="Minzifa Amiko">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Minzifa Amiko</h3><p>Old City restaurant serving regional dishes.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Hours:</b> Hours may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Minzifa%20Amiko%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Minzifa%20Amiko%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Minzifa%20Amiko%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card">
                            <div className="bukhara-card-gallery" aria-label="Andara Restaurant">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Andara Restaurant</h3><p>Popular local restaurant outside the pedestrian Old City
                                core.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Hours:</b> Hours may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Andara%20Restaurant%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Andara%20Restaurant%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Andara%20Restaurant%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card">
                            <div className="bukhara-card-gallery bukhara-card-gallery--single" aria-label="Chinar">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Restaurant</small>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Chinar</h3><p>Popular chaikhana serving Uzbek and national dishes.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Hours:</b> Hours may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-card-actions"><a
                                    href="https://yandex.com/maps/org/chinar/193536256554/" target="_blank"
                                    rel="noopener noreferrer">Current listing ↗</a></div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Chinar%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Chinar%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Chinar%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card">
                            <div className="bukhara-card-gallery bukhara-card-gallery--single" aria-label="Lyabi Hauz">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Restaurant</small>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Lyabi Hauz</h3><p>Restaurant beside the historic pool in the heart of the Old
                                City.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Hours:</b> Hours may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-card-actions"><a
                                    href="https://yandex.com/maps/org/lyabi_hauz/95587691370/" target="_blank"
                                    rel="noopener noreferrer">Current listing ↗</a></div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Lyabi%20Hauz%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Lyabi%20Hauz%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Lyabi%20Hauz%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="bukhara-section bukhara-section--tint" id="fast-food">
                    <div className="bukhara-heading">
                        <div><span className="section-kicker">Quick favourites</span><h2>Fast Food</h2></div>
                        <p>Popular chains and local favourites with map links; confirm current hours before
                            visiting.</p></div>
                    <div className="bukhara-card-grid bukhara-card-grid--rich">
                        <article className="bukhara-info-card bukhara-rich-card">
                            <div className="bukhara-card-gallery" aria-label="Shef Burger">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Shef Burger</h3><p>Popular fast-food venue in Bukhara.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Hours:</b> Hours may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Shef%20Burger%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Shef%20Burger%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Shef%20Burger%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card">
                            <div className="bukhara-card-gallery" aria-label="KFC">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>KFC</h3><p>Popular fast-food venue in Bukhara.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Hours:</b> Hours may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=KFC%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=KFC%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=KFC%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card">
                            <div className="bukhara-card-gallery" aria-label="Dots Chicken">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Dots Chicken</h3><p>Popular fast-food venue in Bukhara.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Hours:</b> Hours may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Dots%20Chicken%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Dots%20Chicken%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Dots%20Chicken%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card">
                            <div className="bukhara-card-gallery" aria-label="Orzu Burger">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Orzu Burger</h3><p>Popular fast-food venue in Bukhara.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Hours:</b> Hours may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Orzu%20Burger%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Orzu%20Burger%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Orzu%20Burger%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card">
                            <div className="bukhara-card-gallery" aria-label="Les Ailes">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Les Ailes</h3><p>Popular fast-food venue in Bukhara.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Hours:</b> Hours may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Les%20Ailes%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Les%20Ailes%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Les%20Ailes%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card">
                            <div className="bukhara-card-gallery" aria-label="Bellissimo Pizza">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Bellissimo Pizza</h3><p>Popular fast-food venue in Bukhara.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Hours:</b> Hours may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Bellissimo%20Pizza%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Bellissimo%20Pizza%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Bellissimo%20Pizza%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="bukhara-section bukhara-section--tint" id="cafes">
                    <div className="bukhara-heading">
                        <div><span className="section-kicker">Tea &amp; coffee</span><h2>Cafes</h2></div>
                        <p>Bukhara cafes with map links; confirm current hours before visiting.</p></div>
                    <div className="bukhara-card-grid bukhara-card-grid--rich">
                        <article className="bukhara-info-card bukhara-rich-card">
                            <div className="bukhara-card-gallery" aria-label="Silk Road Tea House">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Silk Road Tea House</h3><p>Coffee, tea and light food; check the current schedule
                                before visiting.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Hours:</b> Hours may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-card-actions"><a href="https://www.silkroadspices.co/"
                                                                         target="_blank" rel="noopener noreferrer">Official
                                    page ↗</a></div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Silk%20Road%20Tea%20House%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Silk%20Road%20Tea%20House%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Silk%20Road%20Tea%20House%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card">
                            <div className="bukhara-card-gallery" aria-label="Bon Bon Terrace">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Bon Bon Terrace</h3><p>Coffee, tea and light food; check the current schedule before
                                visiting.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Hours:</b> Hours may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Bon%20Bon%20Terrace%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Bon%20Bon%20Terrace%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Bon%20Bon%20Terrace%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card">
                            <div className="bukhara-card-gallery" aria-label="Donuts & Coffee">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Donuts &amp; Coffee</h3><p>Coffee, tea and light food; check the current schedule
                                before visiting.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Hours:</b> Hours may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Donuts%20%26%20Coffee%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Donuts%20%26%20Coffee%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Donuts%20%26%20Coffee%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card">
                            <div className="bukhara-card-gallery" aria-label="Old Street">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Old Street</h3><p>Coffee, tea and light food; check the current schedule before
                                visiting.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Hours:</b> Hours may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Old%20Street%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Old%20Street%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Old%20Street%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card">
                            <div className="bukhara-card-gallery" aria-label="Caffelito Coffee">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Caffelito Coffee</h3><p>Coffee, tea and light food; check the current schedule
                                before visiting.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Hours:</b> Hours may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-card-actions"><a href="https://caffelito.coffee/"
                                                                         target="_blank" rel="noopener noreferrer">Official
                                    page ↗</a></div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Caffelito%20Coffee%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Caffelito%20Coffee%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Caffelito%20Coffee%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card">
                            <div className="bukhara-card-gallery" aria-label="Nook Cafe at Hotel Indigo">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Nook Cafe at Hotel Indigo</h3><p>Coffee, tea and light food; check the current
                                schedule before visiting.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Hours:</b> Hours may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-card-actions"><a
                                    href="https://www.ihg.com/hotelindigo/hotels/us/en/bukhara/bhkbh/hoteldetail/dining"
                                    target="_blank" rel="noopener noreferrer">Official page ↗</a></div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Nook%20Cafe%20at%20Hotel%20Indigo%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Nook%20Cafe%20at%20Hotel%20Indigo%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Nook%20Cafe%20at%20Hotel%20Indigo%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="bukhara-section" id="hotels">
                    <div className="bukhara-heading">
                        <div><span className="section-kicker">Where to stay</span><h2>Hotels</h2></div>
                        <p>Bukhara stays with official links when available. No invented prices or unrelated hotel
                            photography.</p></div>
                    <div className="bukhara-card-grid bukhara-card-grid--rich">
                        <article className="bukhara-info-card bukhara-rich-card ">
                            <div className="bukhara-card-gallery" aria-label="Mercure Bukhara Old Town photo gallery">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Mercure Bukhara Old Town</h3><p>Old City international hotel.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> 206 Samarkand Street</li>
                                    <li><b>Phone:</b> <a href="tel:+998553050707">+998 55 305 07 07</a></li>
                                    <li><b>Officially listed facilities:</b> Indoor pool · spa/hammam · parking ·
                                        restaurant
                                    </li>
                                    <li><b>Facilities:</b> Parking: yes · Pool: indoor · Spa: yes · Restaurant: yes</li>
                                </ul>
                                <p className="bukhara-price-note">Price depends on date — check the official website</p>
                                <div className="bukhara-card-actions"><a
                                    href="https://all.accor.com/hotel/C0E8/index.en.shtml" target="_blank"
                                    rel="noopener noreferrer">Official site ↗</a></div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Mercure+Bukhara+Old+Town"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Mercure+Bukhara+Old+Town" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Mercure+Bukhara+Old+Town"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card ">
                            <div className="bukhara-card-gallery" aria-label="Wyndham Bukhara photo gallery">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Wyndham Bukhara</h3><p>International full-service hotel.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Officially listed facilities:</b> Outdoor pool · spa · restaurant</li>
                                    <li><b>Facilities:</b> Parking: check · Pool: outdoor · Spa: yes · Restaurant: yes
                                    </li>
                                </ul>
                                <p className="bukhara-price-note">Price depends on date — check the official website</p>
                                <div className="bukhara-card-actions"><a
                                    href="https://www.wyndhamhotels.com/wyndham/bukhara-uzbekistan/wyndham-bukhara/overview"
                                    target="_blank" rel="noopener noreferrer">Official site ↗</a></div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Wyndham+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Wyndham+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Wyndham+Bukhara" target="_blank"
                                    rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card ">
                            <div className="bukhara-card-gallery" aria-label="Hotel Indigo Bukhara photo gallery">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Hotel Indigo Bukhara</h3><p>Design-led hotel inspired by Bukhara craft.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> 317 I. Karimov Street</li>
                                    <li><b>Phone:</b> <a href="tel:+998553105050">+998 55 310 50 50</a></li>
                                    <li><b>Officially listed facilities:</b> Heated outdoor pool · spa · parking ·
                                        restaurant
                                    </li>
                                    <li><b>Facilities:</b> Parking: yes · Pool: outdoor · Spa: yes · Restaurant: yes
                                    </li>
                                </ul>
                                <p className="bukhara-price-note">Price depends on date — check the official website</p>
                                <div className="bukhara-card-actions"><a
                                    href="https://www.ihg.com/hotelindigo/hotels/us/en/bukhara/bhkbh/hoteldetail"
                                    target="_blank" rel="noopener noreferrer">Official site ↗</a></div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Hotel+Indigo+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Hotel+Indigo+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Hotel+Indigo+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card ">
                            <div className="bukhara-card-gallery" aria-label="Sahid Zarafshon photo gallery">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Sahid Zarafshon</h3><p>Large central hotel.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> 7 M. Iqbol Street</li>
                                    <li><b>Phone:</b> <a href="tel:+998655055000">+998 65 505 50 00</a></li>
                                    <li><b>Officially listed facilities:</b> Indoor and outdoor pools · sauna · gym ·
                                        restaurant
                                    </li>
                                    <li><b>Facilities:</b> Parking: check · Pools: indoor and outdoor · Spa/sauna: yes ·
                                        Restaurant: yes
                                    </li>
                                </ul>
                                <p className="bukhara-price-note">Price depends on date — check the official website</p>
                                <div className="bukhara-card-actions"><a href="https://sahidzarafshon.com/"
                                                                         target="_blank" rel="noopener noreferrer">Official
                                    site ↗</a></div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Sahid+Zarafshon+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Sahid+Zarafshon+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Sahid+Zarafshon+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card ">
                            <div className="bukhara-card-gallery" aria-label="Garden Plaza Bukhara photo gallery">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Garden Plaza Bukhara</h3><p>Modern 72-room hotel.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> 334 Dilkusho</li>
                                    <li><b>Phone:</b> <a href="tel:+998951835005">+998 95 183 50 05</a></li>
                                    <li><b>Officially listed facilities:</b> Indoor pool · spa · restaurant</li>
                                    <li><b>Facilities:</b> Parking: check before visiting · Pool: indoor · Spa: yes ·
                                        Restaurant: yes
                                    </li>
                                </ul>
                                <p className="bukhara-price-note">Price depends on date — check the official website</p>
                                <div className="bukhara-card-actions"><a href="https://gardenplaza.uz/en"
                                                                         target="_blank" rel="noopener noreferrer">Official
                                    site ↗</a></div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Garden+Plaza+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Garden+Plaza+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Garden+Plaza+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card ">
                            <div className="bukhara-card-gallery"
                                 aria-label="Komil Bukhara Boutique Hotel photo gallery">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Komil Bukhara Boutique Hotel</h3><p>Historic-house stay near Lyabi-Hauz.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Facilities:</b> Check with the property before booking</li>
                                    <li><b>Facilities:</b> Parking: check · Pool: check · Spa: check · Restaurant: check
                                    </li>
                                </ul>
                                <p className="bukhara-price-note">Price depends on date — check the official website</p>
                                <div className="bukhara-card-actions"><a href="https://komiltravel.com/" target="_blank"
                                                                         rel="noopener noreferrer">Official site ↗</a>
                                </div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Komil+Bukhara+Boutique+Hotel"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Komil+Bukhara+Boutique+Hotel" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Komil+Bukhara+Boutique+Hotel"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card ">
                            <div className="bukhara-card-gallery" aria-label="Lyabi House Hotel photo gallery">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Lyabi House Hotel</h3><p>Traditional Old City hotel.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Facilities:</b> Check with the property before booking</li>
                                    <li><b>Facilities:</b> Parking: check · Pool: check · Spa: check · Restaurant: check
                                    </li>
                                </ul>
                                <p className="bukhara-price-note">Price depends on date — check the official website</p>
                                <div className="bukhara-card-actions"><a href="https://www.lyabihouse.com/en/"
                                                                         target="_blank" rel="noopener noreferrer">Official
                                    site ↗</a></div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Lyabi+House+Hotel+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Lyabi+House+Hotel+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Lyabi+House+Hotel+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card ">
                            <div className="bukhara-card-gallery" aria-label="Amelia Boutique Hotel photo gallery">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Amelia Boutique Hotel</h3><p>Converted merchant-house hotel.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Facilities:</b> Check with the property before booking</li>
                                    <li><b>Facilities:</b> Parking: check · Pool: check · Spa: check · Restaurant: check
                                    </li>
                                </ul>
                                <p className="bukhara-price-note">Price depends on date — check the official website</p>
                                <div className="bukhara-card-actions"/>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Amelia+Boutique+Hotel+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Amelia+Boutique+Hotel+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Amelia+Boutique+Hotel+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card ">
                            <div className="bukhara-card-gallery" aria-label="Boutique Hotel Minzifa photo gallery">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Boutique Hotel Minzifa</h3><p>Traditional-style Old City stay.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Facilities:</b> Check with the property before booking</li>
                                    <li><b>Facilities:</b> Parking: check · Pool: check · Spa: check · Restaurant: check
                                    </li>
                                </ul>
                                <p className="bukhara-price-note">Price depends on date — check the official website</p>
                                <div className="bukhara-card-actions"/>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Boutique+Hotel+Minzifa+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Boutique+Hotel+Minzifa+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Boutique+Hotel+Minzifa+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card ">
                            <div className="bukhara-card-gallery" aria-label="Kukaldosh Boutique Hotel photo gallery">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Kukaldosh Boutique Hotel</h3><p>Small hotel close to Lyabi-Hauz.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Facilities:</b> Check with the property before booking</li>
                                    <li><b>Facilities:</b> Parking: check · Pool: check · Spa: check · Restaurant: check
                                    </li>
                                </ul>
                                <p className="bukhara-price-note">Price depends on date — check the official website</p>
                                <div className="bukhara-card-actions"/>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Kukaldosh+Boutique+Hotel+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Kukaldosh+Boutique+Hotel+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Kukaldosh+Boutique+Hotel+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card ">
                            <div className="bukhara-card-gallery" aria-label="Asia Bukhara Hotel photo gallery">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Asia Bukhara Hotel</h3><p>Established hotel near the Old City.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Facilities:</b> Check with the property before booking</li>
                                    <li><b>Facilities:</b> Parking: check · Pool: check · Spa: check · Restaurant: check
                                    </li>
                                </ul>
                                <p className="bukhara-price-note">Price depends on date — check the official website</p>
                                <div className="bukhara-card-actions"/>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Asia+Bukhara+Hotel"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Asia+Bukhara+Hotel" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Asia+Bukhara+Hotel" target="_blank"
                                    rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card ">
                            <div className="bukhara-card-gallery" aria-label="Omar Khayyam Hotel photo gallery">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Omar Khayyam Hotel</h3><p>Central hotel near the trading domes.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Facilities:</b> Check with the property before booking</li>
                                    <li><b>Facilities:</b> Parking: check · Pool: check · Spa: check · Restaurant: check
                                    </li>
                                </ul>
                                <p className="bukhara-price-note">Price depends on date — check the official website</p>
                                <div className="bukhara-card-actions"/>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Omar+Khayyam+Hotel+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Omar+Khayyam+Hotel+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Omar+Khayyam+Hotel+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card ">
                            <div className="bukhara-card-gallery" aria-label="Amulet Hotel photo gallery">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Amulet Hotel</h3><p>Restored-madrasah atmosphere.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Facilities:</b> Check with the property before booking</li>
                                    <li><b>Facilities:</b> Parking: check · Pool: check · Spa: check · Restaurant: check
                                    </li>
                                </ul>
                                <p className="bukhara-price-note">Price depends on date — check the official website</p>
                                <div className="bukhara-card-actions"/>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Amulet+Hotel+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Amulet+Hotel+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Amulet+Hotel+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card">
                            <div className="bukhara-card-gallery bukhara-card-gallery--single" aria-label="Turon Plaza">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Hotel</small>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Turon Plaza</h3><p>Hotel with pool and sauna; check current booking conditions on
                                the official website.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> 550 Sanoatchilar Street</li>
                                    <li><b>Phone:</b> <a href="tel:+998982746575">+998 98 274 65 75</a></li>
                                    <li><b>Facilities:</b> Parking: yes · Pool: yes · Spa/sauna: yes · Restaurant: yes
                                    </li>
                                </ul>
                                <p className="bukhara-price-note">Price depends on date — check the official website</p>
                                <div className="bukhara-card-actions"><a href="https://turonplaza.uz/" target="_blank"
                                                                         rel="noopener noreferrer">Official site ↗</a>
                                </div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Turon%20Plaza%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Turon%20Plaza%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Turon%20Plaza%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="bukhara-section bukhara-section--tint" id="pools">
                    <div className="bukhara-heading">
                        <div><span className="section-kicker">Cool down</span><h2>Swimming Pools</h2></div>
                        <p>Public and hotel pools sourced from official pages and current business listings. Check
                            outside-guest access before travelling.</p></div>
                    <div className="bukhara-card-grid bukhara-card-grid--rich">
                        <article className="bukhara-info-card bukhara-rich-card bukhara-pool-card">
                            <div className="bukhara-card-gallery" aria-label="Atlantis Pool photo gallery">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Atlantis Pool</h3><p>Public pool and gym complex.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> Ibrokhim Muminov Street</li>
                                    <li><b>Hours:</b> Hours may change — check before visiting</li>
                                    <li><b>Phone:</b> <a href="tel:+998952350011">+998 95 235 00 11</a></li>
                                    <li><b>Access:</b> Public complex; check current entry rules before visiting</li>
                                </ul>
                                <div className="bukhara-card-actions"><a href="https://www.atlantispool.uz/pool"
                                                                         target="_blank" rel="noopener noreferrer">Official
                                    site ↗</a></div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Atlantis+Pool+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Atlantis+Pool+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Atlantis+Pool+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card bukhara-pool-card">
                            <div className="bukhara-card-gallery" aria-label="Aquamarine Spa And Pool photo gallery">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Aquamarine Spa And Pool</h3><p>Spa, sauna and swimming pool.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> 7 Mustakillik Street, first floor</li>
                                    <li><b>Phone:</b> <a href="tel:+998655055553">+998 65 505 55 53</a></li>
                                    <li><b>Hours / price:</b> Check before visiting</li>
                                    <li><b>Access:</b> Check visitor access before arriving</li>
                                </ul>
                                <div className="bukhara-card-actions"/>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Aquamarine+Spa+Pool+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Aquamarine+Spa+Pool+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Aquamarine+Spa+Pool+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card bukhara-pool-card">
                            <div className="bukhara-card-gallery" aria-label="Garden Plaza Bukhara Pool photo gallery">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Garden Plaza Bukhara Pool</h3><p>Indoor hotel pool and spa facilities; confirm
                                outside guest access.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> 334 Dilkusho</li>
                                    <li><b>Phone:</b> <a href="tel:+998951835005">+998 95 183 50 05</a></li>
                                    <li><b>Hours / price:</b> Check before visiting</li>
                                    <li><b>Access:</b> Check access before visiting</li>
                                </ul>
                                <div className="bukhara-card-actions"><a href="https://gardenplaza.uz/en"
                                                                         target="_blank" rel="noopener noreferrer">Official
                                    site ↗</a></div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Garden+Plaza+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Garden+Plaza+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Garden+Plaza+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card bukhara-pool-card">
                            <div className="bukhara-card-gallery"
                                 aria-label="VOHA Pool at Wyndham Bukhara photo gallery">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>VOHA Pool at Wyndham Bukhara</h3><p>Seasonal outdoor hotel pool; verify day
                                access.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> use the current map entrance</li>
                                    <li><b>Access:</b> Check access before visiting</li>
                                    <li><b>Hours / price:</b> Check before visiting</li>
                                </ul>
                                <div className="bukhara-card-actions"><a href="https://wyndhambukhara.com/en-gb/"
                                                                         target="_blank" rel="noopener noreferrer">Official
                                    site ↗</a></div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Wyndham+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Wyndham+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Wyndham+Bukhara" target="_blank"
                                    rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card bukhara-pool-card">
                            <div className="bukhara-card-gallery"
                                 aria-label="Mercure Bukhara Old Town Pool photo gallery">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Mercure Bukhara Old Town Pool</h3><p>Indoor 4 × 14 m hotel pool in the spa
                                complex.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> 206 Samarkand Street</li>
                                    <li><b>Phone:</b> <a href="tel:+998553050707">+998 55 305 07 07</a></li>
                                    <li><b>Hours / price:</b> Check before visiting</li>
                                    <li><b>Access:</b> Check access before visiting</li>
                                </ul>
                                <div className="bukhara-card-actions"><a
                                    href="https://all.accor.com/hotel/C0E8/index.en.shtml" target="_blank"
                                    rel="noopener noreferrer">Official site ↗</a></div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Mercure+Bukhara+Old+Town"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Mercure+Bukhara+Old+Town" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Mercure+Bukhara+Old+Town"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card bukhara-pool-card">
                            <div className="bukhara-card-gallery" aria-label="Sahid Zarafshon Pools photo gallery">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Sahid Zarafshon Pools</h3><p>Indoor and outdoor hotel pools.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> 7 M. Iqbol Street</li>
                                    <li><b>Indoor pool:</b> Open 24/7</li>
                                    <li><b>Phone:</b> <a href="tel:+998655055000">+998 65 505 50 00</a></li>
                                    <li><b>Access:</b> Check access before visiting</li>
                                </ul>
                                <div className="bukhara-card-actions"><a href="https://sahidzarafshon.com/"
                                                                         target="_blank" rel="noopener noreferrer">Official
                                    site ↗</a></div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Sahid+Zarafshon+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Sahid+Zarafshon+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Sahid+Zarafshon+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card bukhara-pool-card">
                            <div className="bukhara-card-gallery"
                                 aria-label="Hotel Indigo Courtyard Pool photo gallery">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Exterior</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Interior</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Hotel Indigo Courtyard Pool</h3><p>Outdoor hotel pool; confirm seasonal availability
                                before visiting.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> 317 I. Karimov Street</li>
                                    <li><b>Hours:</b> Hours may change — check before visiting</li>
                                    <li><b>Phone:</b> <a href="tel:+998553105050">+998 55 310 50 50</a></li>
                                    <li><b>Access:</b> Check access before visiting</li>
                                </ul>
                                <div className="bukhara-card-actions"><a
                                    href="https://www.ihg.com/hotelindigo/hotels/us/en/bukhara/bhkbh/hoteldetail/amenities"
                                    target="_blank" rel="noopener noreferrer">Official details ↗</a></div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Hotel+Indigo+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Hotel+Indigo+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Hotel+Indigo+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-rich-card bukhara-pool-card">
                            <div className="bukhara-card-gallery" aria-label="Turon Plaza pool">
                                <div className="bukhara-gallery__track">
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Pool</small>
                                    </div>
                                    <div className="bukhara-gallery__slide bukhara-photo-placeholder"><span>Local photo needed</span><small>Spa</small>
                                    </div>
                                </div>
                                <button className="gallery-prev" type="button" aria-label="Previous photo">‹</button>
                                <button className="gallery-next" type="button" aria-label="Next photo">›</button>
                            </div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Turon Plaza Pool</h3><p>Hotel indoor/outdoor pool and sauna; confirm day access
                                before travelling.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> 550 Sanoatchilar Street</li>
                                    <li><b>Hours / price:</b> Check before visiting</li>
                                    <li><b>Phone:</b> <a href="tel:+998982746575">+998 98 274 65 75</a></li>
                                    <li><b>Access:</b> Check access before visiting</li>
                                </ul>
                                <div className="bukhara-card-actions"><a href="https://turonplaza.uz/" target="_blank"
                                                                         rel="noopener noreferrer">Official site ↗</a>
                                </div>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Turon%20Plaza%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Turon%20Plaza%20Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Turon%20Plaza%20Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="bukhara-section" id="parks">
                    <div className="bukhara-heading">
                        <div><span className="section-kicker">Green pauses</span><h2>Parks</h2></div>
                        <p>Five useful green and recreation areas with exact images where reusable photography is
                            available.</p></div>
                    <div className="bukhara-card-grid bukhara-card-grid--rich">
                        <article className="bukhara-info-card bukhara-directory-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/20230610%20Boukhara007.jpg?width=1000"
                            alt="Samonids Park in Bukhara" loading="lazy"/>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span>
                                </div>
                                <h3>Samonids Park</h3><p>Historic landscaped park around the Samanid Mausoleum and
                                Chashma-Ayub.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> Near Chashma-Ayub and Samanid Mausoleum</li>
                                    <li><b>Access:</b> check the current map listing</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Samonids+Park+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Samonids+Park+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Samonids+Park+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-directory-card">
                            <div className="bukhara-photo-placeholder bukhara-directory-placeholder"><span>Local photo needed</span><small>Add
                                a local image</small></div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Mirzo Ulugbek Park</h3><p>City recreation park; current local photography is
                                needed.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> Bukhara city; use live map pin</li>
                                    <li><b>Access:</b> check the current map listing</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Mirzo+Ulugbek+Park+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Mirzo+Ulugbek+Park+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Mirzo+Ulugbek+Park+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-directory-card">
                            <div className="bukhara-photo-placeholder bukhara-directory-placeholder"><span>Local photo needed</span><small>Add
                                a local image</small></div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Central Park</h3><p>Central Bukhara recreation space; confirm the preferred entrance
                                on the map.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> Bukhara city centre; use live map entrance</li>
                                    <li><b>Access:</b> check the current map listing</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Central+Park+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Central+Park+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Central+Park+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-directory-card">
                            <div className="bukhara-photo-placeholder bukhara-directory-placeholder"><span>Local photo needed</span><small>Add
                                a local image</small></div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Globus</h3><p>Local recreation area known as Globus.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> Bukhara; use live map pin</li>
                                    <li><b>Access:</b> check the current map listing</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Globus+Park+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Globus+Park+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Globus+Park+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-directory-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Harem%20of%20Sitorai%20Mokhi-Khosa%20Palace%2001.jpg?width=1000"
                            alt="Gardens at Sitorai Mokhi-Khosa Palace" loading="lazy"/>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span>
                                </div>
                                <h3>Sitorai Mokhi-Khosa Gardens</h3><p>Landscaped grounds and courtyards of the emir’s
                                summer palace.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> Sitorai Mokhi-Khosa Palace estate</li>
                                    <li><b>Access:</b> check the current map listing</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Sitorai+Mokhi-Khosa+Palace"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Sitorai+Mokhi-Khosa+Palace" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Sitorai+Mokhi-Khosa+Palace"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="bukhara-section bukhara-section--tint" id="shopping">
                    <div className="bukhara-heading">
                        <div><span className="section-kicker">Craft &amp; commerce</span><h2>Shopping and Malls</h2>
                        </div>
                        <p>Modern malls and historic bazaars are separated clearly; exact reusable imagery is used only
                            where confirmed.</p></div>
                    <div className="bukhara-card-grid bukhara-card-grid--rich">
                        <article className="bukhara-info-card bukhara-directory-card">
                            <div className="bukhara-photo-placeholder bukhara-directory-placeholder"><span>Local photo needed</span><small>Add
                                a local image</small></div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Buxoro Mall / Buxoro Savdo Majmuasi</h3><p>Modern shopping complex; local exterior
                                photography is needed.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> Bukhara; check the current entrance on the map</li>
                                    <li><b>Hours:</b> may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Buxoro+Savdo+Majmuasi+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Buxoro+Savdo+Majmuasi+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Buxoro+Savdo+Majmuasi+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-directory-card">
                            <div className="bukhara-photo-placeholder bukhara-directory-placeholder"><span>Local photo needed</span><small>Add
                                a local image</small></div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Chinar Mall</h3><p>Modern shopping centre with retail, cafes and leisure
                                facilities.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> 95/1 Turdi Faroghiy Street</li>
                                    <li><b>Hours:</b> may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Chinar+Mall+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Chinar+Mall+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Chinar+Mall+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-directory-card">
                            <div className="bukhara-photo-placeholder bukhara-directory-placeholder"><span>Local photo needed</span><small>Add
                                a local image</small></div>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span><span
                                    className="bukhara-status bukhara-status--photo">Local photo needed</span></div>
                                <h3>Minor Mall</h3><p>Local shopping centre.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> Bukhara; verify current entrance on map</li>
                                    <li><b>Hours:</b> may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Minor+Mall+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Minor+Mall+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Minor+Mall+Bukhara" target="_blank"
                                    rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-directory-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Bazaar%20in%20Bukhara.jpg?width=1000"
                            alt="Bukhara bazaar stalls" loading="lazy"/>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span>
                                </div>
                                <h3>Bukhara Central Bazaar</h3><p>Working market for produce, spices, bread and daily
                                goods.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> Central Bazaar district, Bukhara</li>
                                    <li><b>Hours:</b> may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Bukhara+Central+Bazaar"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Bukhara+Central+Bazaar" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Bukhara+Central+Bazaar"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-directory-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Abdullah%20Khan%20Tim%201.JPG?width=1000"
                            alt="Tim Abdullah Khan historic market" loading="lazy"/>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span>
                                </div>
                                <h3>Tim Abdullah Khan</h3><p>Historic covered market associated with textiles and
                                carpets.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> Historic trading-dome quarter</li>
                                    <li><b>Hours:</b> may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Tim+Abdullah+Khan+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Tim+Abdullah+Khan+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Tim+Abdullah+Khan+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-directory-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Toqi%20Zargaron.jpg?width=1000"
                            alt="Toqi Zargaron trading dome" loading="lazy"/>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span>
                                </div>
                                <h3>Toqi Zargaron</h3><p>Historic jewellers’ trading dome beside Poi Kalyan.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> Beside Poi Kalyan</li>
                                    <li><b>Hours:</b> may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Toqi+Zargaron+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Toqi+Zargaron+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Toqi+Zargaron+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-directory-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Tok-i-Sarrafon%20Bukhara.jpg?width=1000"
                            alt="Toqi Sarrafon trading dome" loading="lazy"/>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span>
                                </div>
                                <h3>Toqi Sarrafon</h3><p>Former money-changers’ dome near Lyabi-Hauz.</p>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> Near Lyabi-Hauz</li>
                                    <li><b>Hours:</b> may change — check before visiting</li>
                                </ul>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Toqi+Sarrafon+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Toqi+Sarrafon+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Toqi+Sarrafon+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="bukhara-section" id="museums">
                    <div className="bukhara-heading">
                        <div><span className="section-kicker">Collections &amp; stories</span><h2>Museums</h2></div>
                        <p>Major collections of the Bukhara State Museum-Reserve, shown at the buildings that house
                            them.</p></div>
                    <div className="bukhara-card-grid bukhara-card-grid--directory">
                        <article className="bukhara-info-card bukhara-directory-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Ark%20of%20Bukhara%2020.jpg?width=1000"
                            alt="Historic interior detail inside the Ark of Bukhara" loading="lazy"/>
                            <div><h3>Ark Citadel Museum</h3><p>History, archaeology and court architecture within the
                                rulers’ fortress.</p>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Ark+Museum+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Ark+Museum+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Ark+Museum+Bukhara" target="_blank"
                                    rel="noopener noreferrer">OpenStreetMap</a></div>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> Near Ark Fortress</li>
                                    <li><b>Hours:</b> may change — check before visiting</li>
                                    <li><b>Ticket:</b> check before visiting</li>
                                </ul>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-directory-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Fayzulla%20Khodjaev%20House%20(12250772706).jpg?width=1000"
                            alt="Decorated interior of Fayzulla Khojaev House Museum" loading="lazy"/>
                            <div><h3>Fayzulla Khojaev House Museum</h3><p>Merchant-house interiors and displays on
                                Bukharan domestic culture.</p>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Fayzulla+Khojaev+House+Museum"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Fayzulla+Khojaev+House+Museum" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Fayzulla+Khojaev+House+Museum"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> Fayzulla Khojaev House, Bukhara</li>
                                    <li><b>Hours:</b> may change — check before visiting</li>
                                    <li><b>Ticket:</b> check before visiting</li>
                                </ul>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-directory-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Sitorai%20Mokhi-Khosa%20Palace%2001.jpg?width=1000"
                            alt="Portal of Sitorai Mokhi-Khosa Palace" loading="lazy"/>
                            <div><h3>Museum of Decorative Applied Art</h3><p>Applied-arts collections displayed in the
                                emir’s summer palace.</p>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Museum+of+Decorative+Applied+Art+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Museum+of+Decorative+Applied+Art+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Museum+of+Decorative+Applied+Art+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> Sitorai Mokhi-Khosa Palace</li>
                                    <li><b>Hours:</b> may change — check before visiting</li>
                                    <li><b>Ticket:</b> check before visiting</li>
                                </ul>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-directory-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Magoki%20Attori%20Mosque%20Entrance.jpg?width=1000"
                            alt="Entrance to Magoki-Attori, home of the Carpet Museum" loading="lazy"/>
                            <div><h3>Carpet Museum</h3><p>Carpet-weaving collection inside the historic Magoki-Attori
                                monument.</p>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Carpet+Museum+Magoki+Attori+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Carpet+Museum+Magoki+Attori+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Carpet+Museum+Magoki+Attori+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> Magoki-Attori Mosque, near Lyabi-Hauz</li>
                                    <li><b>Hours:</b> may change — check before visiting</li>
                                    <li><b>Ticket:</b> check before visiting</li>
                                </ul>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-directory-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/20230610%20Boukhara076.jpg?width=1000"
                            alt="Water-history museum display inside Chashma-Ayub" loading="lazy"/>
                            <div><h3>Museum of Water Supply History</h3><p>Water heritage displays inside Chashma-Ayub
                                Mausoleum.</p>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Chashma+Ayub+Museum+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Chashma+Ayub+Museum+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Chashma+Ayub+Museum+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                                <ul className="bukhara-facts-list">
                                    <li><b>Address:</b> Chashma-Ayub, Samonids Park</li>
                                    <li><b>Hours:</b> may change — check before visiting</li>
                                    <li><b>Ticket:</b> check before visiting</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="bukhara-section bukhara-section--tint" id="mosques">
                    <div className="bukhara-heading">
                        <div><span className="section-kicker">Sacred architecture</span><h2>Mosques</h2></div>
                        <p>Respectful visitor guidance, exact monument photography and three map choices for every
                            mosque.</p></div>
                    <div className="bukhara-card-grid bukhara-card-grid--rich">
                        <article className="bukhara-info-card bukhara-directory-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Kalyan%20Mosque%20in%20Bukhara.jpg?width=1000"
                            alt="Kalyan Mosque" loading="lazy"/>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span>
                                </div>
                                <h3>Kalyan Mosque</h3><p>Historic sacred architecture in Bukhara.</p><p
                                className="bukhara-visitor-note">Visitor note: Monumental Friday mosque; sightseeing
                                access may pause during prayers.</p><p className="bukhara-wudu">Wudu: check availability
                                on site</p>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Kalyan+Mosque+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Kalyan+Mosque+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Kalyan+Mosque+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-directory-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Bukhara%20Bolo%20Haouz%20mosque%202.jpg?width=1000"
                            alt="Bolo Hauz Mosque" loading="lazy"/>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span>
                                </div>
                                <h3>Bolo Hauz Mosque</h3><p>Historic sacred architecture in Bukhara.</p><p
                                className="bukhara-visitor-note">Visitor note: Active mosque opposite the Ark; dress
                                modestly and follow local signs.</p><p className="bukhara-wudu">Wudu: check availability
                                on site</p>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Bolo+Hauz+Mosque+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Bolo+Hauz+Mosque+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Bolo+Hauz+Mosque+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-directory-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Magoki%20Attori%20Mosque%20Entrance.jpg?width=1000"
                            alt="Magoki-Attori Mosque" loading="lazy"/>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span>
                                </div>
                                <h3>Magoki-Attori Mosque</h3><p>Historic sacred architecture in Bukhara.</p><p
                                className="bukhara-visitor-note">Visitor note: Historic former mosque operating as a
                                museum; follow museum access rules.</p><p className="bukhara-wudu">Wudu: check
                                availability on site</p>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Magoki+Attori+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Magoki+Attori+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Magoki+Attori+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-directory-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Bukhara%20Xoja%20Zayniddin%20Mosque.jpg?width=1000"
                            alt="Khoja Zaynuddin Mosque" loading="lazy"/>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span>
                                </div>
                                <h3>Khoja Zaynuddin Mosque</h3><p>Historic sacred architecture in Bukhara.</p><p
                                className="bukhara-visitor-note">Visitor note: Neighbourhood mosque and khanaka; confirm
                                visitor access on arrival.</p><p className="bukhara-wudu">Wudu: check availability on
                                site</p>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Khoja+Zaynuddin+Mosque+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Khoja+Zaynuddin+Mosque+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Khoja+Zaynuddin+Mosque+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-directory-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Bukhara%20Baland%20Mosque%201.jpg?width=1000"
                            alt="Baland Mosque" loading="lazy"/>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span>
                                </div>
                                <h3>Baland Mosque</h3><p>Historic sacred architecture in Bukhara.</p><p
                                className="bukhara-visitor-note">Visitor note: Small historic mosque; enter only when
                                permitted and avoid prayer times.</p><p className="bukhara-wudu">Wudu: check
                                availability on site</p>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Baland+Mosque+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Baland+Mosque+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Baland+Mosque+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                        <article className="bukhara-info-card bukhara-directory-card"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Bukhara%20Namazgoh%20Mosque%201.jpg?width=1000"
                            alt="Namazgah Mosque" loading="lazy"/>
                            <div>
                                <div className="bukhara-card-status"><span className="bukhara-status">Check before visiting</span>
                                </div>
                                <h3>Namazgah Mosque</h3><p>Historic sacred architecture in Bukhara.</p><p
                                className="bukhara-visitor-note">Visitor note: Historic festival mosque south of the Old
                                City; confirm opening at the site.</p><p className="bukhara-wudu">Wudu: check
                                availability on site</p>
                                <div className="bukhara-map-links"><a
                                    href="https://www.google.com/maps/search/?api=1&query=Namazgah+Mosque+Bukhara"
                                    target="_blank" rel="noopener noreferrer">Google Maps</a><a
                                    href="https://yandex.com/maps/?text=Namazgah+Mosque+Bukhara" target="_blank"
                                    rel="noopener noreferrer">Yandex Maps</a><a
                                    href="https://www.openstreetmap.org/search?query=Namazgah+Mosque+Bukhara"
                                    target="_blank" rel="noopener noreferrer">OpenStreetMap</a></div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="bukhara-section" id="photos">
                    <div className="bukhara-heading">
                        <div><span className="section-kicker">Golden frames</span><h2>Instagram &amp; Photo Spots</h2>
                        </div>
                        <p>Real viewpoints with a clear reason to visit—best in early morning or late afternoon
                            light.</p></div>
                    <div className="bukhara-photo-grid">
                        <a href="https://www.google.com/maps/search/?api=1&query=Poi+Kalyan+Bukhara" target="_blank"
                           rel="noopener noreferrer"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Bukhara01.jpg?width=900"
                            alt="Kalyan Minaret against the sky"
                            loading="lazy"/><span>Poi Kalyan at blue hour</span></a>
                        <a href="https://www.google.com/maps/search/?api=1&query=Ark+of+Bukhara" target="_blank"
                           rel="noopener noreferrer"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Ark%20of%20Bukhara%2021.jpg?width=900"
                            alt="Ark walls in warm sunlight" loading="lazy"/><span>Ark walls at sunset</span></a>
                        <a href="https://www.google.com/maps/search/?api=1&query=Chor+Minor+Bukhara" target="_blank"
                           rel="noopener noreferrer"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Chor%20minor%20from%20south.jpg?width=900"
                            alt="Chor Minor viewed from the south"
                            loading="lazy"/><span>Chor Minor in morning light</span></a>
                        <a href="https://www.google.com/maps/search/?api=1&query=Bolo+Hauz+Mosque+Bukhara"
                           target="_blank" rel="noopener noreferrer"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Bukhara%20Bolo%20Haouz%20mosque%202.jpg?width=900"
                            alt="Bolo Hauz columns reflected in the pool"
                            loading="lazy"/><span>Bolo Hauz colonnade</span></a>
                        <a href="https://www.google.com/maps/search/?api=1&query=Samanid+Mausoleum+Bukhara"
                           target="_blank" rel="noopener noreferrer"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Bukhara%20Samanid%20Mausoleum%201.jpg?width=900"
                            alt="Geometric brick detail of Samanid Mausoleum" loading="lazy"/><span>Samanid brick geometry</span></a>
                        <a href="https://www.google.com/maps/search/?api=1&query=Toqi+Zargaron+Bukhara" target="_blank"
                           rel="noopener noreferrer"><img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Bukhara%20city%20center%202.jpg?width=900"
                            alt="Historic dome and street at Toqi Zargaron"
                            loading="lazy"/><span>Trading-dome lanes</span></a>
                    </div>
                </section>
                <section className="bukhara-section bukhara-local-photo-section" id="local-photos">
                    <details className="bukhara-local-photo-list">
                        <summary><span>Local photos needed</span><small>Open the field-shot checklist</small></summary>
                        <div className="bukhara-local-photo-columns">
                            <div><h3>Food &amp; coffee</h3><p>JOY, Old Bukhara, Ayvan, Minzifa Amiko, Chinar, Lyabi
                                Hauz, Andara, Shef Burger, KFC Bukhara, Dots Chicken, Orzu Burger, Les Ailes, Bellissimo
                                Pizza, Silk Road Tea House, Bon Bon Terrace, Donuts &amp; Coffee, Old Street, Caffelito
                                Coffee and Nook Cafe.</p></div>
                            <div><h3>Hotels &amp; pools</h3><p>All listed hotel exteriors/interiors and all nine pool
                                facilities need owner-approved or locally captured images.</p></div>
                            <div><h3>Parks &amp; shopping</h3><p>Mirzo Ulugbek Park, Central Park, Globus, Buxoro Mall,
                                Chinar Mall and Minor Mall.</p></div>
                        </div>
                    </details>
                </section>
                <section className="bukhara-section bukhara-section--tint" id="transport">
                    <div className="bukhara-heading">
                        <div><span className="section-kicker">Getting around</span><h2>Transport</h2></div>
                        <p>Practical arrival and city-mobility information, with live official booking links where
                            available.</p></div>
                    <div className="bukhara-transport-grid">
                        <article><span>✈</span>
                            <div><h3>Bukhara International Airport (BHK)</h3><p>Close to the city; taxi or app-based
                                rides are the practical transfer.</p><a
                                href="https://www.google.com/maps/search/?api=1&query=Bukhara+International+Airport"
                                target="_blank" rel="noopener noreferrer">Map ↗</a></div>
                        </article>
                        <article><span>🚆</span>
                            <div><h3>Bukhara-1 Railway Station</h3><p>Located in Kogon, outside central Bukhara. Taxis
                                and shuttle buses serve the city.</p><a href="https://eticket.railway.uz/en/home"
                                                                        target="_blank" rel="noopener noreferrer">Official
                                tickets ↗</a></div>
                        </article>
                        <article><span>🚕</span>
                            <div><h3>Taxis</h3><p>Use an app or ask your accommodation to arrange a licensed ride;
                                confirm the fare before a street taxi trip.</p><a href="https://taxi.yandex.com/en_uz/"
                                                                                  target="_blank"
                                                                                  rel="noopener noreferrer">Yandex Go
                                info ↗</a></div>
                        </article>
                        <article><span>🚌</span>
                            <div><h3>Local &amp; Intercity Transport</h3><p>The Old City is best explored on foot. City
                                buses and minibuses serve outer sights; intercity buses use Bukhara Central Bus
                                Terminal.</p><a href="https://avtoticket.uz/" target="_blank" rel="noopener noreferrer">Official
                                bus tickets ↗</a></div>
                        </article>
                    </div>
                </section>
                <section className="bukhara-section" id="contacts">
                    <div className="bukhara-heading">
                        <div><span className="section-kicker">Keep these handy</span><h2>Useful Contacts</h2></div>
                        <p>Verified national emergency numbers. Calls should be reserved for genuine emergencies.</p>
                    </div>
                    <div className="bukhara-contact-grid">
                        <a href="tel:112"><span>Unified emergency</span><strong>112</strong><small>All emergency
                            services</small></a><a href="tel:102"><span>Police</span><strong>102</strong><small>Public
                        safety</small></a><a href="tel:103"><span>Ambulance</span><strong>103</strong><small>Medical
                        emergencies</small></a>
                    </div>
                </section>
                {/* Facts and image attribution are documented in source URLs and image links. */}
            </main>
            <footer className="footer">
                <div className="footer-inner">
                    <div className="footer-grid">
                        <div><h3>UzExplore</h3><p>Premium travel inspiration for Uzbekistan’s cities, stays, restaurants
                            and cultural landmarks.</p></div>
                        <div><h4>Guide</h4><a href="#attractions">Attractions</a><a href="#restaurants">Food</a><a
                            href="#hotels">Hotels</a></div>
                        <div><h4>Plan</h4><a href="#transport">Transport</a><a href="#contacts">Contacts</a><a
                            href="#top">Back to top</a></div>
                        <div><h4>Language</h4><a href="/bukhara">English</a><a href="/ru/bukhara">Russian</a>
                        </div>
                    </div>
                    <p className="copyright">© 2026 UzExplore</p></div>
            </footer>
        </div>
    );
}
