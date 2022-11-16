import React from "react";

function FragemtCol() {
  const items = [];
  return (
    <React.Fragment>
        {/* can use key attribute */}
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>
      ))}
      <td>Name</td>
      <td>Vishwas</td>
    </React.Fragment>
  );
}

export default FragemtCol;
