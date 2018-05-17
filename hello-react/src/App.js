import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Like from './like';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">hello React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <House />
        <Like />
      </div>
    );
  }
}

class House extends Component {
  render() {
    return (
      <div className="house">
        I am a house
        <Room />
        <Bathroom />
      </div>
    )
  }
}

class Room extends Component {
  handleClick() {
    console.log('我也被点击了')
  }
  render() {
    return (
      <div className="room" onClick={this.handleClick}>
        I'm a room
        <Man />
        <Dog />
        <Dog />
      </div>
    )
  }
}

class Bathroom extends Component {
  render() {
    return (
      <div className="bathroom">
        I'm a bathroom
      </div>
    )
  }
}

class Man extends Component {
  handleClick(e) {
    console.log(e.target.innerHTML)
    console.log('点我干嘛!')
    e.stopPropagation()
    e.preventDefault()
  }
  handleClickSound() {
    console.log('我发出了声音')
  }
  handleOpertea(e) {
    this.handleClick(e)
    this.handleClickSound()
  }
  className = {
    backgroundColor: 'red',
    fontSize: '32px'
  }
  render() {
    return (
      <div style={this.className} onClick={this.handleOpertea.bind(this)}>
        I'm a man
      </div>
    )
  }
}

class Dog extends Component {
  render() {
    return (
      <div className="dog">
        dog ~~
      </div>
    )
  }
}

export default App;
