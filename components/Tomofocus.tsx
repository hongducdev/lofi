"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { formatTime } from "./Timer";
import { Progress } from "./ui/progress";
import { useTimeInitial } from "@/stores/timeInitial";

function Timer() {
  const { initialHours, initialMinutes, initialSeconds } = useTimeInitial();

  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    setTime({
      hours: initialHours,
      minutes: initialMinutes,
      seconds: initialSeconds,
    });
  }, [initialHours, initialMinutes, initialSeconds]);

  const [isRunning, setIsRunning] = useState(false);

  const totalSeconds =
    initialHours * 3600 + initialMinutes * 60 + initialSeconds;

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
          playAudio(); // Phát âm thanh khi hết thời gian
          showNotification("Time's up!"); // Hiển thị thông báo khi hết giờ
          return { ...prev }; // Return the current state to prevent a re-render
        });
      }, 1000);

      return () => {
        clearInterval(id);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning, time]);

  const start = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        setIsRunning(true);
      }
    });
  };

  const pause = () => setIsRunning(false);

  const restart = () => {
    setTime({
      hours: initialHours,
      minutes: initialMinutes,
      seconds: initialSeconds,
    });
    setIsRunning(false);
  };

  const calculateProgress = () => {
    const remainingSeconds =
      time.hours * 3600 + time.minutes * 60 + time.seconds;
    return ((totalSeconds - remainingSeconds) / totalSeconds) * 100;
  };

  const playAudio = () => {
    const audio = new Audio("./assets/sounds/ding.mp3"); // Đặt đúng đường dẫn tới file âm thanh của bạn
    audio.play();
  };

  const showNotification = (message: string) => {
    if (Notification.permission === "granted") {
      new Notification("Timer Notification", { body: message });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Timer Notification", { body: message });
        }
      });
    }
  };

  const handleBeforeUnload = useCallback(
    (event: BeforeUnloadEvent) => {
      const message = "Your actions are not saved. Confirm reload?";
      event.returnValue = message; // Standard for most browsers
      return message; // For some older browsers
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [handleBeforeUnload]);

  return (
    <div className="fixed bottom-10 right-5 glass-effect p-3 rounded-2xl min-w-[300px] flex items-center gap-3">
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
        </button>
      ) : (
        <button
          onClick={start}
          className="flex items-center gap-2 bg-white px-3 py-1 rounded-md"
        >
          <Play size={18} />
        </button>
      )}
      <button
        onClick={restart}
        className="flex items-center gap-2 bg-white px-3 py-1 rounded-md"
      >
        <RotateCcw size={18} />
      </button>
      <div className="min-w-[200px]">
        <Progress value={calculateProgress()} />
      </div>
    </div>
  );
}

export default Timer;
