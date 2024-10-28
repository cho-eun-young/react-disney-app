import React, { forwardRef, useRef } from "react";

const ChildComponent = (props, ref) => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={ref} />
      <button onClick={handleClick}>클릭</button>
    </div>
  );
};

export default forwardRef(ChildComponent);
