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

  leftBtn = () => {
    return <button>Previous Day</button>
  }

  rightBtn = () => {
    return <button>Next Day</button>
  }

  imageUI_1 = () => {
    return (
      <>
        <p>{this.state.image.copyright}</p>
        <p>{this.state.image.title}</p>
        <p>{this.state.image.date}</p>
      </>
    )
  }

  imageUI_2 = () => {
    return (
      <>
        <this.leftBtn />
        <img src={this.state.image.url} alt='apod' ></img>
        <this.rightBtn />
      </>
    )
  }

  explanationUI = () => {
    return <p>{this.state.image.explanation}</p>
  }
  
  render() {
    return (
      <div>
        <this.imageUI_1 />
        <this.imageUI_2 />
        <this.explanationUI />
      </div>
    );
  }
}

export default App;
