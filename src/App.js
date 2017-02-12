import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Month from './Month';
import Arrow from './Arrow';
import moment from 'moment';


let now = moment().format('LLLL');

class App extends Component {
  constructor() {
    console.log("day: ",moment().date());
    console.log("weekday: ",moment().format('dddd'));
    console.log("month: ",moment().month());
    console.log("year: ",moment().year());
    console.log("start week",moment().startOf('week'))
    super();
    this.state = {
      start:{
        day: 1,
        month: 1,
        weekDay:2
      }
    };
  }

  months = [{name:"Janvier", nbOfDays:31}, {name:"Février", nbOfDays:28}, {name:"Mars", nbOfDays:31}, {name:"Avril", nbOfDays:30}, {name:"Mai", nbOfDays:31}, {name:"Juin", nbOfDays:30}, {name:"Juillet", nbOfDays:31}, {name:"Août", nbOfDays:31}, {name:"Septembre", nbOfDays:30}, {name:"Octobre", nbOfDays:31}, {name:"Novembre", nbOfDays:30}, {name:"Décembre", nbOfDays:31}];

  nextMonth(nb) {
    return nb === this.months.length-1 ? 0 : nb+1;
  }

  previousMonth(nb) {
    return nb === 0 ? this.months.length-1 : nb-1;
  }

  updateMonth(nb,sign) {
    return sign === 1 ? this.nextMonth(nb):this.previousMonth(nb);
  }

  render() {
    return (
      <div className="App_container">
        <Arrow className="arrow_box"
          action = {-1}
          onClick={() => this.setState({
            month: this.updateMonth(this.state.start.month,-1)
          })}/>
        <Month className="month_box"
          months={this.months} 
          start={this.state.start}/> 
        <Arrow className="arrow_box"
          action = {1}
          onClick={() =>   this.setState({
            month: this.updateMonth(this.state.start.month,1)
          })}/>
      </div>
    );
  }
}

export default App;
