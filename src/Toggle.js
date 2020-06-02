import React, { Component, useState } from 'react'
import mojs from '@mojs/core';
import './Toggle.css';

export default class Toggle extends Component {
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
    e.preventDefault();

    if(this.props.isOpen === false){
      console.log("play")
      new mojs.Html({
        el: '#sidebar',
        x: { 0: 400, duration: 600, easing: 'quart.inout'}
      }).play()
    } else {
      new mojs.Html({
        el: '#sidebar',
        x: { 400: 0, duration: 600, easing: 'quart.inout'}
      }).play()
    }

    this.props.toggleSidebar();
    console.log("Toggle playing...")
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render() {
    return (
      <>
        <button className="Toggle" onClick={(e)=>this.Player(e)}>{ this.props.isOpen ? 'X' : 'MENU'}</button>
      </>
    )
  }
}
