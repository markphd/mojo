import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import Sidebar from './Sidebar';
import Toggle from './Toggle';
import Card from './Card';
import './App.css';
import regl from 'regl';

export default class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      isSidebarOpen: false,
    };
  }
 
  toggleSidebar = () => {
    this.setState(state => ({ isSidebarOpen: !state.isSidebarOpen }));
  };

  componentDidMount(){
    const Regl = regl({
      container: this.elem
    });
    const draw = Regl({
      frag: `
        precision mediump float;
        uniform vec4 color;
        void main() {
          gl_FragColor = color;
        }`,
    
      vert: `
        precision mediump float;
        attribute vec2 position;
        uniform float angle;
        void main() {
          gl_Position = vec4(
            cos(angle) * position.x + sin(angle) * position.y,
            -sin(angle) * position.x + cos(angle) * position.y, 0, 1);
        }`,
    
      attributes: {
        position: [
          -1, 0,
          0, -1,
          1, 1]
      },
    
      uniforms: {
        color: Regl.prop('color'),
        angle: ({tick}) => 0.01 * tick
      },
    
      depth: {
        enable: false
      },
    
      count: 3
    })

    Regl.frame(({tick}) => {
      Regl.clear({
        color: [0, 0, 0, 1]
      })

      draw({
        color: [
          Math.sin(0.02 * (0.001 * tick)),
          Math.cos(0.02 * (0.02 * tick)),
          Math.sin(0.02 * (0.3 * tick)),
          1
        ]
      })
    })
  }

  render() {
    return (
      <div>
        <div className="App">
          <>
            <Toggle isOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar}/>
          </>
          <Sidebar isOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar}/>
          <Card size={100}/>
          <Card size={40}/>
          <Card size={500}/>
          <Card size={300}/>
          <div ref={(elem)=>this.elem=elem} />
        </div>        
      </div>
    )
  }
}