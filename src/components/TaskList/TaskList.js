import React from 'react'
import PropTypes from 'prop-types'

import './TaskList.css'
import Task from '../Task/Task'

function TaskList({ todoData, onDelete, onToggleCompleted }) {
  const elements = todoData.map((item) => {
    const { id, ...itemProps } = item
    return (
      <Task {...itemProps} key={id} onDelete={() => onDelete(id)} onToggleCompleted={() => onToggleCompleted(id)} />
    )
  })

  return <ul className="todo-list">{elements}</ul>
}
TaskList.defaultProps = {
  todoData: [],
  onDelete: () => {},
  onToggleCompleted: () => {},
  completed: false,
}
TaskList.typeProps = {
  todoData: PropTypes.array,
  onDelete: PropTypes.func,
  onToggleCompleted: PropTypes.func,
  completed: PropTypes.bool,
}

export default TaskList
