import React, { Component } from 'react';
import TodoItem from '../TodoItem'
import propTypes from 'prop-types'

class Todos extends Component {
    render() {
        return this.props.todos.map(todoData => <TodoItem key={todoData.id} todo={todoData} />)
    }
}

// PropTypes
Todos.propTypes = {
    todos: propTypes.array.isRequired
}

export default Todos