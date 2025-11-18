// src/proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Token'ı decode et (doğrulama yapmadan, sadece içeriği oku)
function decodeToken(token: string): { roles?: string[] } | null {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      Buffer.from(base64, 'base64')
        .toString()
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

export function proxy(request: NextRequest) {
  const token = request.cookies.get('access_token')?.value;
  const { pathname } = request.nextUrl;

  // Route tanımları
  const adminRoutes = ['/admin'];
  const sellerRoutes = ['/seller'];
  const customerRoutes = ['/customer'];
  const authRoutes = ['/login', '/register', '/forgot-password'];

  // Route kontrolleri
  const isAdminRoute = adminRoutes.some(route => pathname.startsWith(route));
  const isSellerRoute = sellerRoutes.some(route => pathname.startsWith(route));
  const isCustomerRoute = customerRoutes.some(route => pathname.startsWith(route));
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route));

  // Token yoksa ve protected route ise -> login'e yönlendir
  if ((isAdminRoute || isSellerRoute || isCustomerRoute) && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Token varsa role kontrolü yap
  if (token && (isAdminRoute || isSellerRoute || isCustomerRoute)) {
    const decoded = decodeToken(token);
    const roles = decoded?.roles || []; // ✅ userRole olarak değiştirdik

    // Admin route'a admin değilse giremez
    if (isAdminRoute && !roles.includes('admin')) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    // Seller route'a seller değilse giremez
    if (isSellerRoute && !roles.includes('seller')) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    // Customer route'a customer değilse giremez
    if (isCustomerRoute && !roles.includes('customer')) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Token varsa ve auth route ise -> role'e göre yönlendir
  if (isAuthRoute && token) {
    const decoded = decodeToken(token);
    const roles = decoded?.roles || [];

    if (roles.includes('admin')) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    } else if (roles.includes('seller')) {
      return NextResponse.redirect(new URL('/seller/dashboard', request.url));
    } else if (roles.includes('customer')) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};