import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Footer.css'
import TasksFilter from '../TasksFilter/TasksFilter'

export default class Footer extends Component {
  static defaultProps = {
    onDelete: () => {},
    onFilterChange: () => {},
    todoData: [],
    todoCount: 0,
    filter: 'all',
  }

  static typeProps = {
    onDelete: PropTypes.func,
    onFilterChange: PropTypes.func,
    todoData: PropTypes.array,
    todoCount: PropTypes.number,
    filter: PropTypes.string,
  }

  clearCompleted = () => {
    const { todoData, onDelete } = this.props

    const newArr = todoData.filter((el) => el.completed)

    return newArr.map((el) => onDelete(el.id))
  }

  render() {
    const { todoCount, filter, onFilterChange } = this.props
    return (
      <footer className="footer">
        <span>{todoCount} items left</span>
        <TasksFilter filter={filter} onFilterChange={onFilterChange} />
        <button className="clear-completed" onClick={this.clearCompleted}>
          Clear completed
        </button>
      </footer>
    )
  }
}
