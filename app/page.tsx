"use client";
import Rain from "@/components/Rain";
import Traffic from "@/components/Trafic";
import useDayNight from "@/stores/dayNight";
import useWindowStore from "@/stores/expandWindow";
import useRain from "@/stores/rain";
import useSound from "@/stores/sound";
import ReactAudioPlayer from "react-audio-player";

export default function Home() {
  const { isExpanded } = useWindowStore();
  const { isDay } = useDayNight();
  const { isRain } = useRain();

  const comboMode = `${isDay}-${isRain}`;

  const {
    peopleVolume,
    summerStormVolume,
    wavesVolume,
    windVolume,
  } = useSound();
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
          <Rain />
        </div>
        <div className="absolute bottom-[28%] left-[35%] cursor-pointer">
          <Traffic />
        </div>
        <ReactAudioPlayer
          src="./assets/sounds/people_talk_inside.mp3"
          autoPlay
          loop
          preload="auto"
          volume={peopleVolume / 100}
        />
        <ReactAudioPlayer
          src="./assets/sounds/wind.mp3"
          autoPlay
          loop
          preload="auto"
          volume={windVolume / 100}
        />
        <ReactAudioPlayer
          src="./assets/sounds/waves.mp3"
          autoPlay
          loop
          preload="auto"
          volume={wavesVolume / 100}
        />
        <ReactAudioPlayer
          src="./assets/sounds/summer_storm.mp3"
          autoPlay
          loop
          preload="auto"
          volume={summerStormVolume / 100}
        />
      </div>
    </div>
  );
}
