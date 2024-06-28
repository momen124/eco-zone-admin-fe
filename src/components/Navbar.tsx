import React, { useState } from 'react';
import { Navbar as MantineNavbar, Text } from '@mantine/core';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (path: string) => {
        setActiveLink(path);
        router.push(path);
    };

    return (
        <MantineNavbar width={{ base: 300 }} p="xs">
            <MantineNavbar.Section>
                <Text
                    style={{ cursor: 'pointer', padding: '8px', backgroundColor: activeLink === '/admin/dashboard' ? '#f0f0f0' : 'transparent' }}
                    onClick={() => handleLinkClick('/admin/dashboard')}
                >
                    Dashboard
                </Text>
            </MantineNavbar.Section>
            <MantineNavbar.Section>
                <Text
                    style={{ cursor: 'pointer', padding: '8px', backgroundColor: activeLink === '/admin/analytics' ? '#f0f0f0' : 'transparent' }}
                    onClick={() => handleLinkClick('/admin/analytics')}
                >
                    Analytics
                </Text>
            </MantineNavbar.Section>
            <MantineNavbar.Section>
                <Text
                    style={{ cursor: 'pointer', padding: '8px', backgroundColor: activeLink === '/admin/listings' ? '#f0f0f0' : 'transparent' }}
                    onClick={() => handleLinkClick('/admin/listings')}
                >
                    Listings
                </Text>
            </MantineNavbar.Section>
            <MantineNavbar.Section>
                <Text
                    style={{ cursor: 'pointer', padding: '8px', backgroundColor: activeLink === '/admin/users' ? '#f0f0f0' : 'transparent' }}
                    onClick={() => handleLinkClick('/admin/users')}
                >
                    Users
                </Text>
            </MantineNavbar.Section>
        </MantineNavbar>
    );
};

export default Navbar;
