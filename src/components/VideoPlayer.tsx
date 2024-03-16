import ReactPlayer from "react-player";
import React from "react";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <div>
      <ReactPlayer
        className={`rounded-[30px] md:rounded-[60px] w-full h-full max-w-[1200px] max-h-[1200px] `}
        url={src}
        width="100%"
        height="auto"
        controls
        muted
      />
    </div>
  );
};

export default VideoPlayer;
