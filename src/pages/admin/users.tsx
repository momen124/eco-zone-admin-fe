// src/pages/admin/users.js
import AdminLayout from '../../components/AdminLayout';
import { Title, Table, Button } from '@mantine/core';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner'; // Import LoadingSpinner component

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    // Simulate fetching users
    setTimeout(() => {
      setUsers([
        { id: 1, name: 'User 1', status: 'Active' },
        { id: 2, name: 'User 2', status: 'Suspended' },
        { id: 3, name: 'User 3', status: 'Active' },
      ]);
      setLoading(false); // Set loading to false after data is fetched
    }, 2000); // Simulate delay
  }, []);

  const suspendUser = (id) => {
    // Implement API call to suspend user
    console.log(`Suspended user ${id}`);
  };

  const banUser = (id) => {
    // Implement API call to ban user
    console.log(`Banned user ${id}`);
  };

  const rows = users.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.status}</td>
      <td>
        <Button color="yellow" onClick={() => suspendUser(user.id)}>
          Suspend
        </Button>
        <Button color="red" onClick={() => banUser(user.id)}>
          Ban
        </Button>
      </td>
    </tr>
  ));

  return (
    <AdminLayout>
      <Title order={2}>Manage Users</Title>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      )}
    </AdminLayout>
  );
};

export default Users;
