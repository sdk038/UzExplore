import React from 'react';
import SiteHeader from './SiteHeader.jsx';
import HomeHero from './HomeHero.jsx';

export default function HomeEn() {
  return (
    <div>
      <SiteHeader locale="en" />
      <main>
        <HomeHero locale="en" />
        <section className="section" id="cities">
          <div className="section-head">
            <div>
              <span className="section-kicker">Cities</span>
              <h2>Explore 12 Cities</h2>
            </div>
            <p>From blue-domed capitals to desert fortresses, each destination is designed for easy discovery.</p>
          </div>
          <div className="grid cities-grid">
            <article className="card city-card">
              <div className="image"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Tashkent%20City%20Park%20at%20night.jpg?width=1000" alt="Tashkent City Park at night" loading="lazy" /></div>
              <div className="card-body"><h3>Tashkent</h3><p>A lively capital with leafy boulevards, museums, markets, and modern dining.</p><div className="meta"><span className="rating">City guide</span><a className="mini-btn" href="/city?city=tashkent">Explore</a></div></div>
            </article>
            <article className="card city-card">
              <div className="image"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Registan-Samarkand.jpg?width=1000" alt="Registan ensemble in Samarkand" loading="lazy" /></div>
              <div className="card-body"><h3>Samarkand</h3><p>Legendary monuments, grand squares, and shimmering Timurid tilework.</p><div className="meta"><span className="rating">City guide</span><a className="mini-btn" href="/city?city=samarkand">Explore</a></div></div>
            </article>
            <article className="card city-card">
              <div className="image"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/View%20of%20Po-i-Kalyan.jpg?width=1000" alt="Poi Kalyan complex in Bukhara" loading="lazy" /></div>
              <div className="card-body"><h3>Bukhara</h3><p>A warm old city of minarets, caravanserais, courtyards, and craft ateliers.</p><div className="meta"><span className="rating">City guide</span><a className="mini-btn" href="/bukhara">Explore</a></div></div>
            </article>
            <article className="card city-card">
              <div className="image"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Itchan%20Kala%20Khiva%202012.jpg?width=1000" alt="Itchan Kala old city in Khiva" loading="lazy" /></div>
              <div className="card-body"><h3>Khiva</h3><p>A walled museum city with sandy lanes, towers, and sunset terraces.</p><div className="meta"><span className="rating">City guide</span><a className="mini-btn" href="/city?city=khiva">Explore</a></div></div>
            </article>
            <article className="card city-card">
              <div className="image"><img src="/images/cities/nukus.jpg" alt="Nukus city ensemble and the Savitsky Museum" loading="lazy" /></div>
              <div className="card-body"><h3>Nukus</h3><p>Gateway to avant-garde art, desert landscapes, and the Aral Sea story.</p><div className="meta"><span className="rating">City guide</span><a className="mini-btn" href="/city?city=nukus">Explore</a></div></div>
            </article>
            <article className="card city-card">
              <div className="image"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Devonaboy%20Jome%20Mosque%20in%20Andijan.jpg?width=1000" alt="Devonaboy Jome Mosque in Andijan" loading="lazy" /></div>
              <div className="card-body"><h3>Andijan</h3><p>A Fergana Valley city known for orchards, bazaars, and regional culture.</p><div className="meta"><span className="rating">City guide</span><a className="mini-btn" href="/city?city=andijan">Explore</a></div></div>
            </article>
            <article className="card city-card">
              <div className="image"><img src="/images/cities/namangan.jpg" alt="Historic architecture and gardens of Namangan" loading="lazy" /></div>
              <div className="card-body"><h3>Namangan</h3><p>Garden avenues, spiritual sites, and mountain escapes nearby.</p><div className="meta"><span className="rating">City guide</span><a className="mini-btn" href="/city?city=namangan">Explore</a></div></div>
            </article>
            <article className="card city-card">
              <div className="image"><img src="/images/cities/fergana.jpg" alt="A green city boulevard in Fergana" loading="lazy" /></div>
              <div className="card-body"><h3>Fergana</h3><p>Elegant streets, artisan workshops, silk heritage, and valley hospitality.</p><div className="meta"><span className="rating">City guide</span><a className="mini-btn" href="/city?city=fergana">Explore</a></div></div>
            </article>
            <article className="card city-card">
              <div className="image"><img src="/images/cities/jizzakh.jpg" alt="Mountain road near Jizzakh and Zaamin" loading="lazy" /></div>
              <div className="card-body"><h3>Jizzakh</h3><p>Mountain air, national parks, quiet towns, and memorable local cuisine.</p><div className="meta"><span className="rating">City guide</span><a className="mini-btn" href="/city?city=jizzakh">Explore</a></div></div>
            </article>
            <article className="card city-card">
              <div className="image"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Kok-Gumbaz%20mosque%20in%20Qarshi%2C%20view%20from%20the%20north-east.jpg?width=1000" alt="Kok-Gumbaz Mosque in Qarshi" loading="lazy" /></div>
              <div className="card-body"><h3>Qarshi</h3><p>Southern heritage, bridges, madrasahs, and relaxed neighborhood cafes.</p><div className="meta"><span className="rating">City guide</span><a className="mini-btn" href="/city?city=qarshi">Explore</a></div></div>
            </article>
            <article className="card city-card">
              <div className="image"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Termez%20Sultan-Saodat.jpg?width=1000" alt="Sultan Saodat ensemble in Termez" loading="lazy" /></div>
              <div className="card-body"><h3>Termez</h3><p>Ancient Buddhist sites, riverside history, and sunlit archaeological routes.</p><div className="meta"><span className="rating">City guide</span><a className="mini-btn" href="/city?city=termez">Explore</a></div></div>
            </article>
            <article className="card city-card">
              <div className="image"><img src="/images/cities/gulistan.jpg" alt="Gulistan central square and fountains" loading="lazy" /></div>
              <div className="card-body"><h3>Gulistan</h3><p>A calm stop with green spaces, regional flavors, and easy onward travel.</p><div className="meta"><span className="rating">City guide</span><a className="mini-btn" href="/city?city=gulistan">Explore</a></div></div>
            </article>
          </div>
        </section>
        <section className="section section-alt" id="why">
          <div className="section-head">
            <div>
              <span className="section-kicker">Why choose us</span>
              <h2>Why Choose UzExplore</h2>
            </div>
            <p>Thoughtful routes, refined stays, and local recommendations for travelers who want more than a checklist.</p>
          </div>
          <div className="grid features">
            <article className="card feature-card"><div className="icon">🏛</div><h3>Historical Places</h3><p>Discover UNESCO treasures, ancient mosques, madrasahs, and Silk Road landmarks.</p></article>
            <article className="card feature-card"><div className="icon">🍴</div><h3>Best Restaurants</h3><p>Find elegant dining rooms, teahouses, regional plov spots, and modern cafes.</p></article>
            <article className="card feature-card"><div className="icon">🏨</div><h3>Hotels</h3><p>Compare boutique courtyards, luxury hotels, and heritage stays in prime locations.</p></article>
            <article className="card feature-card"><div className="icon">🌳</div><h3>Nature &amp; Parks</h3><p>Plan mountain walks, green city parks, reservoirs, and peaceful desert escapes.</p></article>
          </div>
        </section>
        <section className="section" id="attractions">
          <div className="section-head">
            <div>
              <span className="section-kicker">Must see</span>
              <h2>Featured Attractions</h2>
            </div>
            <p>Four iconic places that capture Uzbekistan's architecture, hospitality, and sense of wonder.</p>
          </div>
          <div className="grid attractions-grid">
            <article className="card attraction-card"><img src="https://images.unsplash.com/photo-1664602078796-68ee76b3fc59?auto=format&fit=crop&q=85&w=1200" alt="Registan in Samarkand" /><div className="card-body"><h3>Registan</h3><p>One of Central Asia's most breathtaking squares, framed by majestic madrasahs and blue mosaics.</p><div className="location">Samarkand</div><a className="mini-btn" href="#">Learn More</a></div></article>
            <article className="card attraction-card"><img src="https://images.unsplash.com/photo-1662468752704-f256cf5c6784?auto=format&fit=crop&q=85&w=1200" alt="Ark Fortress in Bukhara" /><div className="card-body"><h3>Ark Fortress</h3><p>A monumental citadel that once guarded Bukhara's rulers and still dominates the old city skyline.</p><div className="location">Bukhara</div><a className="mini-btn" href="#">Learn More</a></div></article>
            <article className="card attraction-card"><img src="https://images.unsplash.com/photo-1662468752704-f256cf5c6784?auto=format&fit=crop&q=85&w=1200" alt="Lyabi-Hauz in Bukhara" /><div className="card-body"><h3>Lyabi-Hauz</h3><p>A beloved plaza around a historic pool, shaded by mulberry trees and ringed with teahouses.</p><div className="location">Bukhara</div><a className="mini-btn" href="#">Learn More</a></div></article>
            <article className="card attraction-card"><img src="https://images.unsplash.com/photo-1549111998-cdc4a1d5367c?auto=format&fit=crop&q=85&w=1200" alt="Itchan Kala in Khiva" /><div className="card-body"><h3>Itchan Kala</h3><p>Khiva's inner city preserves palaces, minarets, workshops, and lantern-lit lanes within ancient walls.</p><div className="location">Khiva</div><a className="mini-btn" href="#">Learn More</a></div></article>
          </div>
        </section>
        <section className="section section-alt" id="restaurants">
          <div className="section-head">
            <div><span className="section-kicker">Traveller favourites</span><h2>Popular places across Uzbekistan</h2></div>
            <p>Three landmark experiences in different cities across the country, with the city clearly shown on every card.</p>
          </div>
          <div className="grid restaurant-grid">
            <article className="card media-card"><div className="image"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Registan%20square%20Samarkand.jpg?width=1000" alt="Registan Square in Samarkand" loading="lazy" /></div><div className="card-body"><span className="place-city">Samarkand</span><h3>Registan</h3><p>A monumental ensemble of madrasahs and one of Uzbekistan’s defining landmarks.</p></div></article>
            <article className="card media-card"><div className="image"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/View%20of%20Po-i-Kalyan.jpg?width=1000" alt="Poi Kalyan complex in Bukhara" loading="lazy" /></div><div className="card-body"><span className="place-city">Bukhara</span><h3>Poi Kalyan</h3><p>A historic ensemble centred on the Kalyan Minaret, mosque and Mir-i-Arab Madrasah.</p><a className="mini-btn" href="/bukhara">Open city guide</a></div></article>
            <article className="card media-card"><div className="image"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Itchan%20Kala%20Khiva%202012.jpg?width=1000" alt="Itchan Kala old city in Khiva" loading="lazy" /></div><div className="card-body"><span className="place-city">Khiva</span><h3>Itchan Kala</h3><p>A walled old city of minarets, palaces and working craft courtyards.</p></div></article>
          </div>
        </section>
        <section className="section" id="hotels">
          <div className="section-head"><div><span className="section-kicker">Stay</span><h2>Hotels</h2></div><p>Real hotels in different Uzbekistan cities. Rates depend on dates and should be checked on the official website.</p></div>
          <div className="grid hotel-grid">
            <article className="card media-card"><div className="homepage-hotel-placeholder homepage-hotel-visual--tashkent" role="img" aria-label="Premium architectural visual for Hyatt Regency Tashkent"><span>Tashkent</span></div><div className="card-body"><h3>Hyatt Regency Tashkent</h3><div className="details"><span>Tashkent</span><span>Price depends on date — check the official website</span></div><a className="mini-btn" href="https://www.hyatt.com/hyatt-regency/en-US/tasrt-hyatt-regency-tashkent" target="_blank" rel="noopener noreferrer">Official site</a></div></article>
            <article className="card media-card"><div className="homepage-hotel-placeholder homepage-hotel-visual--samarkand" role="img" aria-label="Premium Timurid-inspired visual for Samarkand Regency Amir Temur"><span>Samarkand</span></div><div className="card-body"><h3>Samarkand Regency Amir Temur</h3><div className="details"><span>Samarkand</span><span>Price depends on date — check the official website</span></div><a className="mini-btn" href="https://www.silkroad-samarkand.com/hotels/samarkand-regency-amir-temur/" target="_blank" rel="noopener noreferrer">Official site</a></div></article>
            <article className="card media-card"><div className="homepage-hotel-placeholder homepage-hotel-visual--bukhara" role="img" aria-label="Premium Old Bukhara architectural visual for Mercure Bukhara Old Town"><span>Bukhara</span></div><div className="card-body"><h3>Mercure Bukhara Old Town</h3><div className="details"><span>Bukhara</span><span>Price depends on date — check the official website</span></div><a className="mini-btn" href="/bukhara#hotels">Bukhara guide</a></div></article>
          </div>
        </section>
        <section className="section">
          <div className="tips-wrap">
            <div className="tips-copy">
              <span className="section-kicker">Essentials</span>
              <h2>Travel Tips</h2>
              <p>Helpful basics for a smoother trip, whether you are planning a long Silk Road journey or a refined weekend in one city.</p>
            </div>
            <div className="tips-list">
              <div className="tip"><strong>Best time to visit</strong><span>March to May and September to November for comfortable weather.</span></div>
              <div className="tip"><strong>Currency</strong><span>Uzbekistani Som. Cards are common in cities, cash helps in bazaars.</span></div>
              <div className="tip"><strong>Languages</strong><span>Uzbek is official; Russian and English are useful in tourism areas.</span></div>
              <div className="tip"><strong>Safety</strong><span>Major routes are welcoming and comfortable with normal travel awareness.</span></div>
              <div className="tip"><strong>Transportation</strong><span>High-speed trains connect Tashkent, Samarkand, and Bukhara.</span></div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="section-head">
            <div>
              <span className="section-kicker">Moments</span>
              <h2>Gallery</h2>
            </div>
            <p>A masonry collection of architecture, markets, courtyards, hotels, and landscapes across Uzbekistan.</p>
          </div>
          <div className="gallery">
            <img src="https://images.unsplash.com/photo-1662468752704-f256cf5c6784?auto=format&fit=crop&q=80&w=700" alt="Bukhara blue dome" />
            <img src="https://images.unsplash.com/photo-1744177332411-9a57cd922af7?auto=format&fit=crop&q=80&w=700" alt="Uzbekistan tile detail" />
            <img src="https://images.unsplash.com/photo-1763144967763-2a8a98cb8431?auto=format&fit=crop&q=80&w=700" alt="Samarkand city" />
            <img src="https://images.unsplash.com/photo-1662468752704-f256cf5c6784?auto=format&fit=crop&q=80&w=700" alt="Bukhara old city" />
            <img src="https://images.unsplash.com/photo-1549111998-cdc4a1d5367c?auto=format&fit=crop&q=80&w=700" alt="Khiva minaret" />
            <img src="https://images.unsplash.com/photo-1488459716781-31db52582f75?auto=format&fit=crop&q=80&w=700" alt="Uzbekistan market" />
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=700" alt="Uzbekistan hotel" />
            <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=700" alt="Uzbekistan mountain" />
          </div>
        </section>
      </main>
      <footer className="footer" id="contact">
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <h3>UzExplore</h3>
              <p>Premium travel inspiration for Uzbekistan's cities, stays, restaurants, and cultural landmarks.</p>
              <div className="socials">
                <a href="#" aria-label="Instagram">IG</a>
                <a href="#" aria-label="Facebook">FB</a>
                <a href="#" aria-label="X">X</a>
              </div>
            </div>
            <div><h4>Company</h4><a href="#">About</a><a href="#">Contact</a><a href="#">Privacy</a></div>
            <div><h4>Explore</h4><a href="#cities">Cities</a><a href="#hotels">Hotels</a><a href="#restaurants">Restaurants</a><a href="#attractions">Attractions</a></div>
            <div><h4>Contact</h4><span>Contact details pending verification</span></div>
          </div>
          <p className="copyright">© 2026 UzExplore</p>
        </div>
      </footer>
    </div>
  );
}
