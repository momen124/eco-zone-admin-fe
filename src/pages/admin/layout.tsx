// pages/admin/layout.js
import { AppShell, Text } from '@mantine/core';
import { useRouter } from 'next/router';

const AdminLayout = ({ children }) => {
  const router = useRouter();

  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: 'lg',
        children: (
          <>
            <Text onClick={() => router.push('/admin/dashboard')}>Dashboard</Text>
            <Text onClick={() => router.push('/admin/listings')}>Listings</Text>
            <Text onClick={() => router.push('/admin/users')}>Users</Text>
          </>
        ),
      }}
      header={{
        height: 60,
        children: <Text>Admin Panel</Text>,
      }}
    >
      {children}
    </AppShell>
  );
};

export default AdminLayout;
