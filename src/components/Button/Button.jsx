import PropTypes from 'prop-types';
import { StyledLoadMoreBtn } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <StyledLoadMoreBtn type="button" onClick={onClick}>
      Load more
    </StyledLoadMoreBtn>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
