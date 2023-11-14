"use client";
import useMusic from "@/stores/playMusic";
import { PauseCircle, PlayCircle } from "lucide-react";
import React from "react";

const Player = () => {
  // https://ss-edge.joeycast.com/lofi.mp3

  const { isMusic, toggleMusic } = useMusic();

  const handlePlay = () => {
    toggleMusic();
  };

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2">
      {isMusic && (
        <audio src="https://ss-edge.joeycast.com/lofi.mp3" autoPlay />
      )}
      <div className="cursor-pointer text-white" onClick={handlePlay}>
        {isMusic ? <PauseCircle size={50} /> : <PlayCircle size={50} />}
      </div>
    </div>
  );
};

export default Player;
