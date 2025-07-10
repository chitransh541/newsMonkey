// App.js
import './App.css';
import NavBar from './component/NavBar';
import React, { Component } from 'react';
import News from './component/News';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'light', // light or dark
    };
  }

  toggleMode = () => {
    this.setState({
      mode: this.state.mode === 'light' ? 'dark' : 'light'
    }, () => {
      document.body.style.backgroundColor = this.state.mode === 'dark' ? '#121212' : 'white';
    });
  }

  render() {
    return (
      <>
        <NavBar mode={this.state.mode} toggleMode={this.toggleMode} />
        <News mode={this.state.mode} />

      </>
    );
  }
}
