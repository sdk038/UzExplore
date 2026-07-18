import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { currentPath } from '../app/routes.js';
import '../static/base.css';
import '../static/home.css';
import '../static/bukhara.css';
import '../static/bukhara-experience.css';
import '../static/theme.css';
import '../static/media.css';
import '../static/hero.css';
import '../static/app.css';
import '../static/guides.css';
const pagePath = currentPath();
const pages = {
  '/': () => import('./HomeEn.jsx'),
  '/ru': () => import('./HomeRu.jsx'),
  '/bukhara': () => import('./BukharaEn.jsx'),
  '/ru/bukhara': () => import('./BukharaRu.jsx'),
  '/samarkand': () => import('./Samarkand-en.jsx'),
  '/ru/samarkand': () => import('./SamarkandRu.jsx'),
  '/guides': () => import('./GuidesEn.jsx'),
  '/ru/guides': () => import('./GuidesEn.jsx'),
  '/city': () => import('./CityEn.jsx'),
  '/ru/city': () => import('./CityRu.jsx')
};
const Page = React.lazy(pages[pagePath] || pages['/']);

function PageBoot() {
  useEffect(() => {
    const boot = async () => {
      await import('../pages/script.js');
      if (pagePath === '/ru' || pagePath === '/ru/city') {
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
