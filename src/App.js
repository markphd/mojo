import React, { createElement } from 'react';
import logo, { ReactComponent } from './logo.svg';
import Sidebar from './Sidebar';
import Toggle from './Toggle';
import Card from './Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <>
        <Toggle/>
      </>
      <div id="sidebar">
        <p>Hello</p>
        <Sidebar/>
      </div>
      <Card size={100}/>
      <Card size={40}/>
      <Card size={500}/>
      <Card size={300}/>
    </div>
  );
}

export default App;
