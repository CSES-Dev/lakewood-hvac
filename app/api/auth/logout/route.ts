import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST() {
  const cookie = serialize('auth', '', {
    httpOnly: true,
    path: '/',
    expires: new Date(0),
  });

  return new NextResponse(JSON.stringify({ message: 'Logged out' }), {
    status: 200,
    headers: {
      'Set-Cookie': cookie,
      'Content-Type': 'application/json',
    },
  });
}