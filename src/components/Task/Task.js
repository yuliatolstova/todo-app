import React from 'react'
import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import './Task.css'

function Task({ label, onDelete, onToggleCompleted, completed }) {
  const time = formatDistanceToNow(new Date())
  let className = ''
  return (
    <li className={completed ? (className += 'completed') : className}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onToggleCompleted} />
        <label>
          <span className="description">{label}</span>
          <span className="created">{time}</span>
        </label>
        <button className="icon icon-edit" />
        <button className="icon icon-destroy" onClick={onDelete} />
      </div>
    </li>
  )
}
Task.defaultProps = {
  label: '',
  onDelete: () => {},
  onToggleCompleted: () => {},
  completed: false,
}
Task.typeProps = {
  label: PropTypes.string,
  onDelete: PropTypes.func,
  onToggleCompleted: PropTypes.func,
  completed: PropTypes.bool,
}
export default Task
