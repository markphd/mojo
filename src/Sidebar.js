import React, { Component, useState } from 'react'
import mojs from '@mojs/core';
import './Sidebar.css'

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHoverOn: false,
      isPlaying: false
    };
    this.Player = this.Player.bind(this);
  }

  Player(e){
    e.preventDefault();
    const FILTER_PROPERTIES = {
      // list of custom props with defaults
      blurFilter: 20,
      opacityFilter: 25,
      // function that will be called on each frame, you are responsible to render properties
      draw (el, props) {
        el.style['filter'] = `blur(${props.blurFilter}px) opacity(${props.opacityFilter}%)`;
      }
    }
    if(this.props.isOpen === false){
      console.log("play")
      new mojs.Html({
        el: '#sidebar',
        x: { 0: 400, duration: 300, easing: 'quart.inout'}
      }).play()
    } else {
      new mojs.Html({
        customProperties: FILTER_PROPERTIES,
        el: '#sidebar',
        x: { 400: 0, duration: 300, easing: 'quart.inout'},
        blurFilter: {20: 200},
        opacityFilter: {100:0}
      }).play()
    }

    this.props.toggleSidebar();
    console.log("Toggle playing Sidebar JS...")
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }

  render() {
    return (
      <>
        <div id="sidebar">
          <p>Hello</p>
        </div>
        {this.props.isOpen === true && <section className="Exit" ref={ref => (this.item = ref)}
          onClick={(e)=>this.Player(e)}
        />}
      </>
    )
  }
}
