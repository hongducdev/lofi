"use client";

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Settings } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useTimeInitial } from "@/stores/timeInitial";
import { useToast } from "./ui/use-toast";

const Setting = () => {
  const { toast } = useToast();
  const {
    setInitialHours,
    setInitialMinutes,
    setInitialSeconds,
    initialHours,
    initialMinutes,
    initialSeconds,
  } = useTimeInitial();

  const [inputHours, setInputHours] = React.useState(initialHours);
  const [inputMinutes, setInputMinutes] = React.useState(initialMinutes);
  const [inputSeconds, setInputSeconds] = React.useState(initialSeconds);

  const handleSave = () => {
    if (inputHours < 0 || inputMinutes < 0 || inputSeconds < 0) {
      return toast({
        title: "Invalid time",
        description: "Time must be greater than 0",
        variant: "destructive",
      });
    }
    
    setInitialHours(inputHours);
    setInitialMinutes(inputMinutes);
    setInitialSeconds(inputSeconds);

    setInputHours(inputHours);
    setInputMinutes(inputMinutes);
    setInputSeconds(inputSeconds);

    toast({
      title: "Saved",
      description: "Your time has been saved",
    });
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <div className="p-3 bg-white rounded-full hover:bg-[#F3B664] transition-colors ease-in-out duration-300">
            <Settings />
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="">
            <h3 className="font-semibold">TomoFocus Setting</h3>
            <div className="flex flex-col gap-2 mt-2">
              <label className="text-sm">Hours</label>
              <Input
                placeholder="Hours"
                type="number"
                min={0}
                value={inputHours}
                onChange={(e) => setInputHours(Number(e.target.value))}
              />
              <label className="text-sm">Minutes</label>
              <Input
                placeholder="Minutes"
                type="number"
                min={0}
                value={inputMinutes}
                onChange={(e) => setInputMinutes(Number(e.target.value))}
              />
              <label className="text-sm">Seconds</label>
              <Input
                placeholder="Seconds"
                type="number"
                min={0}
                value={inputSeconds}
                onChange={(e) => setInputSeconds(Number(e.target.value))}
              />
              <div className="flex items-end justify-end">
                <Button onClick={handleSave}>Save</Button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Setting;
