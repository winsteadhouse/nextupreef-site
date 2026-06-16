import { NextResponse, type NextRequest } from 'next/server';

const PORTAL_HOST = 'portal.nextupreef.com';
const PORTAL_PATHS = ['/dashboard', '/my-reef', '/analytics', '/control', '/settings', '/login', '/upgrade'];

function isPortalHost(host: string) {
  return host.startsWith('portal.') || host.includes('localhost') || host.startsWith('127.');
}
function isPortalPath(p: string) {
  return PORTAL_PATHS.some((x) => p === x || p.startsWith(x + '/'));
}

export default function proxy(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const path = request.nextUrl.pathname;

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
