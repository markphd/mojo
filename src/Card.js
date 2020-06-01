import React, { Component, useState } from 'react'
import mojs from '@mojs/core';
import './Card.css'

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHoverOn: false,
      isPlaying: false
    };
    this.HoverOn = this.HoverOn.bind(this);
    this.HoverOff = this.HoverOff.bind(this);

  }

  HoverOn(element, origin){
    const that = this;
    // const fromWidth = element.style.width;
    // const toWidth = `${parseInt(element.style.width, 10) + 100}`;
    console.log(typeof origin)
    // let fromWidth = parseInt(element.style.width.split('px')[0]);
    const shape = new mojs.Html({
      el: element,
      scaleX: { 1: 2, duration: 300, 
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
    })

    if(!this.state.isPlaying === true && !this.state.isHoverOn === true){
      shape.play();
    } else {
      shape.replay();
    }
  }

  HoverOff(element, size){
    const that = this;
    const shape = new mojs.Html({
      el: element,
      scaleX: { 2: 1, duration: 300, 
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
    })
    if(!this.state.isPlaying === true && !this.state.isHoverOn === false){
      shape.play();
    } else {
      shape.replay();
    }
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }

  render() {
    return (
      <>
        <section className="Card" style={{width:`${this.props.size}px`}} ref={ref => (this.item = ref)}
          onMouseEnter={()=>this.HoverOn(this.item, this.props.size)}
          onMouseLeave={()=>this.HoverOff(this.item, this.props.size)}
        >
        </section>
      </>
    )
  }
}
