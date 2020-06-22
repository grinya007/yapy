import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { Table, Col } from 'react-materialize'

const TodoList = ({ todos, toggleTodo }) => (
  <Table><tbody>
    {todos.map(todo => (
      <tr key={todo.id}><td><Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} /></td></tr>
    ))}
  </tbody></Table>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
