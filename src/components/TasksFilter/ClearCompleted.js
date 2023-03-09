import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ClearCompleted extends Component {
  static defaultProps = {
    onDelete: () => {},
    todoData: [],
  }

  static typeProps = {
    todoData: PropTypes.array,
    onDelete: PropTypes.func,
  }

  clearCompleted = () => {
    const { todoData, onDelete } = this.props

    const newArr = todoData.filter((el) => el.completed)

    return newArr.map((el) => onDelete(el.id))
  }

  render() {
    return (
      <button className="clear-completed" onClick={this.clearCompleted}>
        Clear completed
      </button>
    )
  }
}
