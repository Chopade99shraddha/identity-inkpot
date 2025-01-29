import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: number;
    if (isRunning) {
      intervalId = window.setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8 rounded-lg bg-secondary animate-fade-in">
      <div className="text-6xl font-mono font-bold text-primary">
        {formatTime()}
      </div>
      <div className="flex gap-4">
        <Button
          onClick={startStop}
          variant={isRunning ? "destructive" : "default"}
          className="w-24"
        >
          {isRunning ? "Stop" : "Start"}
        </Button>
        <Button onClick={reset} variant="outline" className="w-24">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Stopwatch;