import React, { useEffect, useRef, useState } from "react";

const Ref = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let countVariable = 0;

  const [value, setValue] = useState("");

  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current++;
  });

  const increaseState = () => {
    setCount((prev) => prev + 1);
  };

  const increaseRef = () => {
    countRef.current++;
    console.log("Ref + : ", countRef.current);
  };

  const increaseVariable = () => {
    countVariable++;
    console.log("variable :" + countVariable);
  };
  return (
    <div>
      <p>Ref {countRef.current}</p>
      <p>State{count}</p>
      <p>Variable{countVariable}</p>
      <p>I rendered {renderCountRef.current}times</p>

      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <div>
        <button onClick={increaseRef}>Ref +</button>
        <button onClick={increaseState}>State +</button>
        <button onClick={increaseVariable}>variable</button>
      </div>
    </div>
  );
};

export default Ref;
