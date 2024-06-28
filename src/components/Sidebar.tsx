import React from 'react';
import Link from 'next/link';
import {
    HomeIcon,
    ChartBarIcon,
    DocumentTextIcon,
    UserGroupIcon,
    CogIcon
} from '@heroicons/react/24/outline';

const Sidebar = () => {
    return (
        <aside className="w-64 h-screen bg-white shadow-md">
            <div className="p-4">
                <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
                <nav className="mt-6">
                    <NavItem href="/dashboard" icon={<HomeIcon className="w-5 h-5" />} text="Dashboard" isActive={false} />
                    <NavItem href="/analytics" icon={<ChartBarIcon className="w-5 h-5" />} text="Analytics" isActive={false} />
                    <NavItem href="/listing" icon={<DocumentTextIcon className="w-5 h-5" />} text="Listings" isActive={false} />
                    <NavItem href="/users" icon={<UserGroupIcon className="w-5 h-5" />} text="Users" isActive={false} />
                    <NavItem href="/Settings" icon={<CogIcon className="w-5 h-5" />} text="Settings" isActive={false} />
                    <NavItem href="/new-product" icon={<DocumentTextIcon className="w-5 h-5" />} text="New Product" isActive={true} />
                    <NavItem href="/reports" icon={<DocumentTextIcon className="w-5 h-5" />} text="reports" isActive={true} />

                </nav>
            </div>
        </aside>
    );
};

const NavItem = ({ href, icon, text, isActive }) => {
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
