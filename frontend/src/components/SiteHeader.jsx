import React, { useState } from 'react';
import { currentPathForLocale } from '../app/routes.js';

const storage = { user: 'uzexplore-user', bookings: 'uzexplore-bookings' };

const copy = {
  en: {
    aria: 'Primary navigation',
    nav: [['#home', 'Home'], ['#cities', 'Cities'], ['/guides', 'Guides'], ['#attractions', 'Attractions'], ['#contact', 'Contact']],
    theme: 'Toggle theme', menu: 'Menu', closeMenu: 'Close menu', language: 'Language selector', english: 'English', russian: 'Russian', explore: 'Explore Now', login: 'Sign in', trips: 'My trips', tripsShort: 'Trips',
    create: 'Create account', intro: 'Register to save bookings on this device.', name: 'Name', email: 'Email', phone: 'Phone', accept: 'I accept the service terms',
    register: 'Register', empty: 'You have no bookings yet.', cancel: 'Cancel booking', logout: 'Sign out', hello: 'Hello', close: 'Close'
  },
  ru: {
    aria: 'Основная навигация',
    nav: [['#home', 'Главная'], ['#cities', 'Города'], ['/ru/guides', 'Гиды'], ['#attractions', 'Достопримечательности'], ['#contact', 'Контакты']],
    theme: 'Переключить тему', menu: 'Меню', closeMenu: 'Закрыть меню', language: 'Выбор языка', english: 'Английский', russian: 'Русский', explore: 'Исследовать', login: 'Войти', trips: 'Мои поездки', tripsShort: 'Поездки',
    create: 'Создать аккаунт', intro: 'Регистрация нужна для сохранения броней на этом устройстве.', name: 'Имя', email: 'Электронная почта', phone: 'Телефон',
    accept: 'Я принимаю условия сервиса', register: 'Зарегистрироваться', empty: 'У вас пока нет бронирований.', cancel: 'Отменить бронь', logout: 'Выйти из аккаунта',
    hello: 'Здравствуйте', close: 'Закрыть'
  }
};

function read(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; }
  catch { return fallback; }
}

export default function SiteHeader({ locale, page = 'home' }) {
  const text = copy[locale];
  const [user, setUser] = useState(() => read(storage.user, null));
  const [modal, setModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(() => document.documentElement.dataset.theme === 'dark');
  const [bookings, setBookings] = useState(() => read(storage.bookings, []));

  const toggleTheme = () => {
    const nextDark = !darkTheme;
    const nextTheme = nextDark ? 'dark' : 'light';
    document.documentElement.dataset.theme = nextTheme;
    document.body.dataset.theme = nextTheme;
    try { localStorage.setItem('uzexplore-theme', nextTheme); } catch { /* Storage is optional. */ }
    setDarkTheme(nextDark);
  };

  const openAccount = () => {
    setUser(read(storage.user, null));
    setBookings(read(storage.bookings, []));
    setModal(true);
  };

  const register = event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextUser = { name: form.get('name'), email: form.get('email'), phone: form.get('phone') };
    localStorage.setItem(storage.user, JSON.stringify(nextUser));
    setUser(nextUser);
    setModal(false);
  };

  const cancelBooking = id => {
    const next = read(storage.bookings, []).filter(booking => String(booking.id) !== String(id));
    localStorage.setItem(storage.bookings, JSON.stringify(next));
    setBookings(next);
  };

  const logout = () => {
    localStorage.removeItem(storage.user);
    setUser(null);
    setModal(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="nav-inner">
          <a className="logo site-logo" href={locale === 'ru' ? '/ru' : '/'} aria-label="UzCompass">
            <span className="logo-uz">Uz</span><span className="logo-compass">Compass</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? text.closeMenu : text.menu}
            aria-expanded={menuOpen}
            aria-controls="compact-navigation"
            onClick={() => setMenuOpen(open => !open)}
          >
            <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
          </button>
          <nav className="nav-links" aria-label={text.aria}>
            {text.nav.map(([href, label]) => {
              const target = page !== 'home' && href.startsWith('#') ? `${locale === 'ru' ? '/ru' : ''}/${href}` : href;
              return <a href={target} key={href}>{label}</a>;
            })}
          </nav>
          <div className="nav-actions">
            <button
              className="theme-toggle"
              data-theme-managed
              type="button"
              aria-label={text.theme}
              aria-pressed={darkTheme}
              onClick={toggleTheme}
            >
              <span aria-hidden="true">◐</span>
            </button>
            <div className="language-switch" aria-label={text.language}>
              <a className={locale === 'en' ? 'active' : undefined} href={currentPathForLocale('en')} aria-label={text.english}>EN</a>
              <a className={locale === 'ru' ? 'active' : undefined} href={currentPathForLocale('ru')} aria-label={text.russian}>RU</a>
            </div>
            <a className="btn btn-primary" href={page === 'home' ? '#cities' : `${locale === 'ru' ? '/ru' : ''}/#cities`}>{text.explore}</a>
            <button
              className="account-button"
              data-account
              type="button"
              aria-label={user ? text.trips : text.login}
              onClick={openAccount}
            >
              {user ? text.tripsShort : text.login}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="compact-nav" id="compact-navigation" aria-label={text.aria}>
            {text.nav.map(([href, label]) => {
              const target = page !== 'home' && href.startsWith('#') ? `${locale === 'ru' ? '/ru' : ''}/${href}` : href;
              return <a href={target} key={href} onClick={() => setMenuOpen(false)}>{label}</a>;
            })}
          </nav>
        )}
      </header>

      {modal && (
        <div className="app-modal">
          <button className="app-modal__backdrop" type="button" aria-label={text.close} onClick={() => setModal(false)} />
          <section className="app-modal__panel" role="dialog" aria-modal="true" aria-label={user ? `${text.hello}, ${user.name}` : text.create}>
            <button className="app-modal__close" type="button" onClick={() => setModal(false)} aria-label={text.close}>×</button>
            {user ? (
              <>
                <h2 className="text-2xl font-semibold text-slate-900">{text.hello}, {user.name}</h2>
                <p className="mt-2">{user.email} · {user.phone}</p>
                <div className="account-list">
                  {bookings.length ? bookings.map(booking => (
                    <article className="account-booking" key={booking.id}>
                      <strong className="block text-slate-900">{booking.title}</strong>
                      <span className="mt-1 block">{booking.type} · {booking.date}</span>
                      <small className="mt-1 block">{booking.destination}</small>
                      <button className="mt-3 rounded-full border border-slate-300 px-3 py-2 text-sm" type="button" onClick={() => cancelBooking(booking.id)}>{text.cancel}</button>
                    </article>
                  )) : <p className="empty-state">{text.empty}</p>}
                </div>
                <button className="app-text-button" type="button" onClick={logout}>{text.logout}</button>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-slate-900">{text.create}</h2>
                <p className="mt-2">{text.intro}</p>
                <form className="app-form" onSubmit={register}>
                  <label>{text.name}<input name="name" required minLength={2} autoComplete="name" /></label>
                  <label>{text.email}<input name="email" type="email" required autoComplete="email" /></label>
                  <label>{text.phone}<input name="phone" type="tel" required placeholder="+998 90 000 00 00" /></label>
                  <label className="app-check"><input type="checkbox" required /> {text.accept}</label>
                  <button className="btn btn-primary" type="submit">{text.register}</button>
                </form>
              </>
            )}
          </section>
        </div>
      )}
    </>
  );
}
