import Home from "@/components/Home";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Chill with me",
  description:
    "Discover a world of serene sounds on our website! Immerse yourself in soothing lofi music, explore a variety of ambient sounds, enhance focus with tomo focus, and stay organized with our todo list feature. Experience a creative and productive space, all while enjoying the convenience of seamlessly opening your favorite YouTube videos. Dive in now for a unique blend of relaxation and productivity!",
};

const HomePage = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default HomePage;
