import React from "react";
import { useState } from "react";

function Toggle() {
  const [status, updateStatus] = useState(false);

  function handleClick() {
    // updateStatus((status) => {
    // return status ? "ONN" : "OFF";
    // });
    updateStatus((status) => !status);
  }

  const color = status ? "red" : "white";

  return (
    <button onClick={handleClick} style={{ background: color }}>
      {status ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
