import { useState, ReactNode } from 'react';
import { AppShell, Text } from '@mantine/core';
import Navbar from '../components/Navbar';
import Header from '../components/Header';


interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [navbarOpened, setNavbarOpened] = useState(false);

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar />
      }
      header={
        <Header height={60} p="xs">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <Text onClick={() => setNavbarOpened(!navbarOpened)}>Toggle Menu</Text>
            <Text ml="auto">Admin Panel</Text>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};

export default AdminLayout;
