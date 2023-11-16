"use client";
import useDayNight from "@/stores/dayNight";
import React, { use, useEffect, useState } from "react";

export const formatTime = (time: number) => {
  if (time < 10) {
    return `0${time}`;
  }
  return time;
};

const Timer = () => {
  const [time, setTime] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const { setIsDay } = useDayNight();

  const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formatMinutes = formatTime(minutes);
    const formatSeconds = formatTime(seconds);

    setTime(`${hours}:${formatMinutes}:${formatSeconds}`);
  };

  const getDay = () => {
    // hiển thị ngày tháng năm
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    const day = getDay();
    setDay(day);
    const intervalId = setInterval(getTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 6 && hours <= 18) {
      setIsDay(true);
    } else {
      setIsDay(false);
    }
  }, [setIsDay]);

  return (
    <div className="fixed top-5 right-14 glass-effect p-3 rounded-2xl min-w-[300px] flex items-center gap-10 justify-center">
      <span className="text-2xl text-white font-semibold">{time}</span>
      <span className="text-2xl text-white font-semibold">{day}</span>
    </div>
  );
};

export default Timer;
