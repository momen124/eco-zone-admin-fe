import React from 'react';
import { Notification as MantineNotification } from '@mantine/core';

const Notification: React.FC<{ type: 'error' | 'success', message: string }> = ({ type, message }) => {
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
