import React, { Component } from 'react';

class Buttons extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'None'
    }
  }
  selectItem(selected) {
    this.setState({selected})
  }
  render() {
    let fn = child => React.cloneElement(child, {
      onClick: this.selectItem.bind(this, child.props.value)
    });
    let items = React.Children.map(this.props.children, fn);
    return (
      <div>
        <h2>You have selected: {this.state.selected}</h2>
        {items}
      </div>
    )
  }
}

export default Buttons;
