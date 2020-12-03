import React, { Component } from 'react';
import './App.css';

import ChoroplethMap from './components/ChoroplethMap';

class App extends Component {
  state = {
  //   data: [
  //     ["MB", 75], ["SK", 43], ["AB", 50], ["BC", 88], ["NU", 21], ["NT", 43],
  //     ["YT", 21], ["ON", 19], ["QC", 60], ["NB", 4], ["NS", 44], ["NF", 38],
  //     ["PE", 67]],
  // }
  data: [
    ["IND", 75], ["CHN", 43]
  ],
}
  render() {
    return (
      <div style={{
        height:"100vh",
        width: "100vw"
      }}>
        <ChoroplethMap data={this.state.data}/>
      </div>
    );
  }
}

export default App;
