"use client";
import useDayNight from "@/stores/dayNight";
import useWindowStore from "@/stores/expandWindow";
import useRain from "@/stores/rain";
import { CloudRainWind } from "lucide-react";
import ReactAudioPlayer from "react-audio-player";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export default function Home() {
  const { isExpanded } = useWindowStore();
  const { isDay } = useDayNight();
  const { isRain, toggleRain, volumeRain, setVolumeRain } = useRain();

  const comboMode = `${isDay}-${isRain}`;

  const handleRain = () => {
    toggleRain();
  };

  return (
    <div>
      <div className="">
        <video
          className={`w-[100vw] z-[-1] absolute ${
            isExpanded ? "top-[0%]" : "top-[-11%]"
          } object-cover transition-opacity ease-in duration-300 ${
            comboMode === "true-false" ? "opacity-100" : "opacity-0"
          }`}
          loop
          autoPlay
          muted
        >
          <source src="./assets/videos/ExteriorDay.mp4" type="video/mp4" />
        </video>
        {/* Rain Day */}
        <video
          className={`w-[100vw] z-[-1] absolute ${
            isExpanded ? "top-[0%]" : "top-[-11%]"
          } object-cover transition-opacity ease-in duration-300 ${
            comboMode === "true-true" ? "opacity-100" : "opacity-0"
          }`}
          loop
          autoPlay
          muted
        >
          <source src="./assets/videos/ExteriorRainyDay.mp4" type="video/mp4" />
        </video>
        {/* Night */}
        <video
          className={`w-[100vw] z-[-1] absolute ${
            isExpanded ? "top-[0%]" : "top-[-11%]"
          } object-cover transition-opacity ease-in duration-300 ${
            comboMode === "false-false" ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          loop
          muted
        >
          <source src="./assets/videos/ExteriorNight.mp4" type="video/mp4" />
        </video>
        {/* Rain Night */}
        <video
          className={`w-[100vw] z-[-1] absolute ${
            isExpanded ? "top-[0%]" : "top-[-11%]"
          } object-cover transition-opacity ease-in duration-300 ${
            comboMode === "false-true" ? "opacity-100" : "opacity-0"
          }`}
          loop
          autoPlay
          muted
        >
          <source
            src="./assets/videos/ExteriorRainyNight.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="">
        <div className="absolute top-1/2 left-[200px] cursor-pointer">
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
                  "p-3 bg-white rounded-full",
                  isRain && "bg-[#F3B664]"
                )}
                onClick={handleRain}
              >
                <CloudRainWind />
              </div>
            </HoverCardTrigger>
            <HoverCardContent
              className={cn(
                "inline-block w-30 text-center p-2",
                isRain && "w-64"
              )}
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
      </div>
    </div>
  );
}
