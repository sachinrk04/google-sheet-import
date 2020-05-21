import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabletop from 'tabletop';

class App extends Component {
  constructor() {
    super()
    this.state = {
      datas: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1guVXhszJbbETwTd5uvxtO7pcYlDOQon1D-RVyWCRNwc',
      callback: googleData => {
        console.log('google sheet data --->', googleData)
        this.setState({
          datas: googleData
        })
      },
      simpleSheet: true
    })
  }

  // https://docs.google.com/spreadsheets/d/1guVXhszJbbETwTd5uvxtO7pcYlDOQon1D-RVyWCRNwc/edit?usp=sharing

  render() {
    console.log(this.state.datas)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React + Google Sheets Demo</h1>
        </header>
        <div className="usersDetails">
          {
            this.state.datas.length > 0 ?
              this.state.datas.map(obj => {
                return (
                  <div key={obj.id}>
                    <p>{obj.name}</p>
                    <p>{obj.contactno}</p>
                    <p>{obj.address}</p>
                  </div>
                )
              })
            : null
          }
        </div>
      </div>
    );
  };
};

export default App;
