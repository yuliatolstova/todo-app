import React, { Component } from 'react'
import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import './Task.css'

export default class Task extends Component {
  static defaultProps = {
    label: '',
    onDelete: () => {},
    onToggleCompleted: () => {},
    completed: false,
  }
  static typeProps = {
    label: PropTypes.string,
    onDelete: PropTypes.func,
    onToggleCompleted: PropTypes.func,
    completed: PropTypes.bool,
  }
  state = {
    value: this.props.label,
  }
  setTask = (event) => {
    this.setState({ value: event.target.value })
  }
  render() {
    const { label, onDelete, onToggleCompleted, completed, edit, onEdit, onSubmitEdit } = this.props
    const { value, setTask } = this.state
    const time = formatDistanceToNow(new Date())
    let className = ''
    return edit ? (
      <li className="editing">
        <form onSubmit={onSubmitEdit}>
          <input type="text" defaultValue={value} onChange={setTask} />
        </form>
      </li>
    ) : (
      <li className={completed ? (className += 'completed') : className}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onToggleCompleted} />
          <label>
            <span className="description">{label}</span>
            <span className="created">{time}</span>
          </label>
          <button className="icon icon-edit" onClick={onEdit} />
          <button className="icon icon-destroy" onClick={onDelete} />
        </div>
      </li>
    )
  }
}
