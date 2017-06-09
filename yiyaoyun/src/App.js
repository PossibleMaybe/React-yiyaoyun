import React, { Component } from 'react';

import './App.css';


import Header from './Components/Header';
import Carousel1 from './Components/Carousel';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="医药云"/>
        <Carousel1 />
      </div>

    );
  }
}

export default App;
