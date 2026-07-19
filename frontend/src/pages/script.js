(() => {
    const root = document.documentElement;
    const storageKey = 'uzexplore-theme';
    const isRussian = root.lang === 'ru';

    const setTheme = theme => {
        root.dataset.theme = theme;
        document.body.dataset.theme = theme;
        document.querySelectorAll('.theme-toggle, .bukhara-theme-toggle').forEach(button => {
            const dark = theme === 'dark';
            button.setAttribute('aria-pressed', String(dark));
            button.setAttribute('aria-label', dark
                ? (isRussian ? 'Включить светлую тему' : 'Switch to light theme')
                : (isRussian ? 'Включить тёмную тему' : 'Switch to dark theme'));
            button.title = dark
                ? (isRussian ? 'Светлая тема' : 'Light theme')
                : (isRussian ? 'Тёмная тема' : 'Dark theme');
        });
    };

    setTheme(root.dataset.theme || 'light');
    document.querySelectorAll('.theme-toggle, .bukhara-theme-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
            setTheme(next);
            try { localStorage.setItem(storageKey, next); } catch (error) { /* Storage is optional. */ }
        });
    });

    const clock = document.querySelector('[data-bukhara-time]');
    if (clock) {
        const locale = root.lang === 'ru' ? 'ru-RU' : 'en-GB';
        const formatter = new Intl.DateTimeFormat(locale, {
            timeZone: 'Asia/Samarkand', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
        });
        const updateClock = () => { clock.textContent = formatter.format(new Date()); };
        updateClock();
        window.setInterval(updateClock, 1000);
    }

    document.querySelectorAll('.bukhara-card-gallery').forEach(gallery => {
        const track = gallery.querySelector('.bukhara-gallery__track');
        if (!track) return;
        gallery.querySelector('.gallery-next')?.addEventListener('click', () => {
            track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
        });
        gallery.querySelector('.gallery-prev')?.addEventListener('click', () => {
            track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
        });
    });

    const photoCopy = isRussian
        ? { title: 'Фото скоро', note: 'Локальное фото можно добавить позже' }
        : { title: 'Photo coming soon', note: 'Local photo can be added later' };

    document.querySelectorAll('.bukhara-photo-placeholder').forEach(placeholder => {
        const title = placeholder.querySelector('span');
        const note = placeholder.querySelector('small');
        if (title) title.textContent = photoCopy.title;
        if (note) note.textContent = photoCopy.note;
    });

    document.querySelectorAll('.bukhara-status--photo').forEach(status => {
        status.textContent = photoCopy.title;
    });
})();
