import React, { useState, useCallback } from "react";
import GetGreetings from "./GetGreetings";
function SetGreetings() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const setGreetings = useCallback(() => {
    console.log("useCallback");
    return `hello ${name}`;
  }, [name]);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="insert greetings"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <GetGreetings greetings={setGreetings} />
      <div>
        <button onClick={() => setCount(count + 1)}>
          {count} times clicked
        </button>
      </div>
    </>
  );
}
export default SetGreetings;
