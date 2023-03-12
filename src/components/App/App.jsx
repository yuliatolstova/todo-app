import React, { Component } from 'react'

import TaskList from '../TaskList/TaskList'
import NewTaskForm from '../NewTaskForm/NewTaskForm'
import Footer from '../Footer/Footer'
import './App.css'
export default class App extends Component {
  maxId = 100

  createTodoItem = (label) => ({ label, completed: false, edit: false, id: this.maxId++ })

  state = {
    todoData: [],
    filter: 'all',
  }
  onEdit = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((item) => item.id === id)
      const oldItem = todoData[idx]
      const newItem = { ...oldItem, edit: !oldItem.edit }
      let newTodoData = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)]
      return {
        todoData: newTodoData,
      }
    })
  }
  onSubmitEdit = (event, id) => {
    event.preventDefault()
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((item) => item.id === id)
      const oldItem = todoData[idx]
      const newItem = { ...oldItem, edit: !oldItem.edit, label: event.target[0].value }
      let newTodoData = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)]
      return {
        todoData: newTodoData,
      }
    })
  }
  onDelete = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((item) => item.id === id)
      let newTodoData = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
      return {
        todoData: newTodoData,
      }
    })
  }

  onAdd = (label) => {
    const newItem = this.createTodoItem(label)
    this.setState(({ todoData }) => {
      let newTodoData = [...todoData, newItem]
      return {
        todoData: newTodoData,
      }
    })
  }

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((item) => item.id === id)
      const oldItem = todoData[idx]
      const newItem = { ...oldItem, completed: !oldItem.completed }
      let newTodoData = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)]
      return {
        todoData: newTodoData,
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
    const todoCount = todoData.filter((item) => !item.completed).length
    return (
      <section className="todoapp">
        <NewTaskForm onAdd={this.onAdd} />

        <section className="main">
          <TaskList
            todoData={visibleItems}
            onDelete={this.onDelete}
            onToggleCompleted={this.onToggleCompleted}
            onEdit={this.onEdit}
            onSubmitEdit={this.onSubmitEdit}
          />
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
