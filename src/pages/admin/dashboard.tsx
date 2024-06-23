// pages/admin/dashboard.js
import AdminLayout from './layout';
import { Title, Text } from '@mantine/core';

const Dashboard = () => {
  return (
    <AdminLayout>
      <Title order={2}>Admin Dashboard</Title>
      <Text>Welcome to the admin panel. Use the sidebar to navigate.</Text>
    </AdminLayout>
  );
};

export default Dashboard;
