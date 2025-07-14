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
  const apiKey = '8554f45100dd7e68d770314bff79f9f0';
const endpoint = `https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=en&country=in&max=10`;


  return (
    <>
      <NavBar mode={this.state.mode} toggleMode={this.toggleMode} />
      <News 
        mode={this.state.mode} 
        pageSize={9} 
        apiUrl={endpoint}  // ✅ pass API URL as prop
      />
    </>
  );
}

}
