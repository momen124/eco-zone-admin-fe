import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className='p-4'>
        <Link href="/admin/analytics" legacyBehavior>
          <a className="block mb-4">Analytics</a>
        </Link>
        <Link href="/admin/dashboard" legacyBehavior>
          <a className="block mb-4">Dashboard</a>
        </Link>
        <Link href="/admin/layout" legacyBehavior>
          <a className="block mb-4">Layout</a>
        </Link>
        <Link href="/admin/listing" legacyBehavior>
          <a className="block mb-4">Listing</a>
        </Link>
        <Link href="/admin/login" legacyBehavior>
          <a className="block mb-4">Login</a>
        </Link>
        <Link href="/admin/users" legacyBehavior>
          <a className="block mb-4">Users</a>
        </Link>
      </div>
    </main>
  );
}
