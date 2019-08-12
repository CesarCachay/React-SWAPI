import React, { useState, useEffect } from "react";

function Clicker() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <h3>Your count is: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add more</button>
    </div>
  );
}

export default Clicker;
