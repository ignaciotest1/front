"use client";
import ReactPlayer from "react-player";
import React, { Suspense, useEffect, useState } from "react";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      {hasWindow && (
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
      )}
    </Suspense>
  );
};

export default VideoPlayer;
