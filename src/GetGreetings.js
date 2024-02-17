import React from "react";
import { useState, useEffect } from "react";
function GetGreetings({ greetings, getage }) {
  const [greetingsValue, setGreetingsValue] = useState("");

  useEffect(() => {
    console.log("greetings changed");
    setGreetingsValue(greetings());
  }, [greetings, getage]);

  return (
    <>
      <h1>{greetingsValue}</h1>
      <h1>{getage}</h1>
    </>
  );
}

export default GetGreetings;
