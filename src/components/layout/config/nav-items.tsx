import {
    ChartBarIcon,
    CogIcon,
    DocumentTextIcon,
    HomeIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline';
import { NavItemType } from '../layout-components/Sidebar';

const navItems: NavItemType[] = [
    {
        href: '/dashboard',
        icon: <HomeIcon className="w-5 h-5" />,
        text: 'Dashboard',
    },
    {
        href: '/analytics',
        icon: <ChartBarIcon className="w-5 h-5" />,
        text: 'Analytics',
    },
    {
        href: '/listings',
        icon: <DocumentTextIcon className="w-5 h-5" />,
        text: 'Listings',
    },
    {
        href: '/reports',
        icon: <DocumentTextIcon className="w-5 h-5" />,
        text: 'Reports',
    },
    {
        href: '/users',
        icon: <UserGroupIcon className="w-5 h-5" />,
        text: 'Users',
    }, {
        href: '/settings',
        icon: <CogIcon className="w-5 h-5" />,
        text: 'Settings',
    }, {
        href: '/new-product',
        icon: <DocumentTextIcon className="w-5 h-5" />,
        text: 'New Product',
    }
]

const getAdminNavItems = () => {
    return navItems
}

export { getAdminNavItems };
