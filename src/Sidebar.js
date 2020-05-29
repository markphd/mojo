import React, { Component, useState } from 'react'
import mojs from '@mojs/core';
import './Sidebar.css'

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOpen: false,
      posts: [],      
      comments: []    
    };

    this.Player = this.Player.bind(this);
  }

  Player(e){
    // const htmlComponent = 
    // });
    e.preventDefault();

    this.setState(state => ({      
      isToggleOpen: !state.isToggleOpen    
    }));

    if(!this.state.isToggleOpen === true){
      console.log("play")
      new mojs.Html({
        el: '#sidebar',
        x: { 0: 600, duration: 600, easing: 'quart.inout'}
      }).play()
    } else {
      new mojs.Html({
        el: '#sidebar',
        x: { 600: 0, duration: 600, easing: 'quart.inout'}
      }).play()
    }
    console.log(this.state.isToggleOpen)
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render() {
    return (
      <>
        <button onClick={(e)=>this.Player(e)}>Sidebar</button>
        <button onClick={(e)=>this.Player(e)}>Sidebar</button>
      </>
    )
  }
}
