import React, { useState } from "react";
import { Player } from "../components";

export function PlayerContainer() {
  const [playState, setPlayState] = useState("");
  const [volume, setVolume] = useState(1);
  const [videoDuration, setVideoDuration] = useState(0);
  const [videoTime, setVideoTime] = useState(0);

  return (
    <>
      <Player>
        <Player.Video
          src="/videos/bunny.mp4"
          playState={playState}
          volume={volume}
          setVideoDuration={setVideoDuration}
          setVideoTime={setVideoTime}
        />
        <Player.ControlOverlay
          playState={playState}
          setPlayState={setPlayState}
          setVolume={setVolume}
          videoDuration={videoDuration}
          videoTime={videoTime}
        />
      </Player>
    </>
  );
}
