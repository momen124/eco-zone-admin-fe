// src/components/Notification.js
import { Notification as MantineNotification } from '@mantine/core';

const Notification = ({ type, message }) => {
  return (
    <MantineNotification
      title={type === 'error' ? 'Error' : 'Success'}
      color={type === 'error' ? 'red' : 'blue'}
    >
      {message}
    </MantineNotification>
  );
};

export default Notification;
