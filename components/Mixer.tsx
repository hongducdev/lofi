"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Settings2, Volume1, Volume2 } from "lucide-react";
import useMusic from "@/stores/playMusic";
import { Slider } from "./ui/slider";
import useSound from "@/stores/sound";

const Mixer = () => {
  const { setVolumeMusic, volumeMusic } = useMusic();

  const {
    peopleVolume,
    summerStormVolume,
    wavesVolume,
    windVolume,
    setPeopleVolume,
    setSummerStormVolume,
    setWavesVolume,
    setWindVolume,
  } = useSound();

  return (
    <div className="cursor-pointer">
      <Popover>
        <PopoverTrigger>
          <div className="p-3 bg-white rounded-full hover:bg-[#F3B664] transition-colors ease-in-out duration-300">
            <Settings2 />
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="">
            <div className="flex items-center gap-3">
              <Volume1
                onClick={() => {
                  setVolumeMusic(0);
                }}
              />
              <Slider
                value={[volumeMusic]}
                defaultValue={[50]}
                max={100}
                step={1}
                onValueChange={(value) => {
                  setVolumeMusic(value[0]);
                }}
              />
              <Volume2
                onClick={() => {
                  setVolumeMusic(100);
                }}
              />
            </div>
            <div className="w-full bg-black h-[2px] my-2"></div>
            <div className="flex flex-col gap-2">
              <div className=" flex items-center gap-2">
                <span className="w-[40%]">People Talk</span>
                <div className="w-[60%]">
                  <Slider
                    value={[peopleVolume || 0]}
                    defaultValue={[0]}
                    max={100}
                    step={1}
                    onValueChange={(value) => {
                      if (setPeopleVolume) {
                        setPeopleVolume(value[0]);
                      }
                    }}
                  />
                </div>
              </div>
              <div className=" flex items-center gap-2">
                <span className="w-[40%]">Winds</span>
                <div className="w-[60%]">
                  <Slider
                    value={[windVolume || 0]}
                    defaultValue={[0]}
                    max={100}
                    step={1}
                    onValueChange={(value) => {
                      if (setWindVolume) {
                        setWindVolume(value[0]);
                      }
                    }}
                  />
                </div>
              </div>
              <div className=" flex items-center gap-2">
                <span className="w-[40%]">Waves</span>
                <div className="w-[60%]">
                  <Slider
                    value={[wavesVolume || 0]}
                    defaultValue={[0]}
                    max={100}
                    step={1}
                    onValueChange={(value) => {
                      if (setWavesVolume) {
                        setWavesVolume(value[0]);
                      }
                    }}
                  />
                </div>
              </div>
              <div className=" flex items-center gap-2">
                <span className="w-[40%]">Summer Storm</span>
                <div className="w-[60%]">
                  <Slider
                    value={[summerStormVolume || 0]}
                    defaultValue={[0]}
                    max={100}
                    step={1}
                    onValueChange={(value) => {
                      if (setSummerStormVolume) {
                        setSummerStormVolume(value[0]);
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      
    </div>
  );
};

export default Mixer;
