import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>

{/* <Link href="/admin/analytics">{('analytics')}</Link> */}
<Link href="/admin/dashboard">{('dashboard')}</Link>
<Link href="/admin/layout">{('layout')}</Link>
<Link href="/admin/listing">{('listing')}</Link>
<Link href="/admin/login">{('login')}</Link>
<Link href="/admin/users">{('users')}</Link>

   
    </main>
  );
}
