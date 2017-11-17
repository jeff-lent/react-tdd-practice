import React from 'react'

const TodosList = (props) => {
  let theTodos = props.todos.map((todo) => <li key={index}>{todo}</li>)
  return (
    <div>
      <ul>{theTodoList}</ul>
    </div>
  )
}

export default TodosList
