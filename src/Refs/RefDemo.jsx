import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    // #to focus on the text box
    this.inputRef.current.focus();
    console.log("did mount ref", this.inputRef);
  }
  clickHandlee=()=>{
    alert(this.inputRef.current.value)
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        <button onClick={this.clickHandlee}>click</button>
      </div>
    );
  }
}

export default RefDemo;
