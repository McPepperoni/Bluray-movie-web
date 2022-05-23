import React, { useRef, useState, useEffect } from "react";
import {
  Button,
  Container,
  Group,
  Inner,
  Overlay,
  Title,
  ButtonImage,
  VolumeSlider,
  VolumeContainer,
  ProgressBar,
  Duration,
  TopButton,
} from "./styles/player";

export default function Player({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Player.Video = function PlayerVideo({
  setVideoDuration,
  setVideoTime,
  volume,
  playState,
  src,
}) {
  const video = useRef({ current: { currentTime: 0, duration: 0 } });

  const videoHandler = () => {
    if (playState === "play") {
      video.current.pause();
      return;
    }

    video.current.play();
  };

  // useEffect(() => {
  //   video.current.addEventListener("timeupdate", () => {
  //     var date = new Date("August 19, 1975 00:00:00");
  //     date.setSeconds(video.current.currentTime);
  //     console.log(date);
  //     video.current.duration > 3600
  //       ? setVideoDuration(date.toISOString().substring(11, 16))
  //       : setVideoDuration(date.toISOString().substring(14, 19));
  //   });
  // }, [video.current.currentTime]);

  useEffect(() => {
    video.current.addEventListener("timeupdate", () => {
      setVideoDuration(video.current.duration);
      setVideoTime(video.current.currentTime);
    });
  }, [video.current.currentTime]);

  useEffect(() => {
    video.current.volume = volume / 100;
  }, [volume]);

  useEffect(() => {
    videoHandler();
  }, [video.current, playState]);

  return (
    <Inner>
      <video id="netflix-player" autoPlay ref={video}>
        <source src={src} type="video/mp4" />
      </video>
    </Inner>
  );
};

Player.ControlOverlay = function PlayerControlOverlay({
  videoDuration,
  videoTime,
  setVolume,
  playState,
  setPlayState,
  ...restProps
}) {
  const [volumeState, setVolumeState] = useState("");

  const play = useRef(null);
  const pause = useRef(null);

  const volumeSlider = useRef(null);
  const volume = useRef(null);
  const volume_half = useRef(null);
  const volume_third = useRef(null);
  const volume_mute = useRef(null);

  const secondsToString = (seconds) => {
    var date = new Date("August 19, 1975 00:00:00");
    date.setSeconds(seconds);
    return seconds > 3600
      ? date.toISOString().substring(11, 16)
      : date.toISOString().substring(14, 19);
  };

  useEffect(() => {
    setPlayState("pause");
    setVolumeState("volume");
  }, [
    play.current,
    pause.current,
    volume.current,
    volume_half.current,
    volume_third.current,
    volume_mute.current,
    volumeSlider.current,
  ]);

  return (
    <Overlay {...restProps}>
      <Group justifyContent="space-between">
        <TopButton
          ref={pause}
          name="back"
          // btnState={playState}
          onClick={() => {}}
        >
          <ButtonImage name="back" />
        </TopButton>
        <TopButton
          ref={pause}
          name="flag"
          // btnState={playState}
          onClick={() => {}}
        >
          <ButtonImage name="flag" />
        </TopButton>
      </Group>
      <Group flexDirection="column">
        <Group width="100%" height="fit-content" minHeight="0">
          <ProgressBar
            value={
              isNaN((videoTime / videoDuration) * 100)
                ? 0
                : (videoTime / videoDuration) * 100
            }
          />
          <Duration>{secondsToString(videoDuration - videoTime)}</Duration>
        </Group>
        <Group width="100%">
          <Group>
            <Button
              ref={pause}
              name="pause"
              btnState={playState}
              onClick={() => {
                setPlayState("play");
              }}
            >
              <ButtonImage name="pause" />
            </Button>
            <Button
              ref={play}
              name="play"
              btnState={playState}
              onClick={() => {
                setPlayState("pause");
              }}
            >
              <ButtonImage name="play" />
            </Button>
            <Button>
              <ButtonImage name="rewind" />
            </Button>
            <Button>
              <ButtonImage name="fastforward" />
            </Button>
            <Group
              height="fit-content"
              onClick={() => {
                volumeState === "volume_mute"
                  ? setVolumeState("volume")
                  : setVolumeState("volume_mute");
                setVolumeState("volume_mute");
              }}
            >
              <VolumeContainer>
                <VolumeSlider
                  ref={volumeSlider}
                  onChange={() => {
                    //console.log(volumeSlider.current.value);
                    setVolume(volumeSlider.current.value);
                  }}
                />
              </VolumeContainer>
              <Button name="volume" btnState={volumeState}>
                <ButtonImage name="volume" />
              </Button>
              <Button name="volume_half" btnState={volumeState}>
                <ButtonImage name="volume_half" />
              </Button>
              <Button name="volume_third" btnState={volumeState}>
                <ButtonImage name="volume_third" />
              </Button>
              <Button name="volume_mute" btnState={volumeState}>
                <ButtonImage name="volume_mute" />
              </Button>
            </Group>
          </Group>
          <Title>Better Call Saul: Uno</Title>
          <Group>
            <Button>
              <ButtonImage name="next" />
            </Button>
            <Button>
              <ButtonImage name="episodes" />
            </Button>
            <Button>
              <ButtonImage name="subtitle" />
            </Button>
            <Button>
              <ButtonImage name="fullscreen" />
            </Button>
          </Group>
        </Group>
      </Group>
    </Overlay>
  );
};
