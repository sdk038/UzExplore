import React from 'react';
import SiteHeader from './SiteHeader.jsx';
import HomeHero from './HomeHero.jsx';

export default function HomeRu() {
    return (
        <div>
            <SiteHeader locale="ru"/>
            <main>
                <HomeHero locale="ru"/>
                <section className="section" id="cities">
                    <div className="section-head">
                        <div>
                            <span className="section-kicker">Города</span>
                            <h2>Исследуйте 12 направлений</h2>
                        </div>
                        <p>От столичных голубых куполов до пустынных крепостей: каждое направление удобно для
                            знакомства.</p>
                    </div>
                    <div className="grid cities-grid">
                        <article className="card city-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Tashkent%20City%20Park%20at%20night.jpg?width=1000"
                                alt="Ночной вид парка Ташкент-Сити" loading="lazy"/></div>
                            <div className="card-body"><h3>Ташкент</h3><p>Живая столица с зелеными бульварами, музеями,
                                рынками и современной гастрономией.</p>
                                <div className="meta"><span className="rating">Путеводитель</span><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Registan-Samarkand.jpg?width=1000"
                                alt="Ансамбль Регистан в Самарканде" loading="lazy"/></div>
                            <div className="card-body"><h3>Самарканд</h3><p>Легендарные памятники, величественные
                                площади и сияющая тимуридская мозаика.</p>
                                <div className="meta"><span className="rating">Путеводитель</span><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/View%20of%20Po-i-Kalyan.jpg?width=1000"
                                alt="Комплекс Пои-Калян в Бухаре" loading="lazy"/></div>
                            <div className="card-body"><h3>Бухара</h3><p>Теплый старинный город минаретов,
                                караван-сараев, двориков и ремесленных мастерских.</p>
                                <div className="meta"><span className="rating">Путеводитель</span><a
                                    className="mini-btn" href="/ru/bukhara">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Itchan%20Kala%20Khiva%202012.jpg?width=1000"
                                alt="Старый город Ичан-Кала в Хиве" loading="lazy"/></div>
                            <div className="card-body"><h3>Хива</h3><p>Город-музей за крепостными стенами с песчаными
                                улицами, башнями и террасами для заката.</p>
                                <div className="meta"><span className="rating">Путеводитель</span><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img src="/images/cities/nukus.jpg"
                                                        alt="Городской ансамбль и музей Савицкого в Нукусе"
                                                        loading="lazy"/></div>
                            <div className="card-body"><h3>Нукус</h3><p>Ворота к авангардному искусству, пустынным
                                пейзажам и истории Аральского моря.</p>
                                <div className="meta"><span className="rating">Путеводитель</span><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Devonaboy%20Jome%20Mosque%20in%20Andijan.jpg?width=1000"
                                alt="Мечеть Девонабой в Андижане" loading="lazy"/></div>
                            <div className="card-body"><h3>Андижан</h3><p>Город Ферганской долины, известный садами,
                                базарами и региональной культурой.</p>
                                <div className="meta"><span className="rating">Путеводитель</span><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img src="/images/cities/namangan.jpg"
                                                        alt="Историческая архитектура и зелёные сады Намангана"
                                                        loading="lazy"/></div>
                            <div className="card-body"><h3>Наманган</h3><p>Садовые аллеи, духовные места и близкие
                                горные маршруты.</p>
                                <div className="meta"><span className="rating">Путеводитель</span><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img src="/images/cities/fergana.jpg"
                                                        alt="Зелёный городской проспект Ферганы" loading="lazy"/></div>
                            <div className="card-body"><h3>Фергана</h3><p>Элегантные улицы, мастерские ремесленников,
                                шелковое наследие и гостеприимство долины.</p>
                                <div className="meta"><span className="rating">Путеводитель</span><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img src="/images/cities/jizzakh.jpg"
                                                        alt="Горный маршрут в окрестностях Джизака и Заамина"
                                                        loading="lazy"/></div>
                            <div className="card-body"><h3>Джизак</h3><p>Горный воздух, национальные парки, спокойные
                                города и яркая местная кухня.</p>
                                <div className="meta"><span className="rating">Путеводитель</span><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Kok-Gumbaz%20mosque%20in%20Qarshi%2C%20view%20from%20the%20north-east.jpg?width=1000"
                                alt="Мечеть Кок-Гумбаз в Карши" loading="lazy"/></div>
                            <div className="card-body"><h3>Карши</h3><p>Южное наследие, мосты, медресе и уютные районные
                                кафе.</p>
                                <div className="meta"><span className="rating">Путеводитель</span><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Termez%20Sultan-Saodat.jpg?width=1000"
                                alt="Ансамбль Султан Саодат в Термезе" loading="lazy"/></div>
                            <div className="card-body"><h3>Термез</h3><p>Древние буддийские памятники, история у реки и
                                солнечные археологические маршруты.</p>
                                <div className="meta"><span className="rating">Путеводитель</span><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                        <article className="card city-card">
                            <div className="image"><img src="/images/cities/gulistan.jpg"
                                                        alt="Центральная площадь и фонтаны Гулистана" loading="lazy"/>
                            </div>
                            <div className="card-body"><h3>Гулистан</h3><p>Спокойная остановка с зелеными зонами,
                                местными вкусами и удобным продолжением маршрута.</p>
                                <div className="meta"><span className="rating">Путеводитель</span><a
                                    className="mini-btn" href="#">Смотреть</a></div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="section section-alt" id="why">
                    <div className="section-head">
                        <div>
                            <span className="section-kicker">Почему UzExplore</span>
                            <h2>Путешествуйте уверенно</h2>
                        </div>
                        <p>Продуманные маршруты, проверенные места и местные рекомендации для путешествий без лишней суеты.</p>
                    </div>
                    <div className="grid features">
                        <article className="card feature-card"><div className="icon">🏛</div><h3>Исторические места</h3><p>Откройте объекты ЮНЕСКО, древние мечети, медресе и памятники Шёлкового пути.</p></article>
                        <article className="card feature-card"><div className="icon">🍴</div><h3>Лучшая кухня</h3><p>Найдите рестораны, чайханы, места с пловом и современные городские кафе.</p></article>
                        <article className="card feature-card"><div className="icon">🏨</div><h3>Отели</h3><p>Сравнивайте бутик-отели, комфортные гостиницы и исторические дома для проживания.</p></article>
                        <article className="card feature-card"><div className="icon">🌳</div><h3>Природа и парки</h3><p>Планируйте поездки в горы, парки, к водохранилищам и в пустыню.</p></article>
                    </div>
                </section>
                <section className="section" id="attractions">
                    <div className="section-head">
                        <div>
                            <span className="section-kicker">Обязательно посмотреть</span>
                            <h2>Избранные достопримечательности</h2>
                        </div>
                        <p>Четыре знаковых места, передающих архитектуру, гостеприимство и атмосферу Узбекистана.</p>
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
                                <a className="mini-btn" href="/ru/city?city=samarkand">Подробнее</a>
                            </div>
                        </article>
                        <article className="card attraction-card"><img
                            src="https://images.unsplash.com/photo-1662468752704-f256cf5c6784?auto=format&fit=crop&q=85&w=1200"
                            alt="Ark Fortress in Bukhara"/>
                            <div className="card-body"><h3>Крепость Арк</h3><p>Монументальная цитадель, где жили
                                правители Бухары, до сих пор доминирует над старым городом.</p>
                                <div className="location">Бухара</div>
                                <a className="mini-btn" href="#">Подробнее</a></div>
                        </article>
                        <article className="card attraction-card"><img
                            src="https://images.unsplash.com/photo-1662468752704-f256cf5c6784?auto=format&fit=crop&q=85&w=1200"
                            alt="Lyabi-Hauz in Bukhara"/>
                            <div className="card-body"><h3>Ляби-Хауз</h3><p>Любимая площадь вокруг исторического хауса,
                                в тени тутовников и рядом с чайханами.</p>
                                <div className="location">Бухара</div>
                                <a className="mini-btn" href="#">Подробнее</a></div>
                        </article>
                        <article className="card attraction-card"><img
                            src="https://images.unsplash.com/photo-1549111998-cdc4a1d5367c?auto=format&fit=crop&q=85&w=1200"
                            alt="Itchan Kala in Khiva"/>
                            <div className="card-body"><h3>Ичан-Кала</h3><p>Внутренний город Хивы хранит дворцы,
                                минареты, мастерские и улочки в свете фонарей.</p>
                                <div className="location">Хива</div>
                                <a className="mini-btn" href="#">Подробнее</a></div>
                        </article>
                    </div>
                </section>
                <section className="section section-alt" id="restaurants">
                    <div className="section-head">
                        <div><span className="section-kicker">Выбор путешественников</span><h2>Популярные места по
                            Узбекистану</h2></div>
                        <p>Три знаковых места в разных городах страны — город указан на каждой карточке.</p>
                    </div>
                    <div className="grid restaurant-grid">
                        <article className="card media-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Registan%20square%20Samarkand.jpg?width=1000"
                                alt="Площадь Регистан в Самарканде" loading="lazy"/></div>
                            <div className="card-body"><span className="place-city">Самарканд</span><h3>Регистан</h3>
                                <p>Монументальный ансамбль медресе и один из символов Узбекистана.</p></div>
                        </article>
                        <article className="card media-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/View%20of%20Po-i-Kalyan.jpg?width=1000"
                                alt="Комплекс Пои-Калян в Бухаре" loading="lazy"/></div>
                            <div className="card-body"><span className="place-city">Бухара</span><h3>Пои-Калян</h3>
                                <p>Исторический ансамбль с минаретом Калян, мечетью и медресе Мири-Араб.</p><a
                                    className="mini-btn" href="/ru/bukhara">Открыть путеводитель</a></div>
                        </article>
                        <article className="card media-card">
                            <div className="image"><img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Itchan%20Kala%20Khiva%202012.jpg?width=1000"
                                alt="Старый город Ичан-Кала в Хиве" loading="lazy"/></div>
                            <div className="card-body"><span className="place-city">Хива</span><h3>Ичан-Кала</h3>
                                <p>Окружённый стенами старый город с минаретами, дворцами и ремесленными дворами.</p>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="section" id="hotels">
                    <div className="section-head">
                        <div><span className="section-kicker">Проживание</span><h2>Отели</h2></div>
                        <p>Реальные отели в разных городах Узбекистана. Стоимость зависит от дат и проверяется на
                            официальном сайте.</p></div>
                    <div className="grid hotel-grid">
                        <article className="card media-card">
                            <div className="homepage-hotel-placeholder homepage-hotel-visual--tashkent" role="img"
                                 aria-label="Премиальная архитектурная иллюстрация Hyatt Regency Tashkent">
                                <span>Ташкент</span></div>
                            <div className="card-body"><h3>Hyatt Regency Tashkent</h3>
                                <div className="details"><span>Ташкент</span><span>Цена зависит от даты — проверьте на официальном сайте</span>
                                </div>
                                <a className="mini-btn"
                                   href="https://www.hyatt.com/hyatt-regency/en-US/tasrt-hyatt-regency-tashkent"
                                   target="_blank" rel="noopener noreferrer">Официальный сайт</a></div>
                        </article>
                        <article className="card media-card">
                            <div className="homepage-hotel-placeholder homepage-hotel-visual--samarkand" role="img"
                                 aria-label="Премиальная иллюстрация Samarkand Regency Amir Temur в тимуридском стиле">
                                <span>Самарканд</span></div>
                            <div className="card-body"><h3>Samarkand Regency Amir Temur</h3>
                                <div className="details"><span>Самарканд</span><span>Цена зависит от даты — проверьте на официальном сайте</span>
                                </div>
                                <a className="mini-btn"
                                   href="https://www.silkroad-samarkand.com/hotels/samarkand-regency-amir-temur/"
                                   target="_blank" rel="noopener noreferrer">Официальный сайт</a></div>
                        </article>
                        <article className="card media-card">
                            <div className="homepage-hotel-placeholder homepage-hotel-visual--bukhara" role="img"
                                 aria-label="Премиальная иллюстрация Mercure Bukhara Old Town в стиле старой Бухары">
                                <span>Бухара</span></div>
                            <div className="card-body"><h3>Mercure Bukhara Old Town</h3>
                                <div className="details"><span>Бухара</span><span>Цена зависит от даты — проверьте на официальном сайте</span>
                                </div>
                                <a className="mini-btn" href="/ru/bukhara#hotels">Путеводитель по Бухаре</a></div>
                        </article>
                    </div>
                </section>
                <section className="section">
                    <div className="tips-wrap">
                        <div className="tips-copy">
                            <span className="section-kicker">Важно знать</span>
                            <h2>Советы путешественникам</h2>
                            <p>Полезная база для комфортной поездки: от большого маршрута по Шелковому пути до красивого
                                уикенда в одном городе.</p>
                        </div>
                        <div className="tips-list">
                            <div className="tip"><strong>Лучшее время для визита</strong><span>Март-май и сентябрь-ноябрь для комфортной погоды.</span>
                            </div>
                            <div className="tip"><strong>Валюта</strong><span>Узбекский сум. В городах часто принимают карты, на базарах пригодятся наличные.</span>
                            </div>
                            <div className="tip"><strong>Языки</strong><span>Официальный язык — узбекский; русский и английский полезны в туристических местах.</span>
                            </div>
                            <div className="tip"><strong>Безопасность</strong><span>Основные маршруты дружелюбны и комфортны при обычной внимательности путешественника.</span>
                            </div>
                            <div className="tip"><strong>Транспорт</strong><span>Скоростные поезда соединяют Ташкент, Самарканд и Бухару.</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="section-head">
                        <div>
                            <span className="section-kicker">Моменты</span>
                            <h2>Галерея</h2>
                        </div>
                        <p>Мозаичная галерея архитектуры, рынков, двориков, отелей и пейзажей Узбекистана.</p>
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
                            src="https://images.unsplash.com/photo-1488459716781-31db52582f75?auto=format&fit=crop&q=80&w=700"
                            alt="Uzbekistan market"/>
                        <img
                            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=700"
                            alt="Uzbekistan hotel"/>
                        <img
                            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=700"
                            alt="Uzbekistan mountain"/>
                    </div>
                </section>
            </main>
            <footer className="footer" id="contact">
                <div className="footer-inner">
                    <div className="footer-grid">
                        <div>
                            <h3>UzExplore</h3>
                            <p>Премиальное вдохновение для путешествий по городам, отелям, ресторанам и культурным
                                местам Узбекистана.</p>
                            <div className="socials">
                                <a href="#" aria-label="Instagram">IG</a>
                                <a href="#" aria-label="Facebook">FB</a>
                                <a href="#" aria-label="X">X</a>
                            </div>
                        </div>
                        <div><h4>Компания</h4><a href="#">О нас</a><a href="#">Контакты</a><a
                            href="#">Конфиденциальность</a></div>
                        <div><h4>Исследовать</h4><a href="#cities">Города</a><a href="#hotels">Отели</a><a
                            href="#restaurants">Рестораны</a><a href="#attractions">Достопримечательности</a></div>
                        <div><h4>Контакты</h4><span>Контактные данные ожидают проверки</span></div>
                    </div>
                    <p className="copyright">© 2026 UzExplore</p>
                </div>
            </footer>
        </div>
    );
}
