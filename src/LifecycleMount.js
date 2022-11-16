import React, { Component } from 'react'

class LifecycleMount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'kavya'
      }
      console.log("lifecycle A cons")
    }
    static getDerivedStateFromProps(props,state){
        console.log("lifecycle A static")
        return null
    }
    componentDidMount(){
        console.log("lifecycle A Compinent")
    }
    shouldComponentUpdate(){
      console.log("shouldcomponent")
      return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("getSnapshotBeforeUpdate")

    }
    componentDidUpdate(){
      console.log("componentDidUpdate")
    }
  render() {
    console.log('render lifecycle A')
    return (
      <div>
        LifecycleA
      </div>
    )
  }
}

export default LifecycleMount
