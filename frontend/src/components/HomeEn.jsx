import React, {useState} from 'react';
import SiteHeader from './SiteHeader.jsx';
import HomeHero from './HomeHero.jsx';
import FeatureIcon from './FeatureIcon.jsx';
import {guides} from '../pages/guidesData.js';

export default function HomeEn() {
    const [openAttractions, setOpenAttractions] = useState([]);
    const toggleAttraction = attraction => setOpenAttractions(current => current.includes(attraction)
        ? current.filter(item => item !== attraction)
        : [...current, attraction]);

    return (
        <div className="min-h-screen bg-stone-50 text-slate-900">
            <SiteHeader locale="en"/>
            <main className="bg-stone-50">
                <HomeHero locale="en"/>

                <section className="section" id="cities">
                    <div className="section-head">
                        <div>
                            <span className="section-kicker">Cities of Uzbekistan</span>
                            <h2>Choose a city and start your journey</h2>
                        </div>
                        <p>From blue-domed capitals to desert fortresses, each destination is designed for easy
                            discovery.</p>
                    </div>
                    <div className="grid cities-grid">
                        <article className="card city-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Tashkent%20Night%20Skyscrapers.jpg?width=2200"
                                alt="Tashkent City Park at night" loading="lazy"/></div>
                            <div className="card-body"><h3>Tashkent</h3><p>A lively capital with leafy boulevards,
                                museums, markets, and modern dining.</p>
                                <div className="meta"><a className="mini-btn"
                                                                                                   href="/city?city=tashkent">Explore</a>
                                </div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Registan%2C%20Samarkand%20%288589028275%29.jpg?width=2200"
                                alt="Registan ensemble in Samarkand" loading="lazy"/></div>
                            <div className="card-body"><h3>Samarkand</h3><p>Legendary monuments, grand squares, and
                                shimmering Timurid tilework.</p>
                                <div className="meta"><a className="mini-btn"
                                                                                                   href="/city?city=samarkand">Explore</a>
                                </div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Kalyan%20minaret%20in%20Bukhara.jpg?width=2200"
                                alt="Poi Kalyan complex in Bukhara" loading="lazy"/></div>
                            <div className="card-body"><h3>Bukhara</h3><p>A warm old city of minarets, caravanserais,
                                courtyards, and craft ateliers.</p>
                                <div className="meta"><a className="mini-btn"
                                                                                                   href="/bukhara">Explore</a>
                                </div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Itchan%20Kala%20Khiva%202012.jpg?width=2200"
                                alt="Itchan Kala old city in Khiva" loading="lazy"/></div>
                            <div className="card-body"><h3>Khiva</h3><p>A walled museum city with sandy lanes, towers,
                                and sunset terraces.</p>
                                <div className="meta"><a className="mini-btn"
                                                                                                   href="/city?city=khiva">Explore</a>
                                </div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Nukus%20museum.jpg?width=2200"
                                                        alt="Nukus city ensemble and the Savitsky Museum"
                                                        loading="lazy"/></div>
                            <div className="card-body"><h3>Nukus</h3><p>Gateway to avant-garde art, desert landscapes,
                                and the Aral Sea story.</p>
                                <div className="meta"><a className="mini-btn"
                                                                                                   href="/city?city=nukus">Explore</a>
                                </div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Andijon%20jome.jpg?width=2200"
                                alt="Devonaboy Jome Mosque in Andijan" loading="lazy"/></div>
                            <div className="card-body"><h3>Andijan</h3><p>A Fergana Valley city known for orchards,
                                bazaars, and regional culture.</p>
                                <div className="meta"><a className="mini-btn"
                                                                                                   href="/city?city=andijan">Explore</a>
                                </div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Namangan%20Citiy.jpg?width=2200"
                                                        alt="Historic architecture and gardens of Namangan"
                                                        loading="lazy"/></div>
                            <div className="card-body"><h3>Namangan</h3><p>Garden avenues, spiritual sites, and mountain
                                escapes nearby.</p>
                                <div className="meta"><a className="mini-btn"
                                                                                                   href="/city?city=namangan">Explore</a>
                                </div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Park%20Life%20-%20Al-Farghani%20Park%20-%20Fergana%20-%20Uzbekistan%20%287536806402%29.jpg?width=2200"
                                                        alt="A green city boulevard in Fergana" loading="lazy"/></div>
                            <div className="card-body"><h3>Fergana</h3><p>Elegant streets, artisan workshops, silk
                                heritage, and valley hospitality.</p>
                                <div className="meta"><a className="mini-btn"
                                                                                                   href="/city?city=fergana">Explore</a>
                                </div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Zaamin%20Mountain%20Landscape.jpg?width=2200"
                                                        alt="Mountain road near Jizzakh and Zaamin" loading="lazy"/>
                            </div>
                            <div className="card-body"><h3>Jizzakh</h3><p>Mountain air, national parks, quiet towns, and
                                memorable local cuisine.</p>
                                <div className="meta"><a className="mini-btn"
                                                                                                   href="/city?city=jizzakh">Explore</a>
                                </div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Kok-Gumbaz%20mosque%20in%20Qarshi%2C%20view%20from%20the%20yard.jpg?width=2200"
                                alt="Kok-Gumbaz Mosque in Qarshi" loading="lazy"/></div>
                            <div className="card-body"><h3>Qarshi</h3><p>Southern heritage, bridges, madrasahs, and
                                relaxed neighborhood cafes.</p>
                                <div className="meta"><a className="mini-btn"
                                                                                                   href="/city?city=qarshi">Explore</a>
                                </div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Sulton%20saodat%20majmuasi%20-%2014.jpg?width=2200"
                                alt="Sultan Saodat ensemble in Termez" loading="lazy"/></div>
                            <div className="card-body"><h3>Termez</h3><p>Ancient Buddhist sites, riverside history, and
                                sunlit archaeological routes.</p>
                                <div className="meta"><a className="mini-btn"
                                                                                                   href="/city?city=termez">Explore</a>
                                </div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/%D0%93%D0%BE%D1%80%D0%BE%D0%B4%20%D0%93%D1%83%D0%BB%D0%B8%D1%81%D1%82%D0%B0%D0%BD.jpg?width=2200"
                                                        alt="Gulistan central square and fountains" loading="lazy"/>
                            </div>
                            <div className="card-body"><h3>Gulistan</h3><p>A calm stop with green spaces, regional
                                flavors, and easy onward travel.</p>
                                <div className="meta"><a className="mini-btn"
                                                                                                   href="/city?city=gulistan">Explore</a>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="section" id="find-guide">
                    <div className="section-head">
                        <div>
                            <span className="section-kicker guide-kicker">Hire a guide</span>
                            <h2>Looking for a private guide or tour?</h2>
                        </div>
                        <p>Quickly search guides by city and language. Click "Find" to open the full list and
                            profiles.</p>
                    </div>

                    <div className="card guide-quick-search">
                        <form className="guide-quick-search__form" onSubmit={event => {
                            event.preventDefault();
                            const form = new FormData(event.currentTarget);
                            const params = new URLSearchParams();
                            const city = form.get('city');
                            const language = form.get('language');
                            if (city) params.set('city', city);
                            if (language) params.set('language', language);
                            const query = params.toString();
                            location.href = `/guides${query ? `?${query}` : ''}`;
                        }}>
                            <label className="guide-quick-search__field">
                                City
                                <select name="city">
                                    <option value="">Any city</option>
                                    {Array.from(new Set(guides.map(g => g.city))).map(city => (
                                        <option key={city} value={city}>{city}</option>
                                    ))}
                                </select>
                            </label>
                            <label className="guide-quick-search__field">
                                Language
                                <select name="language">
                                    <option value="">Any language</option>
                                    <option value="English">English</option>
                                    <option value="Russian">Russian</option>
                                    <option value="Uzbek">Uzbek</option>
                                </select>
                            </label>
                            <button className="btn-primary guide-quick-search__submit" type="submit">
                                <svg className="guide-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/></svg>
                                Find
                            </button>
                        </form>
                    </div>
                </section>
                <section className="section section-alt" id="why">
                    <div className="section-head">
                        <div>
                            <span className="section-kicker">Why choose us</span>
                            <h2>Why Choose UzCompass</h2>
                        </div>
                        <p>Thoughtful routes, refined stays, and local recommendations for travelers who want more than
                            a checklist.</p>
                    </div>
                    <div className="grid features">
                        <article className="card feature-card">
                            <FeatureIcon type="heritage"/>
                            <h3>Historical Places</h3><p>Discover UNESCO treasures, ancient mosques, madrasahs, and Silk
                            Road landmarks.</p></article>
                        <article className="card feature-card">
                            <FeatureIcon type="cuisine"/>
                            <h3>Best Restaurants</h3><p>Find elegant dining rooms, teahouses, regional plov spots, and
                            modern cafes.</p></article>
                        <article className="card feature-card">
                            <FeatureIcon type="hotel"/>
                            <h3>Hotels</h3><p>Compare boutique courtyards, luxury hotels, and heritage stays in prime
                            locations.</p></article>
                        <article className="card feature-card">
                            <FeatureIcon type="nature"/>
                            <h3>Nature &amp; Parks</h3><p>Plan mountain walks, green city parks, reservoirs, and
                            peaceful desert escapes.</p></article>
                    </div>
                </section>
                <section className="section" id="attractions">
                    <div className="section-head">
                        <div>
                            <span className="section-kicker">Must see</span>
                            <h2>Featured Attractions</h2>
                        </div>
                        <p>Three iconic places that capture Uzbekistan's architecture, hospitality, and sense of
                            wonder.</p>
                    </div>
                    <div className="grid attractions-grid">
                        <article className="card attraction-card"><img
                            src="https://images.unsplash.com/photo-1664602078796-68ee76b3fc59?auto=format&fit=crop&q=85&w=1200"
                            alt="Registan in Samarkand"/>
                            <div className="card-body"><h3>Registan</h3><p>One of Central Asia's most breathtaking
                                squares, framed by majestic madrasahs and blue mosaics.</p>
                                <div className="location">Samarkand</div>
                                {openAttractions.includes('registan') && <div className="attraction-details" id="registan-details-en">
                                    <p><strong>Why it matters:</strong> the square is formed by three madrasahs — Ulugh Beg, Sher-Dor and Tilla-Kari — built between the 15th and 17th centuries.</p>
                                    <p><strong>Look closer:</strong> find Ulugh Beg's star motifs, the lions on Sher-Dor and the gilded interior of Tilla-Kari.</p>
                                </div>}
                                <div className="attraction-actions">
                                    <button className="mini-btn attraction-details-toggle" type="button" aria-expanded={openAttractions.includes('registan')} aria-controls="registan-details-en" onClick={() => toggleAttraction('registan')}>{openAttractions.includes('registan') ? 'Show less' : 'Learn more'}</button>
                                    <a className="mini-btn attraction-city-link" href="/city?city=samarkand">View city</a>
                                </div></div>
                        </article>
                        <article className="card attraction-card"><img
                            src="https://images.unsplash.com/photo-1662468752704-f256cf5c6784?auto=format&fit=crop&q=85&w=1200"
                            alt="Lyabi-Hauz in Bukhara"/>
                            <div className="card-body"><h3>Lyabi-Hauz</h3><p>A beloved plaza around a historic pool,
                                shaded by mulberry trees and ringed with teahouses.</p>
                                <div className="location">Bukhara</div>
                                {openAttractions.includes('lyabi-hauz') && <div className="attraction-details" id="lyabi-hauz-details-en">
                                    <p><strong>The name:</strong> Lyabi-Hauz means “by the pond”.</p>
                                    <p><strong>Nearby:</strong> Kukeldash Madrasah, the Nadir Divan-Begi madrasah and khanaka, plus the popular Khoja Nasreddin statue.</p>
                                </div>}
                                <div className="attraction-actions">
                                    <button className="mini-btn attraction-details-toggle" type="button" aria-expanded={openAttractions.includes('lyabi-hauz')} aria-controls="lyabi-hauz-details-en" onClick={() => toggleAttraction('lyabi-hauz')}>{openAttractions.includes('lyabi-hauz') ? 'Show less' : 'Learn more'}</button>
                                    <a className="mini-btn attraction-city-link" href="/bukhara">View city</a>
                                </div></div>
                        </article>
                        <article className="card attraction-card"><img
                            src="https://images.unsplash.com/photo-1549111998-cdc4a1d5367c?auto=format&fit=crop&q=85&w=1200"
                            alt="Itchan Kala in Khiva"/>
                            <div className="card-body"><h3>Itchan Kala</h3><p>Khiva's inner city preserves palaces,
                                minarets, workshops, and lantern-lit lanes within ancient walls.</p>
                                <div className="location">Khiva</div>
                                {openAttractions.includes('itchan-kala') && <div className="attraction-details" id="itchan-kala-details-en">
                                    <p><strong>Why it is unique:</strong> this 26-hectare inner city is enclosed by brick walls reaching about 10 metres high.</p>
                                    <p><strong>Do not miss:</strong> Juma Mosque, Kunya Ark and Kalta Minor; the compact historic centre is easy to explore on foot.</p>
                                </div>}
                                <div className="attraction-actions">
                                    <button className="mini-btn attraction-details-toggle" type="button" aria-expanded={openAttractions.includes('itchan-kala')} aria-controls="itchan-kala-details-en" onClick={() => toggleAttraction('itchan-kala')}>{openAttractions.includes('itchan-kala') ? 'Show less' : 'Learn more'}</button>
                                    <a className="mini-btn attraction-city-link" href="/city?city=khiva">View city</a>
                                </div></div>
                        </article>
                    </div>
                </section>
                <section className="section section-alt" id="restaurants">
                    <div className="section-head">
                        <div><span className="section-kicker">Traveller favourites</span><h2>Popular places across
                            Uzbekistan</h2></div>
                        <p>Three landmark experiences in different cities across the country, with the city clearly
                            shown on every card.</p>
                    </div>
                    <div className="grid restaurant-grid">
                        <article className="card media-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Registan%20square%20Samarkand.jpg?width=1000"
                                alt="Registan Square in Samarkand" loading="lazy"/></div>
                            <div className="card-body"><span className="place-city">Samarkand</span><h3>Registan</h3>
                                <p>A monumental ensemble of madrasahs and one of Uzbekistan’s defining landmarks.</p>
                            </div>
                        </article>
                        <article className="card media-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/View%20of%20Po-i-Kalyan.jpg?width=1000"
                                alt="Poi Kalyan complex in Bukhara" loading="lazy"/></div>
                            <div className="card-body"><span className="place-city">Bukhara</span><h3>Poi Kalyan</h3>
                                <p>A historic ensemble centred on the Kalyan Minaret, mosque and Mir-i-Arab
                                    Madrasah.</p><a className="mini-btn" href="/bukhara">Open city guide</a></div>
                        </article>
                        <article className="card media-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Itchan%20Kala%20Khiva%202012.jpg?width=1000"
                                alt="Itchan Kala old city in Khiva" loading="lazy"/></div>
                            <div className="card-body"><span className="place-city">Khiva</span><h3>Itchan Kala</h3><p>A
                                walled old city of minarets, palaces and working craft courtyards.</p></div>
                        </article>
                    </div>
                </section>
                <section className="section">
                    <div className="tips-wrap">
                        <div className="tips-copy">
                            <span className="section-kicker">Essentials</span>
                            <h2>Travel Tips</h2>
                            <p className="section-summary">Four practical things worth sorting out before your journey begins.</p>
                        </div>
                        <div className="tips-list">
                            <div className="tip"><strong>Train tickets</strong><span>Book high-speed trains early: popular services between Tashkent, Samarkand, and Bukhara fill quickly.</span>
                            </div>
                            <div className="tip"><strong>Money on the go</strong><span>Carry some cash in Uzbekistani som for bazaars, small cafés, and trips outside city centres; cards are useful in major cities.</span>
                            </div>
                            <div className="tip"><strong>Connection and maps</strong><span>Set up a local SIM or eSIM and save offline maps before travelling between cities.</span>
                            </div>
                            <div className="tip"><strong>Local etiquette</strong><span>Cover shoulders and knees in mosques and mausoleums, and remove shoes where requested.</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="section-head gallery-section-head">
                        <div>
                            <span className="section-kicker">Moments</span>
                            <h2>Gallery</h2>
                        </div>
                        <p>A masonry collection of architecture, markets, courtyards, hotels, and landscapes across
                            Uzbekistan.</p>
                    </div>
                    <div className="gallery">
                        <img
                            src="https://images.unsplash.com/photo-1662468752704-f256cf5c6784?auto=format&fit=crop&q=80&w=700"
                            alt="Bukhara blue dome"/>
                        <img
                            src="https://images.unsplash.com/photo-1744177332411-9a57cd922af7?auto=format&fit=crop&q=80&w=700"
                            alt="Uzbekistan tile detail"/>
                        <img
                            src="https://images.unsplash.com/photo-1763144967763-2a8a98cb8431?auto=format&fit=crop&q=80&w=700"
                            alt="Samarkand city"/>
                        <img
                            src="https://images.unsplash.com/photo-1662468752704-f256cf5c6784?auto=format&fit=crop&q=80&w=700"
                            alt="Bukhara old city"/>
                        <img
                            src="https://images.unsplash.com/photo-1549111998-cdc4a1d5367c?auto=format&fit=crop&q=80&w=700"
                            alt="Khiva minaret"/>
                        <img
                            src="/images/cities/namangan.jpg"
                            alt="Namangan madrasa at sunset"
                            loading="lazy"/>
                        <img
                            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=700"
                            alt="Uzbekistan hotel"/>
                        <img
                            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=700"
                            alt="Uzbekistan mountain"/>
                    </div>
                </section>
            </main>
            <footer className="footer footer--main" id="contact">
                <div className="footer-inner">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <h3>UZCOMPASS</h3>
                            <p>A guide to the cities of Uzbekistan: places, hotels, restaurants, and useful information for travellers.</p>
                        </div>
                        <div className="footer-column">
                            <h4>For partners</h4>
                            <nav aria-label="For partners">
                                <a href="#">Add a hotel</a>
                                <a href="#">Add a restaurant</a>
                                <a href="#">Advertise on the site</a>
                            </nav>
                        </div>
                        <div className="footer-column">
                            <h4>For travellers</h4>
                            <nav aria-label="For travellers">
                                <a href="#">Cities</a>
                                <a href="#">Hotels</a>
                                <a href="#">Restaurants</a>
                                <a href="#">Attractions</a>
                            </nav>
                        </div>
                    </div>
                    <div className="footer-contact-bar">
                        <span>Contact UzCompass</span>
                        <nav aria-label="Contact UzCompass">
                            <a href="#">Call</a>
                            <a href="#">Message</a>
                            <a href="#">Telegram</a>
                            <a href="#">Instagram</a>
                        </nav>
                    </div>
                    <p className="copyright">© 2026 UzCompass</p>
                </div>
            </footer>
        </div>
    );
}
