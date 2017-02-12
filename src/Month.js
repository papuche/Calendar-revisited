import React, { Component } from 'react';
import './Month.css';
import Week from './Week';


class Month extends Component {

  render() {
    return (
      <div className="Month-container">
        <span className="">
            {this.props.months[this.props.start.month].name}
        </span>
        <Week start={3}/>
      </div>
    );
  }
}

export default Month;
