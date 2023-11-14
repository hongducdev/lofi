"use client";
import React from "react";
import { Switch } from "../ui/switch";
import useDayNight from "@/stores/dayNight";

const SwitchDayNight = () => {
  const { isDay, toggleDay } = useDayNight();

  return (
    <div>
      <Switch checked={isDay} onCheckedChange={toggleDay} />
    </div>
  );
};

export default SwitchDayNight;
