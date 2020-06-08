import React from 'react';
import { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    loading: true,
    person: null,
    list: null,
    answer: null
  }

  async componentDidMount() {
    const api = "https://api.covid19api.com/summary";
    const response = await fetch(api);
    const data = await response.json();
    this.setState({person: data.Countries[154], loading: false})
    console.log(data.Countries[154])

    for (let i = 0; i < data.Countries.length; i++) {
        let covidCountries = data.Countries[i].Country
        console.log(covidCountries)
        this.setState({list: covidCountries, loading: false})  
    }
  }

  render() {
    return (
      <div className="sections">
       {this.state.loading || !this.state.person ? (
        <div>People Die Bro. Shm.</div>    
      ) : (
        <div className="conditionTrue">

        <select className="menu">
          <option>{this.state.person.Country}</option>
          <option>{this.state.sum}</option>
          {this.state.covidCountries}
        </select>

        <header className="header">
          <h1>{this.state.person.Country}</h1>
          <p>{this.state.person.Date}</p>
        </header>
          

        <section className="totalConfirmed">
          <h3>TOTAL CONFIRMED</h3>
          <div className="bigNumber one">{this.state.person.TotalConfirmed}</div>
        </section>

        <section className="totalRecovered">
          <h3>TOTAL RECOVERED</h3>
          <div className="bigNumber two"> {this.state.person.TotalRecovered}</div>
        </section>

        <section className="totalDeaths">
          <h3>TOTAL DEATHS</h3>
          <div className="bigNumber three"> {this.state.person.TotalDeaths}</div>
        </section>
          
        <section className="newConfirmed">
          <h5>NEW CONFIRMED</h5>
          <div className="smallNumber one">{this.state.person.NewConfirmed}</div>
        </section>

        <section className="newRecovered">
          <h5>NEW RECOVERED</h5>
          <div className="smallNumber two">{this.state.person.NewRecovered}</div>
        </section>

        <section className="newDeaths">
          <h5>NEW DEATHS</h5>
          <div className="smallNumber three">{this.state.person.NewDeaths}</div>
        </section>
          
        </div>
      )}
      </div>
    );
  }
}

export default App;