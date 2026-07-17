import React, { useState } from 'react';

const storage = { user: 'uzexplore-user', bookings: 'uzexplore-bookings' };

const copy = {
  en: {
    aria: 'Primary navigation',
    nav: [['#home', 'Home'], ['#cities', 'Cities'], ['#attractions', 'Attractions'], ['#restaurants', 'Restaurants'], ['#hotels', 'Hotels'], ['#contact', 'Contact']],
    theme: 'Toggle theme', language: 'Language selector', english: 'English', russian: 'Russian', explore: 'Explore Now', login: 'Sign in', trips: 'My trips',
    create: 'Create account', intro: 'Register to save bookings on this device.', name: 'Name', email: 'Email', phone: 'Phone', accept: 'I accept the service terms',
    register: 'Register', empty: 'You have no bookings yet.', cancel: 'Cancel booking', logout: 'Sign out', hello: 'Hello', close: 'Close'
  },
  ru: {
    aria: 'Основная навигация',
    nav: [['#home', 'Главная'], ['#cities', 'Города'], ['#attractions', 'Достопримечательности'], ['#restaurants', 'Рестораны'], ['#hotels', 'Отели'], ['#contact', 'Контакты']],
    theme: 'Переключить тему', language: 'Выбор языка', english: 'Английский', russian: 'Русский', explore: 'Исследовать', login: 'Войти', trips: 'Мои поездки',
    create: 'Создать аккаунт', intro: 'Регистрация нужна для сохранения броней на этом устройстве.', name: 'Имя', email: 'Электронная почта', phone: 'Телефон',
    accept: 'Я принимаю условия сервиса', register: 'Зарегистрироваться', empty: 'У вас пока нет бронирований.', cancel: 'Отменить бронь', logout: 'Выйти из аккаунта',
    hello: 'Здравствуйте', close: 'Закрыть'
  }
};

function read(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; }
  catch { return fallback; }
}

export default function SiteHeader({ locale }) {
  const text = copy[locale];
  const [user, setUser] = useState(() => read(storage.user, null));
  const [modal, setModal] = useState(false);
  const [bookings, setBookings] = useState(() => read(storage.bookings, []));

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
          <a className="logo" href={locale === 'ru' ? 'index-ru.html' : 'index.html'}>Uz<span>Explore</span></a>
          <nav className="nav-links" aria-label={text.aria}>
            {text.nav.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
          </nav>
          <div className="nav-actions">
            <button className="theme-toggle" type="button" aria-label={text.theme}><span aria-hidden="true">◐</span></button>
            <div className="language-switch" aria-label={text.language}>
              <a className={locale === 'en' ? 'active' : undefined} href="index.html" aria-label={text.english}>EN</a>
              <a className={locale === 'ru' ? 'active' : undefined} href="index-ru.html" aria-label={text.russian}>RU</a>
            </div>
            <a className="btn btn-primary header-explore" href="#cities">{text.explore}</a>
            <button className="account-button" data-account type="button" onClick={openAccount}>{user ? text.trips : text.login}</button>
          </div>
        </div>
      </header>

      {modal && (
        <div className="app-modal">
          <button className="app-modal__backdrop" type="button" aria-label={text.close} onClick={() => setModal(false)} />
          <section className="app-modal__panel" role="dialog" aria-modal="true" aria-label={user ? `${text.hello}, ${user.name}` : text.create}>
            <button className="app-modal__close" type="button" onClick={() => setModal(false)} aria-label={text.close}>×</button>
            {user ? (
              <>
                <h2>{text.hello}, {user.name}</h2>
                <p>{user.email} · {user.phone}</p>
                <div className="account-list">
                  {bookings.length ? bookings.map(booking => (
                    <article className="account-booking" key={booking.id}>
                      <strong>{booking.title}</strong>
                      <span>{booking.type} · {booking.date}</span>
                      <small>{booking.destination}</small>
                      <button type="button" onClick={() => cancelBooking(booking.id)}>{text.cancel}</button>
                    </article>
                  )) : <p className="empty-state">{text.empty}</p>}
                </div>
                <button className="app-text-button" type="button" onClick={logout}>{text.logout}</button>
              </>
            ) : (
              <>
                <h2>{text.create}</h2>
                <p>{text.intro}</p>
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
