import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Button>I <Heart /> React</Button>
      </div>
    );
  }
}

const Button = (props) => <button>{props.children}</button>

class Heart extends Component {
  render() {
    return <span>&hearts;</span>
  }
}
export default App;
