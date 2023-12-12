import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";

function AudioPlayer({ image, title, episodeTitle, audioSource }) {

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);

  const ref = useRef(null);
  const progressBar = useRef(null);
  const progressAnimation = useRef(null);

  useEffect(() => {
    const length = Math.floor(ref.current.duration);
    setDuration(length);
    progressBar.current.max = length;
  }, [ref?.current?.loadedmetadata, ref?.current?.readyState]);

  const toggleAudio = () => {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
      progressAnimation.current = requestAnimationFrame(songPlaying);
    } else {
      ref.current.pause();
      cancelAnimationFrame(progressAnimation.current);
    }
  };

  const songPlaying = () => {
    progressBar.current.value = ref.current.currentTime;
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`);
    progressAnimation.current = requestAnimationFrame(songPlaying);
  };

  const updateRange = () => {
    ref.current.currentTime = progressBar.current.value;
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`);
  };

  return (
    <footer className="w-screen bg-dark-green bg-opacity-80 backdrop-blur-sm px-4 pt-2 fixed bottom-0 left-0 right-0">
      <div className="h-12 flex items-center">
        <img
          src={image}
          alt="podcast cover image"
          className="h-[80%]"
        />
        <div className="w-[68%] text-sm text-mint-cream indent-4">
          <h1>{title}</h1>
          <p className="italic font-thin line-clamp-1">{episodeTitle}</p>
        </div>
        {isPlaying ? (
          <FontAwesomeIcon
            icon={faPauseCircle}
            onClick={toggleAudio}
            className="w-[10%] text-3xl text-mint-cream"
          />
        ) : (
          <FontAwesomeIcon
            icon={faPlayCircle}
            onClick={toggleAudio}
            className="w-[10%] text-3xl text-mint-cream"
          />
        )}
      </div>
      <input
        type="range"
        min={0}
        defaultValue={0}
        ref={progressBar}
        onChange={updateRange}
        className="h-1 accent-eerie-black w-[90%]"
      />
      <audio
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={audioSource} type="audio/ogg" />
      </audio>
    </footer>
  );
}

export default AudioPlayer;
