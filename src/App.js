import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Horatio</h2>
        </div>
        <p className="App-intro">

            There are more things in heaven and earth, Horatio,<br/>
            Than are dreamt of in your philosophy.<br/>
           <cite>Hamlet Act 1, scene 5, 159–167</cite>
        </p>
      </div>
    );
  }
}

export default App;
