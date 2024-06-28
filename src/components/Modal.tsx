import React from 'react';
import { Modal } from '@mantine/core';

const CustomModal: React.FC<{ title: string, isOpen: boolean, onClose: () => void, children: React.ReactNode }> = ({ title, isOpen, onClose, children }) => {
    return (
        <Modal title={title} opened={isOpen} onClose={onClose}>
            {children}
        </Modal>
    );
};

export default CustomModal;
