import React, { Component } from 'react';
import './Day.css';


class Day extends Component {

  render() {
    return (
      <div className="Day-container">
        <div className="square">
            {this.props.day}
        </div>
      </div>
    );
  }
}

export default Day;