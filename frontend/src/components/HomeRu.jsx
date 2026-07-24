import React, { useState } from 'react';
import SiteHeader from './SiteHeader.jsx';
import HomeHero from './HomeHero.jsx';
import FeatureIcon from './FeatureIcon.jsx';
import { guides } from '../pages/guidesData.js';

export default function HomeRu() {
    const [openAttractions, setOpenAttractions] = useState([]);
    const toggleAttraction = attraction => setOpenAttractions(current => current.includes(attraction)
        ? current.filter(item => item !== attraction)
        : [...current, attraction]);

    return (
        <div className="min-h-screen bg-stone-50 text-slate-900">
            <SiteHeader locale="ru"/>
            <main className="bg-stone-50">
                <HomeHero locale="ru"/>

                <section className="section" id="cities">
                    <div className="section-head">
                        <div>
                            <span className="section-kicker">Города Узбекистана</span>
                            <h2>Выберите город и начните путешествие</h2>
                        </div>
                        <p className="section-summary">От столичных голубых куполов до пустынных крепостей: каждое направление удобно для
                            знакомства.</p>
                    </div>
                    <div className="grid cities-grid">
                        <article className="card city-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Tashkent%20Night%20Skyscrapers.jpg?width=2200"
                                alt="Ночной вид парка Ташкент-Сити" loading="lazy"/></div>
                            <div className="card-body"><h3>Ташкент</h3><p>Живая столица с зелеными бульварами, музеями,
                                рынками и современной гастрономией.</p>
                                <div className="meta"><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Registan%2C%20Samarkand%20%288589028275%29.jpg?width=2200"
                                alt="Ансамбль Регистан в Самарканде" loading="lazy"/></div>
                            <div className="card-body"><h3>Самарканд</h3><p>Легендарные памятники, величественные
                                площади и сияющая тимуридская мозаика.</p>
                                <div className="meta"><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Kalyan%20minaret%20in%20Bukhara.jpg?width=2200"
                                alt="Комплекс Пои-Калян в Бухаре" loading="lazy"/></div>
                            <div className="card-body"><h3>Бухара</h3><p>Теплый старинный город минаретов,
                                караван-сараев, двориков и ремесленных мастерских.</p>
                                <div className="meta"><a
                                    className="mini-btn" href="/ru/bukhara">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Itchan%20Kala%20Khiva%202012.jpg?width=2200"
                                alt="Старый город Ичан-Кала в Хиве" loading="lazy"/></div>
                            <div className="card-body"><h3>Хива</h3><p>Город-музей за крепостными стенами с песчаными
                                улицами, башнями и террасами для заката.</p>
                                <div className="meta"><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Nukus%20museum.jpg?width=2200"
                                                        alt="Городской ансамбль и музей Савицкого в Нукусе"
                                                        loading="lazy"/></div>
                            <div className="card-body"><h3>Нукус</h3><p>Ворота к авангардному искусству, пустынным
                                пейзажам и истории Аральского моря.</p>
                                <div className="meta"><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Andijon%20jome.jpg?width=2200"
                                alt="Мечеть Девонабой в Андижане" loading="lazy"/></div>
                            <div className="card-body"><h3>Андижан</h3><p>Город Ферганской долины, известный садами,
                                базарами и региональной культурой.</p>
                                <div className="meta"><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Namangan%20Citiy.jpg?width=2200"
                                                        alt="Историческая архитектура и зелёные сады Намангана"
                                                        loading="lazy"/></div>
                            <div className="card-body"><h3>Наманган</h3><p>Садовые аллеи, духовные места и близкие
                                горные маршруты.</p>
                                <div className="meta"><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Park%20Life%20-%20Al-Farghani%20Park%20-%20Fergana%20-%20Uzbekistan%20%287536806402%29.jpg?width=2200"
                                                        alt="Зелёный городской проспект Ферганы" loading="lazy"/></div>
                            <div className="card-body"><h3>Фергана</h3><p>Элегантные улицы, мастерские ремесленников,
                                шелковое наследие и гостеприимство долины.</p>
                                <div className="meta"><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Zaamin%20Mountain%20Landscape.jpg?width=2200"
                                                        alt="Горный маршрут в окрестностях Джизака и Заамина"
                                                        loading="lazy"/></div>
                            <div className="card-body"><h3>Джизак</h3><p>Горный воздух, национальные парки, спокойные
                                города и яркая местная кухня.</p>
                                <div className="meta"><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Kok-Gumbaz%20mosque%20in%20Qarshi%2C%20view%20from%20the%20yard.jpg?width=2200"
                                alt="Мечеть Кок-Гумбаз в Карши" loading="lazy"/></div>
                            <div className="card-body"><h3>Карши</h3><p>Южное наследие, мосты, медресе и уютные районные
                                кафе.</p>
                                <div className="meta"><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Sulton%20saodat%20majmuasi%20-%2014.jpg?width=2200"
                                alt="Ансамбль Султан Саодат в Термезе" loading="lazy"/></div>
                            <div className="card-body"><h3>Термез</h3><p>Древние буддийские памятники, история у реки и
                                солнечные археологические маршруты.</p>
                                <div className="meta"><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/%D0%93%D0%BE%D1%80%D0%BE%D0%B4%20%D0%93%D1%83%D0%BB%D0%B8%D1%81%D1%82%D0%B0%D0%BD.jpg?width=2200"
                                                        alt="Центральная площадь и фонтаны Гулистана" loading="lazy"/>
                            </div>
                            <div className="card-body"><h3>Гулистан</h3><p>Спокойная остановка с зелеными зонами,
                                местными вкусами и удобным продолжением маршрута.</p>
                                <div className="meta"><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="section" id="find-guide">
                    <div className="section-head">
                        <div>
                            <span className="section-kicker guide-kicker">Найти гида</span>
                            <h2>Ищете сопровождающего или частный тур?</h2>
                        </div>
                        <p className="section-summary">Быстрый поиск гидов по городу и языку. Нажмите «Найти», чтобы перейти к полному списку и профилям.</p>
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
                            location.href = `/ru/guides${query ? `?${query}` : ''}`;
                        }}>
                            <label className="guide-quick-search__field">Город
                                <select name="city">
                                    <option value="">Любой город</option>
                                    <option value="Samarkand">Самarkand</option>
                                    <option value="Bukhara">Bukhara</option>
                                    <option value="Tashkent">Tashkent</option>
                                </select>
                            </label>
                            <label className="guide-quick-search__field">Язык
                                <select name="language">
                                    <option value="">Любой язык</option>
                                    <option value="English">English</option>
                                    <option value="Russian">Russian</option>
                                    <option value="Uzbek">Uzbek</option>
                                </select>
                            </label>
                            <button className="btn-primary guide-quick-search__submit" type="submit">
                                <svg className="guide-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/></svg>
                                Найти
                            </button>
                        </form>
                    </div>
                </section>
                <section className="section section-alt" id="why">
                    <div className="section-head">
                        <div>
                            <span className="section-kicker">Почему UzCompass</span>
                            <h2>Путешествуйте уверенно</h2>
                        </div>
                        <p className="section-summary">Продуманные маршруты, проверенные места и местные рекомендации для путешествий без лишней суеты.</p>
                    </div>
                    <div className="grid features">
                        <article className="card feature-card"><FeatureIcon type="heritage"/><h3>Исторические места</h3><p>Откройте объекты ЮНЕСКО, древние мечети, медресе и памятники Шёлкового пути.</p></article>
                        <article className="card feature-card"><FeatureIcon type="cuisine"/><h3>Лучшая кухня</h3><p>Найдите рестораны, чайханы, места с пловом и современные городские кафе.</p></article>
                        <article className="card feature-card"><FeatureIcon type="hotel"/><h3>Отели</h3><p>Сравнивайте бутик-отели, комфортные гостиницы и исторические дома для проживания.</p></article>
                        <article className="card feature-card"><FeatureIcon type="nature"/><h3>Природа и парки</h3><p>Планируйте поездки в горы, парки, к водохранилищам и в пустыню.</p></article>
                    </div>
                </section>
                <section className="section" id="attractions">
                    <div className="section-head">
                        <div>
                            <span className="section-kicker">Обязательно посмотреть</span>
                            <h2>Избранные достопримечательности</h2>
                        </div>
                        <p className="section-summary">Три знаковых места, передающих архитектуру, гостеприимство и атмосферу Узбекистана.</p>
                    </div>
                    <div className="grid attractions-grid">
                        <article className="card attraction-card">
                            <img
                                src="https://images.unsplash.com/photo-1664602078796-68ee76b3fc59?auto=format&fit=crop&q=85&w=1200"
                                alt="Registan in Samarkand"/>
                            <div className="card-body">
                                <h3>Регистан</h3>
                                <p>Одна из самых впечатляющих площадей Центральной Азии, окруженная величественными
                                    медресе и голубой мозаикой.</p>
                                <div className="location">Самарканд</div>
                                {openAttractions.includes('registan') && <div className="attraction-details" id="registan-details">
                                    <p><strong>Что важно:</strong> площадь образуют три медресе — Улугбека, Шердор и Тилля-Кари, построенные в XV–XVII веках.</p>
                                    <p><strong>На что посмотреть:</strong> звёздные мотивы медресе Улугбека, львы на портале Шердор и позолоченный интерьер Тилля-Кари.</p>
                                </div>}
                                <div className="attraction-actions">
                                    <button className="mini-btn attraction-details-toggle" type="button" aria-expanded={openAttractions.includes('registan')} aria-controls="registan-details" onClick={() => toggleAttraction('registan')}>{openAttractions.includes('registan') ? 'Скрыть' : 'Подробнее'}</button>
                                    <a className="mini-btn attraction-city-link" href="/ru/city?city=samarkand">Посмотреть город</a>
                                </div>
                            </div>
                        </article>
                                    {/* quick-search label removed (was inserted here by mistake) */}
                        <article className="card attraction-card"><img
                            src="https://images.unsplash.com/photo-1662468752704-f256cf5c6784?auto=format&fit=crop&q=85&w=1200"
                            alt="Lyabi-Hauz in Bukhara"/>
                            <div className="card-body"><h3>Ляби-Хауз</h3><p>Любимая площадь вокруг исторического хауса,
                                в тени тутовников и рядом с чайханами.</p>
                                <div className="location">Бухара</div>
                                {openAttractions.includes('lyabi-hauz') && <div className="attraction-details" id="lyabi-hauz-details">
                                    <p><strong>Что означает название:</strong> «Ляби-Хауз» переводится как «у пруда».</p>
                                    <p><strong>Что рядом:</strong> медресе Кукельдаш, медресе и ханака Нодир-Диван-Беги, а также памятник Ходже Насреддину.</p>
                                </div>}
                                <div className="attraction-actions">
                                    <button className="mini-btn attraction-details-toggle" type="button" aria-expanded={openAttractions.includes('lyabi-hauz')} aria-controls="lyabi-hauz-details" onClick={() => toggleAttraction('lyabi-hauz')}>{openAttractions.includes('lyabi-hauz') ? 'Скрыть' : 'Подробнее'}</button>
                                    <a className="mini-btn attraction-city-link" href="/ru/bukhara">Посмотреть город</a>
                                </div></div>
                        </article>
                        <article className="card attraction-card"><img
                            src="https://images.unsplash.com/photo-1549111998-cdc4a1d5367c?auto=format&fit=crop&q=85&w=1200"
                            alt="Itchan Kala in Khiva"/>
                            <div className="card-body"><h3>Ичан-Кала</h3><p>Внутренний город Хивы хранит дворцы,
                                минареты, мастерские и улочки в свете фонарей.</p>
                                <div className="location">Хива</div>
                                {openAttractions.includes('itchan-kala') && <div className="attraction-details" id="itchan-kala-details">
                                    <p><strong>Почему уникальна:</strong> это внутренний город площадью около 26 гектаров, окружённый кирпичными стенами высотой до 10 метров.</p>
                                    <p><strong>Что не пропустить:</strong> Джума-мечеть, Куня-Арк и Кальта-Минор; весь исторический центр удобно исследовать пешком.</p>
                                </div>}
                                <div className="attraction-actions">
                                    <button className="mini-btn attraction-details-toggle" type="button" aria-expanded={openAttractions.includes('itchan-kala')} aria-controls="itchan-kala-details" onClick={() => toggleAttraction('itchan-kala')}>{openAttractions.includes('itchan-kala') ? 'Скрыть' : 'Подробнее'}</button>
                                    <a className="mini-btn attraction-city-link" href="/ru/city?city=khiva">Посмотреть город</a>
                                </div></div>
                        </article>
                    </div>
                </section>
                <section className="section">
                    <div className="tips-wrap">
                        <div className="tips-copy">
                            <span className="section-kicker">Важно знать</span>
                            <h2>Советы путешественникам</h2>
                            <p className="section-summary">Четыре практические подсказки, которые пригодятся ещё до начала поездки.</p>
                        </div>
                        <div className="tips-list">
                            <div className="tip"><strong>Билеты на поезда</strong><span>Покупайте билеты на скоростные поезда заранее: популярные рейсы между Ташкентом, Самаркандом и Бухарой быстро заполняются.</span>
                            </div>
                            <div className="tip"><strong>Деньги в поездке</strong><span>Держите немного наличных сумов для базаров, небольших кафе и поездок вне центра; в крупных городах удобны карты.</span>
                            </div>
                            <div className="tip"><strong>Связь и навигация</strong><span>Подключите местную SIM или eSIM и сохраните офлайн-карты перед междугородними поездками.</span>
                            </div>
                            <div className="tip"><strong>Местный этикет</strong><span>В мечетях и мавзолеях закрывайте плечи и колени; обувь снимайте там, где это принято.</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="section-head gallery-section-head">
                        <div>
                            <span className="section-kicker">Моменты</span>
                            <h2>Галерея</h2>
                        </div>
                        <p className="section-summary">Мозаичная галерея архитектуры, рынков, двориков, отелей и пейзажей Узбекистана.</p>
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
                            alt="Медресе в Намангане на закате"
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
                            <p>Путеводитель по городам Узбекистана: места, отели, рестораны и полезная информация для путешественников.</p>
                        </div>
                        <div className="footer-column">
                            <h4>Для партнёров</h4>
                            <nav aria-label="Для партнёров">
                                <a href="#">Добавить отель</a>
                                <a href="#">Добавить ресторан</a>
                                <a href="#">Реклама на сайте</a>
                            </nav>
                        </div>
                        <div className="footer-column">
                            <h4>Для туристов</h4>
                            <nav aria-label="Для туристов">
                                <a href="#">Города</a>
                                <a href="#">Отели</a>
                                <a href="#">Рестораны</a>
                                <a href="#">Достопримечательности</a>
                            </nav>
                        </div>
                    </div>
                    <div className="footer-contact-bar">
                        <span>Связаться с UzCompass</span>
                        <nav aria-label="Связаться с UzCompass">
                            <a href="#">Позвонить</a>
                            <a href="#">Написать</a>
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
