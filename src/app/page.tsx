'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Portal</h1>
      <Link href="/sign-in/admin">
        <button>Go to Admin</button>
      </Link>
      <Link href="/sign-in/employee">
        <button>Go to User</button>
      </Link>
    </div>
  );
}
