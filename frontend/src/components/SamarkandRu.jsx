import React from 'react';
import SiteHeader from './SiteHeader.jsx';

export default function SamarkandRu() {
    return (
        <div className="min-h-screen bg-stone-50 text-slate-900">
            <SiteHeader locale="ru"/>
            <main>
                <section className="section" id="samarkand-intro">
                    <div className="section-head">
                        <div>
                            <span className="section-kicker">Направление</span>
                            <h2>Самарканд</h2>
                        </div>
                        <p>Древняя столица Тимуридов и один из старейших городов Центральной Азии. Голубые купола,
                            бирюзовая мозаика и площади, помнящие караваны Великого шёлкового пути — Самарканд входит
                            в список Всемирного наследия ЮНЕСКО как «Перекрёсток культур».</p>
                    </div>
                </section>

                <section className="section" id="attractions">
                    <div className="section-head">
                        <div>
                            <span className="section-kicker">Обязательно посмотреть</span>
                            <h2>Главные достопримечательности</h2>
                        </div>
                        <p>Пять мест, без которых знакомство с Самаркандом будет неполным.</p>
                    </div>
                    <div className="grid attractions-grid">
                        <article className="card attraction-card">
                            <img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Registan-Samarkand.jpg?width=1000"
                                alt="Ансамбль Регистан в Самарканде"/>
                            <div className="card-body">
                                <h3>Регистан</h3>
                                <p>Главная площадь города, окружённая тремя медресе XV–XVII веков — Улугбека,
                                    Шердор и Тилля-Кари. Символ Самарканда и одна из самых впечатляющих площадей
                                    Центральной Азии.</p>
                                <div className="location">Центр города</div>
                            </div>
                        </article>
                        <article className="card attraction-card">
                            <img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Night%20View%20of%20Gur-e-Amir%20Mausoleum%20-%20Samarkand%20-%20Uzbekistan%20(7488500022).jpg?width=1000"
                                alt="Мавзолей Гур-Эмир в Самарканде"/>
                            <div className="card-body">
                                <h3>Гур-Эмир</h3>
                                <p>Усыпальница Амира Тимура и его потомков, построенная в начале XV века. Рифлёный
                                    бирюзовый купол и внутренняя отделка из оникса и золота — образец расцвета
                                    тимуридской архитектуры.</p>
                                <div className="location">Юго-запад центра</div>
                            </div>
                        </article>
                        <article className="card attraction-card">
                            <img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Shah-i-Zinda,%20Samarkand%20(Shohi-Zinda%20majmuasi,%20%D0%A8%D0%B0%D1%85%D0%B8%20%D0%97%D0%B8%D0%BD%D0%B4%D0%B0).jpg?width=1000"
                                alt="Некрополь Шахи-Зинда в Самарканде"/>
                            <div className="card-body">
                                <h3>Шахи-Зинда</h3>
                                <p>Улица-некрополь XI–XV веков с десятками мавзолеев, покрытых бирюзовой и синей
                                    майоликой. По легенде, здесь похоронен Кусам ибн Аббас — двоюродный брат
                                    пророка Мухаммада.</p>
                                <div className="location">Северо-восток города</div>
                            </div>
                        </article>
                        <article className="card attraction-card">
                            <img
                                src="https://commons.wikimedia.org/wiki/Special:FilePath/Bibi-Khanym%20Mosque%20-%20Samarkand%20-%20Uzbekistan%20(7488230850).jpg?width=1000"
                                alt="Мечеть Биби-Ханым в Самарканде"/>
                            <div className="card-body">
                                <h3>Мечеть Биби-Ханым</h3>
                                <p>Одна из крупнейших мечетей исламского мира на момент постройки в начале XV века.
                                    Монументальный портал и восстановленные купола до сих пор поражают масштабом
                                    замысла Тимура.</p>
                                <div className="location">Рядом с базаром Сиаб</div>
                            </div>
                        </article>
                        <article className="card attraction-card">
                            <img
                                src="https://images.unsplash.com/photo-1664602078796-68ee76b3fc59?auto=format&fit=crop&q=85&w=1200"
                                alt="Базар Сиаб в Самарканде"/>
                            <div className="card-body">
                                <h3>Базар Сиаб</h3>
                                <p>Шумный восточный рынок у стен Биби-Ханым: горы сухофруктов, самаркандские лепёшки,
                                    специи и ткани. Лучшее место, чтобы почувствовать живой ритм города.</p>
                                <div className="location">Старый город</div>
                            </div>
                        </article>
                    </div>
                </section>

                <section className="section section-alt" id="hotels">
                    <div className="section-head">
                        <div><span className="section-kicker">Проживание</span><h2>Отели в Самарканде</h2></div>
                        <p>Стоимость зависит от дат и проверяется на официальном сайте отеля.</p>
                    </div>
                    <div className="grid hotel-grid">
                        <article className="card media-card">
                            <div className="homepage-hotel-placeholder homepage-hotel-visual--samarkand" role="img"
                                 aria-label="Премиальная иллюстрация Samarkand Regency Amir Temur в тимуридском стиле">
                                <span>Самарканд</span>
                            </div>
                            <div className="card-body">
                                <h3>Samarkand Regency Amir Temur</h3>
                                <div className="details">
                                    <span>Центр города</span>
                                    <span>Цена зависит от даты — проверьте на официальном сайте</span>
                                </div>
                                <a className="mini-btn"
                                   href="https://www.silkroad-samarkand.com/hotels/samarkand-regency-amir-temur/"
                                   target="_blank" rel="noopener noreferrer">Официальный сайт</a>
                            </div>
                        </article>
                    </div>
                </section>

                <section className="section">
                    <div className="tips-wrap">
                        <div className="tips-copy">
                            <span className="section-kicker">Важно знать</span>
                            <h2>Советы путешественникам</h2>
                            <p>Практичная база для комфортной поездки по Самарканду.</p>
                        </div>
                        <div className="tips-list">
                            <div className="tip">
                                <strong>Как добраться</strong>
                                <span>Скоростной поезд «Afrosiyob» из Ташкента идёт около 2 часов.</span>
                            </div>
                            <div className="tip">
                                <strong>Сколько времени заложить</strong>
                                <span>Основные памятники можно осмотреть за 1–2 полных дня.</span>
                            </div>
                            <div className="tip">
                                <strong>Лучшее время для визита</strong>
                                <span>Март-май и сентябрь-ноябрь — комфортная погода без летней жары.</span>
                            </div>
                            <div className="tip">
                                <strong>Билеты</strong>
                                <span>В Регистан, Гур-Эмир и Шахи-Зинда — платный вход, кассы работают на месте.</span>
                            </div>
                            <div className="tip">
                                <strong>Обувь</strong>
                                <span>Много брусчатки и лестниц — удобная обувь обязательна.</span>
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
                        <p>Голубая мозаика, дворики медресе и уличная жизнь древнего города.</p>
                    </div>
                    <div className="gallery">
                        <img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Registan%20square%20Samarkand.jpg?width=700"
                            alt="Площадь Регистан"/>
                        <img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Samarkand%20Bibi-Khanum%20Mosque%20-%20Entrance%20portal%201.JPG?width=700"
                            alt="Портал мечети Биби-Ханым"/>
                        <img
                            src="https://images.unsplash.com/photo-1763144967763-2a8a98cb8431?auto=format&fit=crop&q=80&w=700"
                            alt="Вид на город Самарканд"/>
                        <img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Shah-i-Zinda-Nekropole%20Samarkand%2011.jpg?width=700"
                            alt="Мавзолеи Шахи-Зинда"/>
                    </div>
                </section>
            </main>

            <footer className="footer" id="contact">
                <div className="footer-inner">
                    <div className="footer-grid">
                        <div>
                            <h3>UzCompass</h3>
                            <p>Премиальное вдохновение для путешествий по городам, отелям, ресторанам и культурным
                                местам Узбекистана.</p>
                            <div className="socials">
                                <a href="#" aria-label="Instagram">IG</a>
                                <a href="#" aria-label="Facebook">FB</a>
                                <a href="#" aria-label="X">X</a>
                            </div>
                        </div>
                        <div>
                            <h4>Компания</h4>
                            <a href="#">О нас</a>
                            <a href="#">Контакты</a>
                            <a href="#">Конфиденциальность</a>
                        </div>
                        <div>
                            <h4>Исследовать</h4>
                            <a href="/ru#cities">Города</a>
                            <a href="#hotels">Отели</a>
                            <a href="#attractions">Достопримечательности</a>
                        </div>
                        <div>
                            <h4>Контакты</h4>
                            <span>Контактные данные ожидают проверки</span>
                        </div>
                    </div>
                    <p className="copyright">© 2026 UzCompass</p>
                </div>
            </footer>
        </div>
    );
}
