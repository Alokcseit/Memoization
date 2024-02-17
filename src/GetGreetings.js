import React from "react";
import { useState, useEffect } from "react";
function GetGreetings({ greetings }) {
  const [greetingsValue, setGreetingsValue] = useState("");

  useEffect(() => {
    console.log("greetings changed");
    setGreetingsValue(greetings());
  }, [greetings]);

  return (
    <>
      <h1>{greetingsValue}</h1>
    </>
  );
}

export default GetGreetings;
