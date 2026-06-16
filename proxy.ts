import { NextResponse, type NextRequest } from 'next/server';

const PORTAL_PATHS = ['/dashboard', '/my-reef', '/analytics', '/control', '/login', '/upgrade'];

function isPortalHost(host: string) {
  return host.startsWith('app.') || host.includes('localhost') || host.startsWith('127.');
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
      url.host = 'app.nextupreef.com';
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

  if (isPortalPath(path)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-portal', '1');
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
};
