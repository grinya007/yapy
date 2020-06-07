import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './todosSlice'
import { TextInput, Button, Row, Col } from 'react-materialize'

const mapDispatch = { addTodo }

const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('')

  const onChange = e => setTodoText(e.target.value)

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        if (!todoText.trim()) {
          return
        }
        addTodo(todoText)
        setTodoText('')
      }}
    >
      <TextInput label='What to do?' value={todoText} onChange={onChange} s={12} />
      <Button type="submit" className='input-field' style={{ float: 'right', marginRight: '4px' }}>Add Todo</Button>
    </form>
  )
}

export default connect(
  null,
  mapDispatch
)(AddTodo)
