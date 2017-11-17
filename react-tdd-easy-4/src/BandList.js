import React from 'react'

const BandList = (props) => {
  let thebands = props.bands.map(band => <li>{band}</li>)
  return (
    <div>
      <ul>{thebands}</ul>
    </div>
  )
}

export default BandList
