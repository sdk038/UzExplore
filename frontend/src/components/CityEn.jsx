import React, { useEffect } from 'react';
import { cityDataEn } from '../pages/cityDataEn.js';

const hotelPhotos = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=85&w=1200',
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=85&w=1200',
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=85&w=1200'
];

export default function CityEn() {
  const slug = new URLSearchParams(location.search).get('city') || 'samarkand';
  const city = cityDataEn[slug] || cityDataEn.samarkand;

  useEffect(() => {
    if (slug === 'bukhara') {
      location.replace('/bukhara');
      return;
    }
    document.title = `${city.region} — Travel Guide | UzCompass`;
  }, [city, slug]);

  if (slug === 'bukhara') {
    return <div className="destination-loading">Opening Bukhara guide…</div>;
  }

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <header className="navbar border-b border-slate-200/80 bg-white/80"><div className="nav-inner">
        <a className="logo" href="/" aria-label="UzCompass"><span className="logo-uz">Uz</span><span className="logo-compass">Compass</span></a>
        <nav className="nav-links" aria-label="Destination navigation"><a href="#places">Places</a><a href="#hotels">Hotels</a><a href="#plan">Itinerary</a></nav>
        <div className="nav-actions"><button className="theme-toggle" type="button" aria-label="Toggle theme"><span aria-hidden="true">◐</span></button><a className="language-switch destination-language" href={`/ru/city?city=${slug}`}>RU</a></div>
      </div></header>
      <main id="destination-root" className="bg-stone-50">
        <section className="destination-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(3,21,39,.88),rgba(4,68,78,.48)),url('${city.photo}')`}}><div>
          <a className="destination-back" href="/#cities">← All destinations</a><span>{city.region}</span><h1>{city.name}</h1><p>{city.tagline}</p>
          <div className="destination-facts"><span><b>{city.days}</b> recommended</span><span><b>{city.season}</b> best season</span><span><b>{city.center}</b> destination center</span></div>
        </div></section>
        <section className="destination-section destination-intro"><div><span className="section-kicker">About the region</span><h2>Plan your journey</h2></div><p>{city.about}</p></section>
        <section className="destination-section" id="places"><div className="destination-heading"><span className="section-kicker">Essential places</span><h2>Where to go</h2><p>Four highlights with coordinates that open directly in Google Maps.</p></div><div className="destination-grid">
          {city.places.map((place,index) => <article className="destination-card" key={place[0]}><div className="destination-card__photo" style={{backgroundImage:`linear-gradient(180deg,transparent,rgba(3,20,35,.52)),url('${city.photo}')`}}><span>0{index+1}</span><b>{place[0]}</b></div><div className="destination-card__body"><p>{place[2]}</p><a href={`https://www.google.com/maps?q=${encodeURIComponent(place[1])}`} target="_blank" rel="noopener noreferrer">📍 {place[1]} · Open map</a></div></article>)}
        </div></section>
        <section className="destination-section practical-grid"><article><span>🍽</span><h3>What to try</h3><p>Regional plov, samsa, fresh bread, seasonal fruit and dishes from local teahouses.</p></article><article><span>🧭</span><h3>Before you go</h3><p>Dress respectfully at religious sites and carry water and sun protection in summer.</p></article></section>
        <section className="destination-section destination-section--tint" id="hotels"><div className="destination-heading"><span className="section-kicker">Accommodation</span><h2>Where to stay</h2><p>Three useful starting points for planning your visit.</p></div><div className="service-grid">{hotelPhotos.map((photo,index)=><article className="service-card" key={photo}><div className="service-card__photo" style={{backgroundImage:`url('${photo}')`}} /><span>★ {(4.9-index*.1).toFixed(1)}</span><h3>{index===0?`${city.name} Silk Road Residence`:index===1?'Old City Boutique':'UzCompass City Hotel'}</h3><p>Convenient location · Wi-Fi · Breakfast</p><strong>Price depends on travel dates</strong><a className="btn btn-primary" href={`https://www.google.com/maps/search/hotels+${encodeURIComponent(city.name)}`} target="_blank" rel="noopener noreferrer">View hotels</a></article>)}</div></section>
        <section className="destination-section" id="plan"><div className="destination-heading"><span className="section-kicker">A ready-made plan</span><h2>Your first day</h2></div><ol className="day-plan"><li><b>09:00</b>Breakfast and a walk through the center</li><li><b>10:30</b>{city.places[0][0]}</li><li><b>13:00</b>Regional lunch</li><li><b>15:00</b>{city.places[1][0]}</li><li><b>18:30</b>Sunset and dinner</li></ol></section>
      </main>
      <footer className="footer"><div className="footer-inner"><p>UzCompass — your route across Uzbekistan</p><p className="copyright">© 2026 UzCompass</p></div></footer>
    </div>
  );
}
