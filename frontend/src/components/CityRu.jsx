import React from 'react';

export default function CityRu() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <header className="navbar border-b border-slate-200/80 bg-white/80">
        <div className="nav-inner">
          <a className="logo" href="/ru" aria-label="UzCompass"><span className="logo-uz">Uz</span><span className="logo-compass">Compass</span></a>
          <nav className="nav-links" aria-label="Навигация по направлению">
            <a href="#places">Что посмотреть</a><a href="#hotels">Отели</a><a href="#plan">Маршрут</a>
          </nav>
          <div className="nav-actions"><button className="theme-toggle" type="button" aria-label="Переключить тему"><span aria-hidden="true">◐</span></button><a className="language-switch destination-language" href={`/city${location.search}`}>EN</a></div>
        </div>
      </header>
      <main id="destination-root"><div className="destination-loading">Готовим путеводитель…</div></main>
      <footer className="footer"><div className="footer-inner"><p>UzCompass — ваш маршрут по Узбекистану</p><p className="copyright">© 2026 UzCompass</p></div></footer>
    </div>
  );
}
