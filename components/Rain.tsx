"use client"
import React from "react";
import { CloudRainWind } from "lucide-react";
import ReactAudioPlayer from "react-audio-player";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import useRain from "@/stores/rain";
const Rain = () => {
  const { isRain, toggleRain, volumeRain, setVolumeRain } = useRain();

  const handleRain = () => {
    toggleRain();
  };
  return (
    <div>
      {isRain && (
        <ReactAudioPlayer
          preload="auto"
          autoPlay
          src="./assets/sounds/rain_city.mp3"
          loop
          volume={volumeRain / 100}
        />
      )}
      <HoverCard>
        <HoverCardTrigger>
          <div
            className={cn(
              "p-3 bg-white rounded-full hover:bg-[#F3B664] transition-colors ease-in-out duration-300",
              isRain && "bg-[#F3B664]"
            )}
            onClick={handleRain}
          >
            <CloudRainWind />
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          className={cn("inline-block w-30 text-center p-2", isRain && "w-64")}
        >
          <span className={cn("font-semibold", isRain && "pb-3")}>
            City Rain
          </span>
          {isRain && (
            <div className="pt-3">
              <Slider
                value={[volumeRain]}
                defaultValue={[50]}
                max={100}
                step={1}
                onValueChange={(value) => {
                  setVolumeRain(value[0]);
                }}
              />
            </div>
          )}
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default Rain;
