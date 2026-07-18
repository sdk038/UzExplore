export function currentPath() {
  return location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '');
}

export function pathForLocale(path, locale) {
  const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '');
  const englishPath = normalizedPath === '/ru'
    ? '/'
    : normalizedPath.startsWith('/ru/')
      ? normalizedPath.slice(3) || '/'
      : normalizedPath;

  if (locale === 'en') return englishPath;
  return englishPath === '/' ? '/ru' : `/ru${englishPath}`;
}

export function currentPathForLocale(locale) {
  return `${pathForLocale(currentPath(), locale)}${location.search}${location.hash}`;
}
