import { NextRequest } from 'next/server';
import { prisma } from '../lib/prisma';

export async function middleware(request: NextRequest) {
  const { nextUrl, ip, headers } = request;

  // Exclude API and _next assets
  const excludedPaths = ['/api', '/_next'];
  if (excludedPaths.some(path => nextUrl.pathname.startsWith(path))) {
    return;
  }

  // Collect analytics data
  const analyticsData = {
    ip: ip || '',
    userAgent: headers.get('user-agent') || '',
    path: nextUrl.pathname,
    referrer: headers.get('referer') || '',
    device: headers.get('device') || '',
    browser: headers.get('browser') || '',
  };

  // Store analytics data in database using Prisma
  await prisma.analytics.create({ data: analyticsData });
}