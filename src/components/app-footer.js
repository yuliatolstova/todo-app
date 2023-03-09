import React from 'react'
import PropTypes from 'prop-types'

import ClearCompleted from './clear-completed'
import TodoFilter from './todo-filter'

const AppFooter = ({ todoData, todoCount, onDelete, filter, onFilterChange }) => {
  return (
    <footer className="footer">
      <span>{todoCount} items left</span>
      <TodoFilter filter={filter} onFilterChange={onFilterChange} />
      <ClearCompleted todoData={todoData} onDelete={onDelete} />
    </footer>
  )
}
AppFooter.defaultProps = {
  onDelete: () => {},
  onFilterChange: () => {},
  todoData: [],
  todoCount: 0,
  filter: 'all',
}
AppFooter.typeProps = {
  onDelete: PropTypes.func,
  onFilterChange: PropTypes.func,
  todoData: PropTypes.array,
  todoCount: PropTypes.number,
  filter: PropTypes.string,
}
export default AppFooter
