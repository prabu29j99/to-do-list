import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.done? 'line-through' : 'none',
        }
    } 
    render() {
        const { id,title}=this.props.todo;
        const isDisabled = this.props.todo.done?"disabled":"";
        return (
            <div className={"list-group-item " + isDisabled}  style={this.getStyle()}>
                <input type="checkbox" defaultChecked={this.props.todo.done} onChange={this.props.markComplete.bind(this,id)} />
                <text className='ml-1'>{title}</text> 
                <button className="btn-sm btn-outline-danger float-right" onClick = {this.props.delTodo.bind(this,id)}>X</button>
            </div>
            
        )
    }
}

TodoItem.propTypes = {
    todo:PropTypes.object.isRequired
}
export default TodoItem
