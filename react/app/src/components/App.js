import React from 'react'
import Footer from 'features/filters/Footer'
import AddTodo from 'features/todos/AddTodo'
import VisibleTodoList from 'features/todos/VisibleTodoList'
import { Row } from 'react-materialize'

const App = () => (
  <div>
    <Row><AddTodo /></Row>
    <Row><Footer /></Row>
    <Row><VisibleTodoList /></Row>
  </div>
)

export default App
