import React, { useState } from 'react';
import { StyledSearchbar } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';
export const Searchbar = ({ onSubmit }) => {
  const [imagesName, setImagesName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (imagesName.trim() === '') {
      toast.error('Enter something!');
      return;
    }

    onSubmit(imagesName);
    setImagesName('');
  };

  const handleChangeName = e => {
    setImagesName(e.currentTarget.value);
  };

  return (
    <StyledSearchbar>
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
          <AiOutlineSearch className="icon" />
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={imagesName}
          onChange={handleChangeName}
        />
      </form>
    </StyledSearchbar>
  );
};
