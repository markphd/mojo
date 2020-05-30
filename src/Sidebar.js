import React, { Component, useState } from 'react'
import mojs from '@mojs/core';
import _ from "lodash";
import './Sidebar.css'

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOpen: false,
      isHoverOn: false,
      posts: [],      
      comments: []    
    };
    this.Player = this.Player.bind(this);
    this.HoverOn = this.HoverOn.bind(this);
    this.HoverOff = this.HoverOff.bind(this);
    
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

  HoverOn(element){
    
    _.throttle(()=>{
      this.setState(state => ({      
        onHover: !state.isHoverOn
      }));
    }, 200);

    console.log("onHover")
      new mojs.Html({
        el: element,
        width: { 200: 300 },
        easing: 'quart.out',
      }).play();
  }

  HoverOff(element){
    
    _.throttle(()=>{
      this.setState(state => ({      
        onHover: !state.isHoverOn
      }));
    }, 200);

    console.log("offHover")
    new mojs.Html({
      el: element,
      width: { 300: 200 },
      easing: 'quart.out',
    }).play();
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
        <section className="card" ref={ref => (this.item = ref)}
          onMouseEnter={_.debounce(()=>this.HoverOn(this.item))}
          onMouseLeave={_.debounce(()=>this.HoverOff(this.item))}
        />
        <p>Heasdf asdf asdf asdf asdf asfd as dfas</p>
        <section className="card" ref={ref => (this.item = ref)}
          onMouseEnter={_.debounce(()=>this.HoverOn(this.item))}
          onMouseLeave={_.debounce(()=>this.HoverOff(this.item))}
        />
        <p>Heasdf asdf asdf asdf asdf asfd as dfas</p>
      </>
    )
  }
}
