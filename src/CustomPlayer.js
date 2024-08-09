import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import "./CustomPlayer.css"

const CustomPlayer = ({
  url,
  playsinline = true,
  playing = true,
  loop = true,
  muted = true,
  width = "100%",
  height = "auto",
  className = "content-video crop"
}) => {
  const [isPlaying, setIsPlaying] = useState(playing);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className={`video-container ${className}`}>
      {!isPlaying && !playsinline && (
        <div className="video-overlay" onClick={handlePlayClick}>
          <PlayOverlay />
        </div>
      )}
      <ReactPlayer
        url={url}
        playing={isPlaying}
        playsinline={playsinline}
        loop={loop}
        muted={muted}
        width={width}
        height={height}
        className={className}
        controls={isPlaying}
      />
    </div>
  );
};

const PlayOverlay = () => (
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100" height="100" rx="50" fill="#444444" fill-opacity="0.7"/>
<path d="M74.1143 43.974L39.2235 24.6595C34.6328 22.1182 29 25.4383 29 30.6855V69.3145C29 74.5617 34.6328 77.8818 39.2235 75.3405L74.1143 56.026C78.8502 53.4044 78.8502 46.5956 74.1143 43.974Z" fill="var(--light)"/>
</svg>
);

export default CustomPlayer;