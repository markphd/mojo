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
    const that = this;
    const fromWidth = element.style.width;
    const toWidth = `${parseInt(element.style.width, 10) + 100}`;
    console.log(toWidth)

    if(!this.state.isPlaying === true && !this.state.isHoverOn === true){
      new mojs.Html({
        el: element,
        width: { fromWidth: toWidth, duration: 200, 
          onStart(){
            that.setState(state => ({      
              isPlaying: !state.isPlaying
            }))
            console.log(that.state.isPlaying, "hoverOn start")
          }, 
          onComplete(){
            that.setState(state => ({      
              isPlaying: !state.isPlaying,
              isHoverOn: !state.isHoverOn
            }))
            console.log(that.state.isPlaying, "hoverOn done")
          }, 
        },
        easing: 'quart.out',
      }).play();
    }
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
        <section className="card" ref={ref => (this.item = ref)}
          onMouseEnter={()=>this.HoverOn(this.item)}
          onMouseLeave={()=>this.HoverOff(this.item)}
        />
        <p>Heasdf asdf asdf asdf asdf asfd as dfas</p>
      </>
    )
  }
}
