import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);

    return () => clearInterval(interval);
  }, [running]);

  const stopWatch = (
    <div>
      <h3>{seconds} seconds</h3>
      <button onClick={() => setRunning(!running)}>
        {running ? "Stop" : "Start"}
      </button>
      <button onClick={() => setSeconds(0)}>Reset</button>
    </div>
  );

  return <>{stopWatch}</>;
}

export default Timer;
