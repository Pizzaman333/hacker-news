import React, { Component } from 'react';
import '../styles/Searchbar.scss';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputValue.trim()) {
      this.props.onSubmit(this.state.inputValue.trim());
      this.setState({ inputValue: '' });
    }
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search Hacker News articles"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;