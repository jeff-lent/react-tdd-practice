import React, { Component } from 'react'
import TodosList from './TodosList'

class App extends Component {
  state = {
    todos: {'blah', 'blah', 'blah'};
  }
  render () {
    return (
      <div>App state</div>
    )
  }
}

export default App
