"use client";
import Rain from "@/components/Rain";
import Traffic from "@/components/Trafic";
import useDayNight from "@/stores/dayNight";
import useWindowStore from "@/stores/expandWindow";
import useRain from "@/stores/rain";

const Home = () => {
  const { isExpanded } = useWindowStore();
  const { isDay } = useDayNight();
  const { isRain } = useRain();

  const comboMode = `${isDay}-${isRain}`;
  return (
    <div className="h-full">
      <div className="">
        <video
          className={`w-screen h-screen z-[-1] absolute ${
            isExpanded ? "top-[0%]" : "top-[-11%]"
          } object-cover bg-cover bg-center transition-opacity ease-in duration-300 ${
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
          className={`w-screen h-screen z-[-1] absolute ${
            isExpanded ? "top-[0%]" : "top-[-11%]"
          } object-cover bg-center bg-cover transition-opacity ease-in duration-300 ${
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
          className={`w-screen h-screen z-[-1] absolute ${
            isExpanded ? "top-[0%]" : "top-[-11%]"
          } object-cover bg-center bg-cover transition-opacity ease-in duration-300 ${
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
          className={`w-screen h-screen z-[-1] absolute ${
            isExpanded ? "top-[0%]" : "top-[-11%]"
          } object-cover bg-center bg-cover transition-opacity ease-in duration-300 ${
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
      <div className="absolute h-screen w-screen">
        <div className="absolute top-1/2 left-[200px] cursor-pointer">
          <Rain />
        </div>
        <div className="absolute bottom-[28%] left-[35%] cursor-pointer">
          <Traffic />
        </div>
      </div>
    </div>
  );
};

export default Home;
