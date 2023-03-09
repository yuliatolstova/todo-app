import React from 'react'
import PropTypes from 'prop-types'

import TodoListItem from './todo-list-item'

function TodoList({ todoData, onDelete, onToggleCompleted }) {
  const elements = todoData.map((item) => {
    const { id, ...itemProps } = item
    return (
      <TodoListItem
        {...itemProps}
        key={id}
        onDelete={() => onDelete(id)}
        onToggleCompleted={() => onToggleCompleted(id)}
      />
    )
  })

  return <ul className="todo-list">{elements}</ul>
}
TodoList.defaultProps = {
  todoData: [],
  onDelete: () => {},
  onToggleCompleted: () => {},
  completed: false,
}
TodoList.typeProps = {
  todoData: PropTypes.array,
  onDelete: PropTypes.func,
  onToggleCompleted: PropTypes.func,
  completed: PropTypes.bool,
}

export default TodoList
