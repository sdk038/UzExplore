import React from 'react';

export default function CityRu() {
  return (
    <div>
      <header className="navbar">
        <div className="nav-inner">
          <a className="logo" href="/ru">Uz<span>Explore</span></a>
          <nav className="nav-links" aria-label="Навигация по направлению">
            <a href="#places">Что посмотреть</a><a href="#hotels">Отели</a><a href="#mobility">Транспорт</a><a href="#plan">Маршрут</a>
          </nav>
          <div className="nav-actions"><button className="theme-toggle" type="button" aria-label="Переключить тему"><span aria-hidden="true">◐</span></button><a className="language-switch destination-language" href={`/city${location.search}`}>EN</a></div>
        </div>
      </header>
      <main id="destination-root"><div className="destination-loading">Готовим путеводитель…</div></main>
      <footer className="footer"><div className="footer-inner"><p>UzExplore — ваш маршрут по Узбекистану</p><p className="copyright">© 2026 UzExplore</p></div></footer>
    </div>
  );
}
