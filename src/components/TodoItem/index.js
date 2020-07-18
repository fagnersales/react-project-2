import React, { Component } from 'react'
import propTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1 px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        return (
            /* Runs a method to get a inline style */
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox"/> {' '}
                        {this.props.todo.title}
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
                    todo: propTypes.object.isRequired
}

export default TodoItem
