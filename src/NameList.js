import React from "react";
import Person from "./Person.js";
function NameList() {
  const names = [
    {
      id: 1,
      name: "hi",
      age: 30,
      skill: "react",
    },
    { id: 1, name: "hello", age: 70, skill: "Java" },
    { id: 1, name: "how", age: 80, skill: "Angular" },
  ];
 
  return (
  <div>{names.map((item) => <h2>{item.name}</h2>)}
  </div>
  );
}

export default NameList;
