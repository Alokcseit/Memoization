import React, { useState, useCallback, useMemo } from "react";
import GetGreetings from "./GetGreetings";
function SetGreetings() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [age, setage] = useState("");
  const setGreetings = useCallback(() => {
    console.log("useCallback");
    return `hello ${name}`;
  }, [name]);
  const getagevalue = useMemo(() => {
    return age;
  }, [age]);
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="insert greetings"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <GetGreetings getage={getagevalue} greetings={setGreetings} />
      <div>
        <button onClick={() => setCount(count + 1)}>
          {count} times clicked
        </button>
      </div>
      <div>
        <label>insert age</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setage(e.target.value)}
        />
      </div>
    </>
  );
}
export default SetGreetings;
