import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Month from './Month';

const months = ["Janvier","Février","Mars","Avril"];

const month = 0;

function updateMonth(nb,sign) {
  if(sign !== 1) {sign = -1;}
  return nb += sign;
}

function Arrow(props) {
  return (
    <span className="Calendar_arrow"  onClick={() => props.onClick()}>></span>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      month:0,
    };
  }
  render() {
    return (
      <div className="App">
        <div className="Calendar_title">
          <Arrow onClick={() =>   this.setState({
            month: updateMonth(this.state.month,1)
          })}/>
          <Month
            month={months[this.state.month]}/>
          <Arrow/>
        </div>
      </div>
    );
  }
}

export default App;
