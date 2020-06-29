import React, { Component } from 'react';
import { apod } from './requests'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      image: {}
    }
  }

  componentDidMount() {
    apod()
      .then(data => {
        this.setState(state => {
          return {
            image: data
          }
        })
      })
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
