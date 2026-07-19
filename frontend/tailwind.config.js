/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        registan: '#2E9DA4',
        shahi: '#1C4B7C',
        sandstone: '#C8A16A',
        madrasa: '#D4A135',
        taupe: '#A78B71',
        midnight: '#162938'
      },
      fontFamily: {
        display: ['Amiri', 'serif'],
        body: ['Public Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
      }
    }
  },
  plugins: [],
};

