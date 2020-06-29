import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      image: {}
    }
  }

  render() {
    return (
      <div>
        Helllo World!!
      </div>
    );
  }
}

export default App;
