
import { Modal } from '@mantine/core';

const CustomModal = ({ title, isOpen, onClose, children }) => {
  return (
    <Modal title={title} opened={isOpen} onClose={onClose}>
      {children}
    </Modal>
  );
};

export default CustomModal;
