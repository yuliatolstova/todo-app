import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AppHeader extends Component {
  static defaultProps = {
    onAdd: () => {},
  }

  static typeProps = {
    onAdd: PropTypes.func,
  }

  state = {
    label: '',
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onAdd(this.state.label)
    this.setState({
      label: '',
    })
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={this.onLabelChange}
            value={this.state.label}
          />
        </form>
      </header>
    )
  }
}
