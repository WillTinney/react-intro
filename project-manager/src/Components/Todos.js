import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return (
          <TodoItem key={todo.title} todo={todo} />
        );
      });
    }
    return (
      <div className="Todos">
      <h3>Todo List</h3>
      <p>Using Get request to jsonplaceholder API</p>
        {todoItems}
      </div>
    );
  }
}

// Checks property type of Todos is array and onDelete is a function
Todos.propTypes = {
  todos: React.PropTypes.array
}

export default Todos;
