import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

const mockUser = {
  email: 'admin@example.com',
  passwordHash: bcrypt.hashSync('password123', 10)
};

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
  }

  if (email !== mockUser.email || !bcrypt.compareSync(password, mockUser.passwordHash)) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET!, { expiresIn: '1h' });
  const cookie = serialize('auth', token, {
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    maxAge: 3600
  });

  return new NextResponse(JSON.stringify({ message: 'Login successful' }), {
    status: 200,
    headers: {
      'Set-Cookie': cookie,
      'Content-Type': 'application/json',
    },
  });
}