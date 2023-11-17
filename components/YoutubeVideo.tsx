"use client";
import React from "react";
import ReactPlayer from "react-player/youtube";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Play, Trash2 } from "lucide-react";

const YoutubeVideo = () => {
  const [inputData, setInputData] = React.useState("");
  const [videoLink, setVideoLink] = React.useState("");

  return (
    <div className="fixed bottom-10 left-5">
      {
        videoLink && (
          <ReactPlayer
            url={videoLink}
            width="350px"
            height="200px"
            controls={true}
          />
        )
      }
      <div className="flex items-center gap-2 mt-2">
        <Input
          type="url"
          placeholder="Youtube video link"
          value={inputData}
          onChange={(e) => {
            setInputData(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            setVideoLink(inputData);
            setInputData("");
          }}
        >
          <Play size={20} fill="true" />
        </Button>
        <Button
          onClick={() => {
            setVideoLink("");
            setInputData("");
          }}
        >
          <Trash2 size={20} fill="true" />
        </Button>
      </div>
    </div>
  );
};

export default YoutubeVideo;
