
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { getAdminNavItems } from '../config/nav-items';

export type NavItemType = {
    href: string
    icon: ReactNode
    text: string
    isActive?: boolean
}

const Sidebar = () => {
    const router = useRouter()
    const navItems = getAdminNavItems()
    return (
        <aside className="w-64 h-screen bg-white shadow-md">
            <div className="p-4">
                <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
                <nav className="mt-6">
                    {
                        navItems.map((item, index) => (
                            <NavItem key={index} {...item} isActive={router.pathname.includes(item.href)} />
                        ))
                    }
                </nav>
            </div>
        </aside>
    );
};

const NavItem = ({ href, icon, text, isActive = false }: NavItemType) => {
    return (
        <Link href={href} legacyBehavior>
            <a className={`flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100 ${isActive ? 'bg-gray-200' : ''}`}>
                {icon}
                <span className="ml-3">{text}</span>
            </a>
        </Link>
    );
};

export default Sidebar;
