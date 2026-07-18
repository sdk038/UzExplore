import React, { useMemo, useState } from 'react';
import SiteHeader from './SiteHeader.jsx';
import { guides } from '../pages/guidesData.js';

const initialFilters = { city: '', language: '', specialization: '', maxPrice: '' };

function guideMatchesFilters(guide, filters) {
  return (!filters.city || guide.city === filters.city)
    && (!filters.language || guide.languages.includes(filters.language))
    && (!filters.specialization || guide.specializations.includes(filters.specialization))
    && (!filters.maxPrice || guide.pricing.perDay <= Number(filters.maxPrice));
}

export default function GuidesEn() {
  const locale = location.pathname.startsWith('/ru') ? 'ru' : 'en';
  const text = locale === 'ru'
    ? {
      eyebrow: 'Местная экспертиза для вашей поездки', title: 'Найдите гида в Узбекистане', intro: 'Выберите местного гида для частных прогулок, гастрономических открытий и историй Шёлкового пути.',
      kicker: 'Найти гида', heading: 'Гиды для вашей поездки', description: 'Начните с гида, который подходит вашему маршруту, языку и стилю путешествия.',
      city: 'Город', anyCity: 'Любой город', language: 'Язык', anyLanguage: 'Любой язык', specialty: 'Специализация', anySpecialty: 'Любая специализация', maxPrice: 'Макс. цена в день', anyPrice: 'Любая цена', reset: 'Сбросить', found: 'Найдено гидов: ', specialties: 'Специализации:', profileSoon: 'Профиль скоро появится', empty: 'Пока нет гидов по этим фильтрам. Попробуйте расширить поиск.'
    }
    : {
      eyebrow: 'Local expertise, your way', title: 'Find your guide in Uzbekistan', intro: 'Choose a trusted local guide for private city walks, food discoveries and Silk Road stories.',
      kicker: 'Hire a guide', heading: 'Guides for your journey', description: 'Start with a guide who matches your route, language and travel style.',
      city: 'City', anyCity: 'Any city', language: 'Language', anyLanguage: 'Any language', specialty: 'Specialization', anySpecialty: 'Any specialty', maxPrice: 'Max. daily price', anyPrice: 'Any price', reset: 'Reset', found: 'guides found', specialties: 'Specialties:', profileSoon: 'Profile coming soon', empty: 'No guides match these filters yet. Try a broader search.'
    };
  const [filters, setFilters] = useState(initialFilters);
  const matchingGuides = useMemo(
    () => guides.filter(guide => guideMatchesFilters(guide, filters)),
    [filters]
  );

  const updateFilter = event => {
    const { name, value } = event.target;
    setFilters(currentFilters => ({ ...currentFilters, [name]: value }));
  };

  return (
    <div>
      <SiteHeader locale={locale} page="guides" />
      <main>
        <section className="guides-hero">
          <div>
            <span className="eyebrow">{text.eyebrow}</span>
            <h1>{text.title}</h1>
            <p>{text.intro}</p>
          </div>
        </section>

        <section className="section" aria-labelledby="guide-list-title">
          <div className="section-head">
            <div>
              <span className="section-kicker">{text.kicker}</span>
              <h2 id="guide-list-title">{text.heading}</h2>
            </div>
            <p>{text.description}</p>
          </div>

          <form className="guide-filters card" onSubmit={event => event.preventDefault()}>
            <label>{text.city}
              <select name="city" value={filters.city} onChange={updateFilter}>
                <option value="">{text.anyCity}</option>
                <option value="Samarkand">Samarkand</option>
              </select>
            </label>
            <label>{text.language}
              <select name="language" value={filters.language} onChange={updateFilter}>
                <option value="">{text.anyLanguage}</option>
                <option value="English">English</option>
                <option value="Russian">Russian</option>
                <option value="Uzbek">Uzbek</option>
              </select>
            </label>
            <label>{text.specialty}
              <select name="specialization" value={filters.specialization} onChange={updateFilter}>
                <option value="">{text.anySpecialty}</option>
                <option value="History">History</option>
                <option value="Food tours">Food tours</option>
              </select>
            </label>
            <label>{text.maxPrice}
              <select name="maxPrice" value={filters.maxPrice} onChange={updateFilter}>
                <option value="">{text.anyPrice}</option>
                <option value="100">Up to $100</option>
                <option value="75">Up to $75</option>
              </select>
            </label>
            <button className="mini-btn guide-filters__reset" type="button" onClick={() => setFilters(initialFilters)}>{text.reset}</button>
          </form>

          <p className="guide-results" aria-live="polite">{locale === 'ru' ? `${text.found}${matchingGuides.length}` : `${matchingGuides.length} ${text.found}`}</p>
          <div className="grid guides-grid">
            {matchingGuides.map(guide => (
              <article className="card guide-card" key={guide.id}>
                <div className="guide-card__image"><img src={guide.photo.src} alt={guide.photo.alt} /></div>
                <div className="card-body">
                  <div className="guide-card__topline"><span>{guide.city} · {guide.regions.length} regions</span><strong>★ {guide.rating} <small>({guide.reviewCount})</small></strong></div>
                  <h3>{guide.name}</h3>
                  <p>{guide.bio}</p>
                  <div className="guide-card__tags" aria-label={`Languages: ${guide.languages.join(', ')}`}>
                    {guide.languages.map(language => <span key={language}>{language}</span>)}
                  </div>
                  <p className="guide-card__specialties"><strong>{text.specialties}</strong> {guide.specializations.join(' · ')}</p>
                  <div className="guide-card__footer">
                    <div><strong>${guide.pricing.perDay}/day</strong><span>${guide.pricing.perHour}/hour</span></div>
                    <span className="guide-card__coming-soon">{text.profileSoon}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {!matchingGuides.length && <p className="guide-empty">{text.empty}</p>}
        </section>
      </main>
    </div>
  );
}
