import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from '@material-ui/core';

function App() {
   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Grid Layout</h1>
      </header>
    
      <div class="wrapper">
        <div class="box1">One</div>
        <div class="box2">Two</div>
        <div class="box3">Three</div>
        <div class="box4">Four</div>
        <div class="box5">Five</div>
        <div class="box6">Six</div>
        <div class="box7">Seven</div>
        <div class="box8">Eight</div>
        <div class="box9">Nine</div>
      </div>
    </div>
    );
}

export default App;
