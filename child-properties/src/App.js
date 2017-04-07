import React, { Component } from 'react';
import Buttons from './Components/Buttons';
import './App.css';

class App extends Component {
  render() {
    return (
      <Buttons>
        <button value="A">A</button>
        <button value="B">B</button>
        <button value="C">C</button>
      </Buttons>
    );
  }
};

export default App;
