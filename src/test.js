import React from 'react'
import {useState
 } from 'react';
function Test() {
    const[state,setState]=useState(false);
    const color="red-color";
    const array=[1,2,3]
    const extension=[4,5,6]
    let array1=[...extension,...array]
    console.log("testttt",array1)
  return (
   
    <div>
      <div>
        <button onClick={()=>setState(!state)}>Change color</button>
      <h1 className={color}>hello</h1>
      </div>
    </div>
    
  );
}

export default Test
