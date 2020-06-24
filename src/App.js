import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  // For events and setState on getCountryData function
  constructor(props) {
    super(props);
    this.getCountryData = this.getCountryData.bind(this);
  }

  state = {
    countries: [],
    results: 0
  }


  async componentDidMount() {
    // getting the api info and storing to json
    const url = "https://api.covid19api.com/summary";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data, 'lookinf for something');
    

    //Mapping through the list of countries
    const countries = data.Countries.map((value) => {
      return value.Country
    })

    this.setState({
      countries
    })

    console.log(countries);
    
  }

  async getCountryData(e) {
    const url = `https://api.covid19api.com/total/dayone/country/${e.target.value}`;
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      results: data[data.length - 1]
    })
  }


  // displays countries in dropdown
  renderCountryOptions() {
    return this.state.countries.map((country, i) => {
      return <option key={i}>{country}</option>
    })
  }


  render() {
    return ( 
      <div className="app">  
          <div className="menu">
            <select onChange={this.getCountryData}>
              <option>Choose country</option>
              {this.renderCountryOptions()}
            </select>
          </div>

          <header className="header">
            <h1>{this.state.results.Country}</h1>
            <p>{this.state.results.Date}</p>
          </header>
            
          <section className="totalConfirmed">
            <h3>CONFIRMED CASES</h3>
            <div className="bigNumber one">{this.state.results.Confirmed}</div>
          </section>

          <section className="totalRecovered">
            <h3>RECOVERED CASES</h3>
            <div className="bigNumber two"> {this.state.results.Recovered}</div>
          </section>

          <section className="totalDeaths">
            <h3>DEATHS</h3>
            <div className="bigNumber three"> {this.state.results.Deaths}</div>
          </section>
      </div>
    );
  }
}

export default App;