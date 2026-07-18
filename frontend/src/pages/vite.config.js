import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from 'node:path';

const pages = {
    '/': {
        lang: 'en',
        title: 'UzExplore | Premium Travel in Uzbekistan'
    },
    '/ru': {
        lang: 'ru',
        title: 'UzExplore | Премиальные путешествия по Узбекистану'
    },
    '/guides': {
        lang: 'en',
        title: 'Hire a Local Guide in Uzbekistan | UzExplore',
        description: 'Find a local English-speaking guide for private tours in Uzbekistan.'
    },
    '/ru/guides': {
        lang: 'ru',
        title: 'Найти местного гида в Узбекистане | UzExplore',
        description: 'Найдите местного гида для частного тура по Узбекистану.'
    },
    '/bukhara': {
        lang: 'en',
        title: 'Bukhara Travel Guide | UzExplore',
        bodyClass: 'bukhara-page',
        description: "A practical, curated guide to Bukhara's heritage, food, stays, museums and transport."
    },
    '/ru/bukhara': {
        lang: 'ru',
        title: 'Путеводитель по Бухаре | UzExplore',
        bodyClass: 'bukhara-page'
    },
    '/ru/city': {
        lang: 'ru',
        title: 'Направление | UzExplore',
        bodyClass: 'destination-page',
        destination: true
    },
    '/city': {
        lang: 'en',
        title: 'Destination | UzExplore',
        bodyClass: 'destination-page'
    },
    '/ru/samarkand': {
        lang: 'ru',
        title: 'Самарканд | UzExplore',
        bodyClass: 'destination-page',
        destination: true
    },
    '/samarkand': {
        lang: 'en',
        title: 'Samarkand | UzExplore',
        bodyClass: 'destination-page',
        destination: true
    },
};

function documentShell(page, scriptSource, stylesheet = '') {
    const meta = page.description
        ? `\n    <meta name="description" content="${page.description}">`
        : '';
    const bodyAttributes = [
        page.bodyClass && `class="${page.bodyClass}"`,
        page.destination && 'data-destination-page'
    ].filter(Boolean).join(' ');

    return `<!doctype html>
<html lang="${page.lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">${meta}
    <title>${page.title}</title>${stylesheet ? `\n    <link rel="stylesheet" href="${stylesheet}">` : ''}
    <script>try{document.documentElement.dataset.theme=localStorage.getItem("uzexplore-theme")||"light"}catch(e){}</script>
</head>
<body${bodyAttributes ? ` ${bodyAttributes}` : ''}>
    <div id="root"></div>
    <script type="module" src="${scriptSource}"></script>
</body>
</html>`;
}

function virtualPages() {
    return {
        name: 'uzexplore-virtual-pages',
        configureServer(server) {
            server.middlewares.use(async (request, response, next) => {
                const pathname = new URL(request.url, 'http://localhost').pathname;
                const route = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
                const page = pages[route];
                if (!page) return next();

                const html = await server.transformIndexHtml(
                    pathname,
                    documentShell(page, '/src/components/main.jsx')
                );
                response.statusCode = 200;
                response.setHeader('Content-Type', 'text/html; charset=utf-8');
                response.end(html);
            });
        },
        generateBundle(_options, bundle) {
            const entry = Object.values(bundle).find(
                output => output.type === 'chunk' && output.isEntry
            );
            if (!entry) throw new Error('Application entry chunk was not generated');
            const stylesheet = Object.values(bundle).find(
                output => output.type === 'asset' && output.fileName.endsWith('.css')
            );

            for (const [route, page] of Object.entries(pages)) {
                this.emitFile({
                    type: 'asset',
                    fileName: route === '/' ? 'index.html' : `${route.slice(1)}/index.html`,
                    source: documentShell(
                        page,
                        `/${entry.fileName}`,
                        stylesheet ? `/${stylesheet.fileName}` : ''
                    )
                });
            }
        }
    };
}

export default defineConfig({
    plugins: [react(), virtualPages()],
    build: {
        rollupOptions: {
            input: resolve(import.meta.dirname, '../components/main.jsx')
        }
    }
});
