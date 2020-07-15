import React from 'react';
import Title from './Title.js';

// import React, { Component } from 'react';
// class App extends Component {};
class App extends React.Component { 
  render() {
    return(
      <div>
        <h1 className="textCenter">Hello DDA209</h1>
        <Title1 />
        <Title />
        <Title studentName="DDA" age="45" color="gold" />
        <Title studentName="Cac" age="2" color="brown" />
        <Title studentName="Temp" age="18" color="grey" />
      </div>
    );
  }
}

class Title1 extends React.Component {
  render() {
    return(
      <h1 className="text-center">Title is DDA</h1>
    )
  }
}
export default App;