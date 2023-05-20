import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { StyledListGallery } from './ImageGallery.styled';

export const ImageGallery = ({ data }) => {
  return (
    <StyledListGallery>
      {data.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            tags={image.tags}
            image={image}
          />
        );
      })}
    </StyledListGallery>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
