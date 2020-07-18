import React, { Component } from 'react';
import TodoItem from '../TodoItem'
import propTypes from 'prop-types'

class Todos extends Component {
    render() {
        return this.props.todos.map(todoData => (
            <TodoItem key={todoData.id} 
            todo={todoData} 
            markComplete={this.props.markComplete} 
            delTodo={this.props.delTodo}/>
        ))
    }
}

// PropTypes
Todos.propTypes = {
    todos: propTypes.array.isRequired,
    markComplete: propTypes.func.isRequired,
    delTodo: propTypes.func.isRequired
}

export default Todos