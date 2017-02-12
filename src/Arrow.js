import React, { Component } from 'react';
import './Arrow.css';


class Arrow extends Component {

  render() {
    return (
      <div className="Arrow-container">
        <button onClick={() => this.props.onClick()}>{this.props.action === -1 ? "<" : ">"}</button>
      </div>
    );
  }
}

export default Arrow;