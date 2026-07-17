import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import '../static/styles.css';
const pageName = location.pathname.split('/').pop() || 'index.html';
const pages = {
  'index.html': () => import('./HomeEn.jsx'),
  'index-ru.html': () => import('./HomeRu.jsx'),
  'bukhara.html': () => import('./BukharaEn.jsx'),
  'bukhara-ru.html': () => import('./BukharaRu.jsx'),
  'city.html': () => import('./CityEn.jsx'),
  'city-ru.html': () => import('./CityRu.jsx')
};
const Page = React.lazy(pages[pageName] || pages['index.html']);

function PageBoot() {
  useEffect(() => {
    const boot = async () => {
      await import('../pages/script.js');
      if (pageName === 'index-ru.html' || pageName === 'city-ru.html') {
        await import('../pages/platform.js');
      }
    };
    boot();
  }, []);

  return null;
}

function App() {
  return (
    <React.Suspense fallback={null}>
      <Page />
      <PageBoot />
    </React.Suspense>
  );
}

createRoot(document.querySelector('#root')).render(<App />);
