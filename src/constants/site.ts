export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://sum529-create.github.io/sumin-portfolio';

export function withBasePath(path: string) {
  if (!path.startsWith('/')) return path;

  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!base || path === base || path.startsWith(`${base}/`)) return path;

  return `${base}${path}`;
}
