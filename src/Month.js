import React, { Component } from 'react';
import './Month.css';


class Month extends Component {

  render() {
    return (
      <div className="">
        <div className="">
          <span className="">
            {this.props.months[this.props.month]}
          </span>
        </div>
      </div>
    );
  }
}

export default Month;
