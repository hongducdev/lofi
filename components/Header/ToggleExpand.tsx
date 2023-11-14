"use client";
import { Maximize2, Minimize2 } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { closeFullscreen, openFullscreen } from "@/utils/fullscreen";
import useWindowStore from "@/stores/expandWindow";

const ToggleExpand = () => {
  const { isExpanded, toggleExpand } = useWindowStore();

  const handleToggleExpand = () => {
    toggleExpand();

    if (isExpanded) {
      closeFullscreen();
    } else {
      openFullscreen();
    }
  };

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div onClick={handleToggleExpand}>
              {isExpanded ? (
                <Minimize2 size={25} color="white" />
              ) : (
                <Maximize2 size={25} color="white" />
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            {isExpanded ? "Minimize the window" : "Expand the window"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default ToggleExpand;
