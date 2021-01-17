import React, {Component} from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

class Todos extends Component {
  render(){
  return (
    <ul class="list-group">
    {this.props.todos.map((todo) => (
    <TodoItem todo={todo} key={todo.id} markComplete = {this.props.markComplete} delTodo = {this.props.delTodo}/>
  ))}
  </ul>
  );
  }
}

Todos.propTypes = {
    todos:PropTypes.array.isRequired
}
export default Todos;
