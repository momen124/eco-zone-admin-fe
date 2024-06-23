// src/pages/admin/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { TextInput, PasswordInput, Paper, Button, Title } from '@mantine/core';
import { signIn } from 'next-auth/client';
import Notification from '../../components/Notification'; // Import Notification component

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState(null); // State for notification
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result.ok) {
      router.push('/admin/dashboard');
    } else {
      // Show error notification
      setNotification({ type: 'error', message: 'Invalid email or password.' });
    }
  };

  return (
    <Paper padding="md" style={{ maxWidth: 400, margin: 'auto' }}>
      <Title order={2}>Admin Login</Title>
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Email"
          placeholder="admin@example.com"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          required
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          required
        />
        <Button type="submit" fullWidth mt="md">
          Login
        </Button>
      </form>
    </Paper>
  );
};

export default AdminLogin;
