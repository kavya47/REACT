import React, { Component } from 'react'
import Memo from './Memo'

export class Parentmemo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"kavya"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"hi"
            })
        },4000
        )
    }
  render() {
    console.log("Parent component")
    return (
      <div>
        Parent
        <Memo name={this.state.name}></Memo>
      </div>
    )
  }
}

export default Parentmemo
