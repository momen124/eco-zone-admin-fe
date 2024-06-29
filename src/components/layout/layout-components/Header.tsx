// components/Header.js
import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <div>
                <h1 className="text-xl font-semibold">New Product</h1>
                <p className="text-gray-500">Pages / New Product</p>
            </div>
            <div className="flex items-center">
                <div className="mr-6">
                    <input type="text" placeholder="Search..." className="border rounded-lg p-2" />
                </div>
                <div className="flex items-center">
                    <img src="/profile.jpg" alt="User" className="w-10 h-10 rounded-full" />
                    <div className="ml-3">
                        <p className="font-semibold">Sayo Kravits</p>
                        <p className="text-gray-500">Public Relations</p>
                    </div>
                </div>
                <Link href="/profile" legacyBehavior>
                    <a className="ml-6 text-gray-700 hover:text-gray-900">Profile</a>
                </Link>
            </div>
        </header>
    );
};

export default Header;
