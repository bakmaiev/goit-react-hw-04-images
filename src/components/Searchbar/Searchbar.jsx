import React, { Component } from 'react';
import { StyledSearchbar } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';
export class Searchbar extends Component {
  state = {
    imagesName: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.imagesName.trim() === '') {
      toast.error('Enter something!');
      return;
    }

    this.props.onSubmit(this.state.imagesName);
    this.setState({ imagesName: '' });
  };

  handleChangeName = e => {
    this.setState({ imagesName: e.currentTarget.value });
  };

  render() {
    return (
      <StyledSearchbar>
        <form className="form" onSubmit={this.handleSubmit}>
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
            value={this.state.imagesName}
            onChange={this.handleChangeName}
          />
        </form>
      </StyledSearchbar>
    );
  }
}
