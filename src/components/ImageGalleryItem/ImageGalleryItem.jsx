import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal';
import { StyledGalleryItem } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = { isShowModal: false };

  toggleModal = () => {
    this.setState(({ isShowModal }) => ({ isShowModal: !isShowModal }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;

    return (
      <>
        <StyledGalleryItem>
          <img
            src={webformatURL}
            alt={tags}
            onClick={this.toggleModal}
            className="image"
          />
        </StyledGalleryItem>
        {this.state.isShowModal && (
          <Modal
            largeImageURL={largeImageURL}
            altText={tags}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
