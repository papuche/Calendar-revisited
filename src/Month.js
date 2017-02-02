import React, { Component } from 'react';
import './Month.css';

class Month extends Component {

  render() {
    return (
      <div className="Month">
        <span className="">
          {this.props.month}
        </span>
      </div>
    );
  }
}

export default Month;
