"use client";
import React, { useState, useEffect } from "react";
import { Pause, Play } from "lucide-react";
import { formatTime } from "./Timer";
import { Progress } from "./ui/progress";

function Timer() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 25,
    seconds: 0,
  });

  const [isRunning, setIsRunning] = useState(false);

  const totalSeconds = 25 * 60;

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime((prev) => {
          if (prev.seconds > 0) {
            return { ...prev, seconds: prev.seconds - 1 };
          }
          if (prev.minutes > 0) {
            return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
          }
          if (prev.hours > 0) {
            return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
          }

          // Timer reached zero, reset to the initial time
          restart();
          return { ...prev }; // Return the current state to prevent a re-render
        });
      }, 1000);

      return () => clearInterval(id);
    }
  }, [isRunning, time]);

  const start = () => setIsRunning(true);

  const pause = () => setIsRunning(false);

  const restart = () => {
    setTime({ hours: 0, minutes: 25, seconds: 0 });
    setIsRunning(false);
  };

  const calculateProgress = () => {
    const remainingSeconds =
      time.hours * 3600 + time.minutes * 60 + time.seconds;
    return ((totalSeconds - remainingSeconds) / totalSeconds) * 100;
  };


  return (
    <div className="fixed bottom-10 right-14 glass-effect p-3 rounded-2xl min-w-[300px] flex items-center gap-3">
      <span className="text-white text-xl">
        {formatTime(time.hours)}:{formatTime(time.minutes)}:
        {formatTime(time.seconds)}
      </span>
      {isRunning ? (
        <button
          onClick={pause}
          className="flex items-center gap-2 bg-white px-3 py-1 rounded-md"
        >
          <Pause size={18} />
          <span>Pause</span>
        </button>
      ) : (
        <button
          onClick={start}
          className="flex items-center gap-2 bg-white px-3 py-1 rounded-md"
        >
          <Play size={18} />
          <span>Start</span>
        </button>
      )}
      <div className="min-w-[200px]">
        <Progress
          value={calculateProgress()}
        />
      </div>
    </div>
  );
}

export default Timer;
