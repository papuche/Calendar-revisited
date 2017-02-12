import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Month from './Month';
import Arrow from './Arrow';


class App extends Component {
  constructor() {
    super();
    this.state = {
      month:0,
    };
  }

  months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];

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
            month: this.updateMonth(this.state.month,-1)
          })}/>
        <Month className="month_box"
          months={this.months} 
          month={this.state.month}/> 
        <Arrow className="arrow_box"
          action = {1}
          onClick={() =>   this.setState({
            month: this.updateMonth(this.state.month,1)
          })}/>
      </div>
    );
  }
}

export default App;
