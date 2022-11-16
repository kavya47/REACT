import React, { Component } from "react";
import "../App";

class Counter extends Component {

  formatCount() {
    const count = this.props.counterss.vale;
    return count === 0 ? "Zero" : count;
  }


  render() {
    //console.log("hild",this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="button" onClick={()=>this.props.onIncrement(this.props.counterss)}>
          Increment
        </button>
        <button
          onClick={()=>this.props.onDelete(this.props.counterss.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length !== 0 ? (
          <ul>
            <li>
              {this.state.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </li>
          </ul>
        ) : (
          "please create a tagsss!!!"
        )} */}
      </div>
    );
  }

  getBadgeClasses() {
    return this.props.counterss.vale === 0 ? "count-warning" : "count-primary";
  }
}

export default Counter;
