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
    apod('')
      .then(data => {
        this.setState(state => {
          return {
            image: data
          }
        })
      })
  }

  leftBtn() {
    return <button>Previous Day</button>
  }

  rightBtn() {
    return <button>Next Day</button>
  }

  render() {
    return (
      <div>
        <p>{this.state.image.copyright}</p>
        <p>{this.state.image.title}</p>
        <p>{this.state.image.date}</p>
        <this.leftBtn />
        <img src={this.state.image.url} alt='apod' ></img>
        <this.rightBtn />
        <p>{this.state.image.explanation}</p>
      </div>
    );
  }
}

export default App;
