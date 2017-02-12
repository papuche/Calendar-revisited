import React, { Component } from 'react';
import './Arrow.css';


class Arrow extends Component {

  render() {
    return (
        <button className=""  onClick={() => this.props.onClick()}>{this.props.action === -1 ? "<" : ">"}</button>
    );
  }
}

export default Arrow;