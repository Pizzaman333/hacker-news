import React, { Component } from 'react';
import '../styles/Button.scss';

class Button extends Component {
  render() {
    return (
      <button className="load-more" onClick={this.props.onClick}>
        Load More
      </button>
    );
  }
}

export default Button;