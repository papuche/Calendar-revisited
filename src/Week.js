import React, { Component } from 'react';
import './Week.css';
import Day from './Day';

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.nbOfDays; i++) {
    items.push(props.children(i));
  }
  return <div className="Week-container">{items}</div>;
}

class Week extends Component {

  render() {
    return (
      <Repeat nbOfDays={7}>
          {(index) => <Day day={this.props.start+index} key={index}/>}
      </Repeat>
    );
  }
}

export default Week;
