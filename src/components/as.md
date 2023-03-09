import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

import TodoList from './components/todo-list.js'
import AppHeader from './components/app-header.js'
import AppFooter from './components/app-footer.js'

class App extends Component {
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
<AppHeader onAdd={this.onAdd} />

        <section className="main">
          <TodoList todoData={visibleItems} onDelete={this.onDelete} onToggleCompleted={this.onToggleCompleted} />
        </section>
        <AppFooter
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

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
