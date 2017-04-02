import React from 'react';

// Main class component
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'State text',
      cat: 0
    }
  }
  updateText(e){
    this.setState({txt: e.target.value})
  }
  render(){
    let txt = this.state.txt
    return (
      <div>
        <h1>{txt} - {this.state.cat}</h1>
        <Widget update={this.updateText.bind(this)}/>
      </div>
    )
  }
}

// Stateless react component
const Widget = (props) => <input type="text" onChange={props.update} />

// PropTypes for correct property types
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

export default App;
