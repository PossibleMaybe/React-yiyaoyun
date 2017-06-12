import React, { Component } from 'react';

import './App.css';


import Header from './Components/Header';
import Scroll from './Components/scroll';
import TabBar from './Components/tabBar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header title="医药云"/>
          <div className="body">
              <Scroll/>
          </div>
          <div id="footer">
            <TabBar />
          </div>
      </div>

    );
  }
}

export default App;
