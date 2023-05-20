import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal';
import { StyledGalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };
  return (
    <>
      <StyledGalleryItem>
        <img
          src={webformatURL}
          alt={tags}
          onClick={toggleModal}
          className="image"
        />
      </StyledGalleryItem>
      {isShowModal && (
        <Modal
          largeImageURL={largeImageURL}
          altText={tags}
          onClose={toggleModal}
        />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
