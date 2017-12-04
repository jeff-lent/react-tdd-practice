import React, { Component } from 'react'

class App extends Component {
  state = {
    bands: ['garlic', 'butter', 'blah']
  }
  render () {
    let bandElements = this.state.bands.map(band => <li>{band}</li>)
    return (
      <div>
        <ul>
          {bandElements}
        </ul>
      </div>
    )
  }
}

export default App
