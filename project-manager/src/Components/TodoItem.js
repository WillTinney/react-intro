import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}

// Checks property type of todo is array and onDelete is a function
TodoItem.propTypes = {
  todo: React.PropTypes.object
}

export default TodoItem;
