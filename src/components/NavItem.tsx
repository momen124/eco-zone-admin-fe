import React from 'react';
import { useRouter } from 'next/router';

const NavItem = ({ href, icon, text, isActive, isCollapsed }) => {
    const router = useRouter();

    return (
        <a
            href={href}
            className={`flex items-center p-2 my-2 transition-colors duration-300 ${
                isActive ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-100'
            } rounded-lg`}
            onClick={(e) => {
                e.preventDefault();
                router.push(href);
            }}
        >
            {icon}
            {!isCollapsed && <span className="ml-4">{text}</span>}
        </a>
    );
};

export default NavItem;
