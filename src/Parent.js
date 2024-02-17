import React from "react";
import Child from "./Child";
function Parent() {
  const [count, setCount] = React.useState(0);
  console.log("parent changed");
  return (
    <>
      <div
        style={{
          backgroundColor: "blueviolet",
          height: "500px",
          width: "500px",
          textAlign: "center",
          marginLeft: "510px",
        }}
      >
        <h1>parent </h1>
        <button onClick={() => setCount(count + 1)}>cick me {count}</button>
        <Child title="child component" count={count}></Child>
      </div>
    </>
  );
}

export default Parent;
