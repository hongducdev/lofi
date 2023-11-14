"use client";
import React from "react";
import { CarTaxiFront, CloudRainWind } from "lucide-react";
import ReactAudioPlayer from "react-audio-player";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import useRain from "@/stores/rain";
import useSound from "@/stores/sound";
const Traffic = () => {
  const { traffic, trafficVolume, toggleTraffic, setTrafficVolume } =
    useSound();

  const handleRain = () => {
    toggleTraffic();
  };
  return (
    <div>
      {traffic && (
        <ReactAudioPlayer
          preload="auto"
          autoPlay
          src="./assets/sounds/city_traffic.mp3"
          loop
          volume={trafficVolume / 100}
        />
      )}
      <HoverCard>
        <HoverCardTrigger>
          <div
            className={cn(
              "p-3 bg-white rounded-full hover:bg-[#F3B664] transition-colors ease-in-out duration-300",
              traffic && "bg-[#F3B664]"
            )}
            onClick={handleRain}
          >
            <CarTaxiFront />
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          className={cn("inline-block w-30 text-center p-2", traffic && "w-64")}
        >
          <span className={cn("font-semibold", traffic && "pb-3")}>
            City Traffic
          </span>
          {traffic && (
            <div className="pt-3">
              <Slider
                value={[trafficVolume]}
                defaultValue={[50]}
                max={100}
                step={1}
                onValueChange={(value) => {
                  setTrafficVolume(value[0]);
                }}
              />
            </div>
          )}
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default Traffic;
