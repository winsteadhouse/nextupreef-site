import { NextResponse, type NextRequest } from 'next/server';

const PORTAL_HOST = 'portal.nextupreef.com';
const PORTAL_PATHS = ['/dashboard', '/log', '/my-reef', '/analytics', '/control', '/settings', '/admin', '/login', '/upgrade'];

function isLocalHost(host: string) {
  return host.includes('localhost') || host.startsWith('127.');
}
function isPortalHost(host: string) {
  return host.startsWith('portal.');
}
function isPortalPath(p: string) {
  return PORTAL_PATHS.some((x) => p === x || p.startsWith(x + '/'));
}

export default function proxy(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const path = request.nextUrl.pathname;

  // Local dev: serve every path on the same origin (marketing at /, portal at
  // /dashboard, etc.) so the whole site is previewable at localhost. No
  // host-based redirects. Still flag portal paths so the layout renders the
  // portal chrome, exactly like production.
  if (isLocalHost(host)) {
    const requestHeaders = new Headers(request.headers);
    if (isPortalPath(path)) requestHeaders.set('x-portal', '1');
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  if (!isPortalHost(host)) {
    if (isPortalPath(path)) {
      const url = request.nextUrl.clone();
      url.host = PORTAL_HOST;
      url.port = '';
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  if (path === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  const requestHeaders = new Headers(request.headers);
  if (isPortalPath(path)) requestHeaders.set('x-portal', '1');
  const res = NextResponse.next({ request: { headers: requestHeaders } });
  res.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
};
