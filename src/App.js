import React, { Component } from 'react';
import { apod } from './requests'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      image: {},
      loading: true
    }
  }

  componentDidMount() {
    apod('')
      .then(data => {
        this.setState(state => {
          return {
            image: data,
            loading: false
          }
        })
      })
  }

  previousImage = () => {
    let currentDate = new Date(this.state.image.date)
    currentDate.setDate(currentDate.getDate() - 1)
    apod(currentDate.toISOString().slice(0,10))
    .then(data => {
      this.setState(state => {
        return {
          image: data
        }
      })
    })
  }

  nextImage = () => {
    let currentDate = new Date(this.state.image.date)
    currentDate.setDate(currentDate.getDate() + 1)
    apod(currentDate.toISOString().slice(0,10))
    .then(data => {
      this.setState(state => {
        return {
          image: data
        }
      })
    })
  }

  leftBtn = () => {
    return <button onClick={this.previousImage} >Previous Day</button>
  }

  rightBtn = () => {
    return <button onClick={this.nextImage} >Next Day</button>
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
        {
          this.state.image.date === new Date().toISOString().slice(0,10) ? '' : <this.rightBtn />
        }
      </>
    )
  }

  explanationUI = () => {
    return <p>{this.state.image.explanation}</p>
  }

  render() {
    if (this.state.loading) {
      return (
          <div>
            <p></p>
            <div className="ui active dimmer">
              <div className="ui loader"></div>
            </div>
          </div>
      )
    }
    return (
      <div>
        {
        }
        <this.imageUI_1 />
        <this.imageUI_2 />
        <this.explanationUI />
      </div>
    );
  }
}

export default App;
