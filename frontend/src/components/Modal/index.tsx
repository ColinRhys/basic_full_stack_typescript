// components/Modal/index.tsx

import React from 'react';
import { Overlay, Content } from './styles';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent clicks inside the modal from closing it
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <Content onClick={handleContentClick}>{children}</Content>
    </Overlay>
  );
};

export default Modal;