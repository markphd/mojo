import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import Sidebar from './Sidebar';
import Toggle from './Toggle';
import Card from './Card';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      isShow: true,
    };
  }
 
  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };

  render() {
    return (
      <div>
        <div className="App">
          <>
            <Toggle isShowing={this.toggleShow}/>
          </>
          <Sidebar display={this.state.isShow}/>
          <Card size={100}/>
          <Card size={40}/>
          <Card size={500}/>
          <Card size={300}/>
        </div>        
      </div>
    )
  }
}