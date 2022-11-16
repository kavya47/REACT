import "./App.css";
//import LifecycleMount from "./LifecycleMount";
// import NameList from './NameList';
// import Test from './test';
// import Form from './form'
// import Fragment from './Fragment';
// import FragementTable from './FragementTable';
// import PureComponet from './PureComponet';
// import Memo from './Memo';
// import Parentmemo from './Parentmemo';
// import RefDemo from './Refs/RefDemo';
import Counter from "./Mosh/Counter";
import Counters from "./Mosh/Counters";
// import Movie from './Mosh/Movie'
import NavBar from "./Mosh/NavBar";

import React, { Component } from "react";

class App extends Component {
  state = {
    counter: [
      { id: 1, vale: 0 },
      { id: 2, vale: 0 },
      { id: 3, vale: 0 },
      { id: 4, vale: 0 },
      { id: 5, vale: 0 },
    ],
  };
  handleDelete = (counterId) => {
    const newCounter = this.state.counter.filter(
      (item) => item.id !== counterId
    );
    this.setState({ counter: newCounter });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counter];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].vale++;
    this.setState({ counter: counters });
  };
  handleReset = () => {
    const restCounters = this.state.counter.map((item) => {
      item.vale = 0;
      return item;
    });
    this.setState({
      counter: restCounters,
    });
  };
  render() {
    return (
      <div>
        <NavBar
          totalCount={this.state.counter.filter((item) => item.vale > 0).length}
        />
        <main className="container">
          <Counters
            counterss={this.state.counter}
            onRest={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </div>
    );
  }
}

export default App;
// function App() {

//   return (
//     <div className="App">
//       {/* {/* <NameList/>
//     <Test/>
//     <Form></Form> */}
//       {/* <LifecycleMount></LifecycleMount> */}
//       {/* <Fragment></Fragment>
//       <FragementTable></FragementTable> */}
//       {/* <PureComponet></PureComponet> */}
//       {/* <Parentmemo></Parentmemo> */}
//       {/* <Memo></Memo> */}
//       {/* <RefDemo></RefDemo> */}
//       {/* <Counter></Counter> */}
//       {/* <Movie></Movie> */}
//       <NavBar />
//       <main className="container">
//         <Counters
//         counterss={state.counter}
//           onRest={handleReset}
//           onDelete={handleDelete}
//           onIncrement={handleIncrement}
//         />
//       </main>
//     </div>
//   );
// }

// export default App;
