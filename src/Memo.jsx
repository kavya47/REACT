// import React from 'react'

// function Memo({name}) {
//     console.log("rendering memo ")
//   return (
//     <div>{name}</div>
//   )
// }

// export default React.memo(Memo)

import React, { Component } from 'react'

class Memo extends Component {
 
    
  render() {
    // console.log("memon props",this.props)
    console.log("rendering memo ")
    return (
      <div>{this.props.name}</div>
    )
  }
}

export default  React.memo(Memo)