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
