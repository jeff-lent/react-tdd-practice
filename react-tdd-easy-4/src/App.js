import React, { Component } from 'react'
import BandList from './BandList'

class App extends Component {
  state = {
    bands: ['one', 'two', 'three']
  }
  render () {
    return (
      <div><BandList bands={this.state.bands}/></div>
    )
  }
}

export default App
