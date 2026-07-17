import React from 'react';

const content = {
  en: {
    eyebrow: 'Travel across Uzbekistan',
    title: <>The East,<br />that <em>stays</em><br />with you</>,
    description: 'Curated journeys through ancient cities, local cuisine and places worth sharing.',
    choose: 'Choose destination',
    how: 'How it works',
    rating: '4.9 out of 5',
    ratingNote: 'rated by travelers',
    routeAria: 'Route across Uzbekistan',
    country: 'UZBEKISTAN',
    cities: ['Tashkent', 'Samarkand', 'Bukhara'],
    routeLabel: 'Route of the week',
    duration: '8 days',
    routeName: 'Golden Route',
    openRoute: 'Open the Golden Route',
    photoAlt: 'The Registan ensemble in Samarkand at golden hour',
    photoKicker: 'Silk Road heritage',
    photoTitle: 'Samarkand, Uzbekistan'
  },
  ru: {
    eyebrow: 'Путешествия по Узбекистану',
    title: <>Восток,<br />который <em>остаётся</em><br />с вами</>,
    description: 'Авторские маршруты по древним городам, локальной кухне и местам, о которых хочется рассказывать.',
    choose: 'Выбрать направление',
    how: 'Как это работает',
    rating: '4,9 из 5',
    ratingNote: 'по оценкам путешественников',
    routeAria: 'Маршрут по Узбекистану',
    country: 'УЗБЕКИСТАН',
    cities: ['Ташкент', 'Самарканд', 'Бухара'],
    routeLabel: 'Маршрут недели',
    duration: '8 дней',
    routeName: 'Золотой путь',
    openRoute: 'Открыть маршрут Золотой путь',
    photoAlt: 'Ансамбль Регистан в Самарканде в золотой час',
    photoKicker: 'Наследие Шёлкового пути',
    photoTitle: 'Самарканд, Узбекистан'
  }
};

export default function HomeHero({ locale }) {
  const text = content[locale];

  return (
    <section className="uz-home-hero editorial-hero" id="home">
      <div className="editorial-hero__background" aria-hidden="true">
        <img src="/images/uzbekistan-hero.png" alt="" />
      </div>
      <div className="editorial-hero__shell">
        <div className="hero-content">
          <span className="eyebrow"><i aria-hidden="true" /> {text.eyebrow}</span>
          <h1>{text.title}</h1>
          <p>{text.description}</p>
          <div className="hero-actions">
            <a className="btn btn-light" href="#cities">{text.choose} <span aria-hidden="true">→</span></a>
            <a className="editorial-hero__link" href="#why">{text.how} <span aria-hidden="true">↗</span></a>
          </div>
          <div className="editorial-proof" aria-label={text.ratingNote}>
            <div className="editorial-proof__avatars" aria-hidden="true"><span>A</span><span>M</span><span>K</span></div>
            <p><strong>{text.rating}</strong><br />{text.ratingNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
