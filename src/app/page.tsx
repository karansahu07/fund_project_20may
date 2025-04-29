// app/page.tsx
'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Portal</h1>
      <Link href="/admin/auth/sign-in">
        <button>Go to Admin</button>
      </Link>
      <Link href="/employees/auth/sign-in">
        <button>Go to User</button>
      </Link>
    </div>
  );
}
