import React, { Component } from 'react';
import { Oval } from 'react-loader-spinner';
import '../styles/Loader.scss';

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <Oval color="#00ffcc" height={80} width={80} />
      </div>
    );
  }
}

export default Loader;