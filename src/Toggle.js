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
    const FILTER_PROPERTIES = {
      // list of custom props with defaults
      blurFilter: 20,
      opacityFilter: 100,
      // function that will be called on each frame, you are responsible to render properties
      draw (el, props) {
        el.style['filter'] = `blur(${props.blurFilter}px) opacity(${props.opacityFilter}%)`;
      }
    }
    if(this.props.isOpen === false){
      console.log("play")
      new mojs.Html({
        customProperties: FILTER_PROPERTIES,
        el: '#sidebar',
        x: { 0: 400, duration: 300, easing: 'quart.inout'},
        blurFilter: {20: 0, delay: 10, easing: 'quart.inout'},
        opacityFilter: {0:100, delay: 10, easing: 'quart.inout'}
      }).play()
    } else {
      new mojs.Html({
        customProperties: FILTER_PROPERTIES,
        el: '#sidebar',
        x: { 400: 0, duration: 300, easing: 'quart.inout'},
        blurFilter: {0: 20, delay: 10, easing: 'quart.inout'},
        opacityFilter: {100:0, delay: 10, easing: 'quart.inout'}
      }).play()
    }

    this.props.toggleSidebar();
    console.log("Toggle playing Toggle js...")
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
