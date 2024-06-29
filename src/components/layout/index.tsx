import React, { ReactNode } from 'react';
import Header from './layout-components/Header';
import Sidebar from './layout-components/Sidebar';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="p-6 flex-1 bg-gray-50">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
