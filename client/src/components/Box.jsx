import { useState } from "react";

function Box({ data }) {
  const [count, setCount] = useState(0);

  const handleMath = () => {
    setCount(count + 10);
  };

  return (
    <div style={{ color: data.color }}>
      <h1>{data.name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
        voluptates porro, nesciunt debitis expedita incidunt assumenda possimus
        dolores optio error quo eaque provident consequatur vitae.
      </p>

      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <button onClick={() => setCount(count - 1)}>Subtract 1</button>
      <button onClick={handleMath}>add 10</button>
    </div>
  );
}

export default Box;
