import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './TasksFilter.css'

export default class TasksFilter extends Component {
  static defaultProps = {
    onFilterChange: () => {},
    filter: 'all',
  }

  static typeProps = {
    filter: PropTypes.string,
    onFilterChange: PropTypes.func,
  }

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ]

  render() {
    const { filter, onFilterChange } = this.props
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name
      const clazz = isActive ? 'selected' : ''
      return (
        <li className={clazz} key={name}>
          <button onClick={() => onFilterChange(name)}>{label}</button>
        </li>
      )
    })
    return <ul className="filters">{buttons}</ul>
  }
}
