import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { StyledModalOverlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ largeImageURL, altText, onClose }) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <StyledModalOverlay onClick={handleBackdropClick}>
      <div className="modal">
        <img src={largeImageURL} alt={altText} />
      </div>
    </StyledModalOverlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};
