import { Title, Table, Button } from '@mantine/core';
import { useState, useEffect } from 'react';
import AdminLayout from '../components/layout';
import LoadingSpinner from '../components/LoadingSpinner';


const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUsers([
        { id: 1, name: 'User 1', status: 'Active' },
        { id: 2, name: 'User 2', status: 'Suspended' },
        { id: 3, name: 'User 3', status: 'Active' },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const suspendUser = (id) => {
    console.log(`Suspended user ${id}`);
  };

  const banUser = (id) => {
    console.log(`Banned user ${id}`);
  };

  const rows = users.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.status}</td>
      <td>
        <Button color="yellow" onClick={() => suspendUser(user.id)}>Suspend</Button>
        <Button color="red" onClick={() => banUser(user.id)}>Ban</Button>
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
