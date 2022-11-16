import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  // state = {
  //   counter: [
  //     { id: 1, vale: 0 },
  //     { id: 2, vale: 0 },
  //     { id: 3, vale: 0 },
  //     { id: 4, vale: 0 },
  //     { id: 5, vale: 0 },
  //   ],
  // };
  // handleDelete = (counterId) => {
  //   const newCounter = this.state.counter.filter(
  //     (item) => item.id !== counterId
  //   );
  //   this.setState({ counter: newCounter });
  // };
  // handleIncrement = (counter) => {
  //   const counters = [...this.state.counter];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].vale++;
  //   this.setState({ counter: counters });
  // };
  // handleReset=()=>{
  //   const restCounters=this.state.counter.map((item)=>{
  //     item.vale=0;
  //     return item;
  //   });
  //   this.setState({
  //     counter:restCounters
  //   })
  // }
  render() {
    console.log("props in countre", this.props);
    return (
      <div>
        <button
          onClick={this.props.onRest}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counterss.map((item) => (
          <Counter
            key={item.id}
            onDelete={this.props.onDelete}
            //value={item.vale}
            // id={item.id}
            counterss={item}
            onIncrement={this.props.onIncrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
