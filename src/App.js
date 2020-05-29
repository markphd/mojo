import React, { createElement } from 'react';
import logo, { ReactComponent } from './logo.svg';
import Sidebar from './Sidebar';
import Toggle from './Toggle';
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
    </div>
  );
}

export default App;
