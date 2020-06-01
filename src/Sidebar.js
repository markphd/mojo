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
    this.HoverOn = this.HoverOn.bind(this);
    this.HoverOff = this.HoverOff.bind(this);
  }

  HoverOn(element){
    console.log(this.state.isToggleOpen)
    console.log("Hello")
  }

  HoverOff(element){
    const that = this;
    if(!this.state.isPlaying === true && !this.state.isHoverOn === false){
      new mojs.Html({
        el: element,
        width: { 300: 200, duration: 200, 
          onStart(){
            that.setState(state => ({      
              isPlaying: !state.isPlaying
            }))
            console.log(that.state.isPlaying, "hoverOff start")
          }, 
          onComplete(){
            that.setState(state => ({      
              isPlaying: !state.isPlaying,
              isHoverOn: !state.isHoverOn
            }))
            console.log(that.state.isPlaying, "hoverOff done")
          }, 
        },
        easing: 'quart.out',
      }).play();
    }
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
        <section className="Exit" ref={ref => (this.item = ref)}
          onClick={(e)=>this.HoverOn(this.item)}
        />
        <p>Heasdf asdf asdf asdf asdf asfd as dfas</p>
      </>
    )
  }
}
