import React, { Component } from 'react'

import TaskList from '../TaskList/TaskList.js'
import NewTaskForm from '../NewTaskForm/NewTaskForm.js'
import Footer from '../Footer/Footer.js'
import './App.css'
export default class App extends Component {
  maxId = 100

  createTodoItem = (label) => ({ label, completed: false, id: this.maxId++ })

  state = {
    todoData: [],
    filter: 'all',
  }

  onDelete = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      return {
        todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)],
      }
    })
  }

  onAdd = (label) => {
    const newItem = this.createTodoItem(label)
    this.setState(({ todoData }) => ({
      todoData: [...todoData, newItem],
    }))
  }

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const oldItem = todoData[idx]
      const newItem = { ...oldItem, completed: !oldItem.completed }
      return {
        todoData: [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)],
      }
    })
  }

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter((item) => !item.completed)
      case 'completed':
        return items.filter((item) => item.completed)
      default:
        return items
    }
  }

  render() {
    const { todoData, filter } = this.state
    const visibleItems = this.filter(todoData, filter)
    const todoCount = todoData.filter((el) => !el.completed).length
    return (
      <section className="todoapp">
        <NewTaskForm onAdd={this.onAdd} />

        <section className="main">
          <TaskList todoData={visibleItems} onDelete={this.onDelete} onToggleCompleted={this.onToggleCompleted} />
        </section>
        <Footer
          todoCount={todoCount}
          onDelete={this.onDelete}
          todoData={todoData}
          filter={filter}
          onFilterChange={this.onFilterChange}
        />
      </section>
    )
  }
}
