import React from "react";
import ReactPlayer from "react-player";
import "./MVideosStyles.css";

const MVideos = () => {
  return (
    <div className="mvideos">
      <div className="video-wrapper">
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=nEi7UOAO7YM"
          className="react-player"
          controls
          muted
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
          }}
        />
      </div>
      <div className="video-wrapper">
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=WByVlUY8Cuo"
          className="react-player"
          controls
          muted
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
          }}
        />
      </div>
      <div className="video-wrapper">
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=IVe7XvRJwdw"
          className="react-player"
          controls
          muted
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
          }}
        />
      </div>
      <div className="video-wrapper">
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=PhBOIhIp2v8"
          className="react-player"
          controls
          muted
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
          }}
        />
      </div>
      <div className="video-wrapper">
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=FqQ5H9XZL9A"
          className="react-player"
          controls
          muted
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
          }}
        />
      </div>
      <div className="video-wrapper">
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=yMVR8KpMvIk"
          className="react-player"
          controls
          muted
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
          }}
        />
      </div>



    </div>
  );
};

export default MVideos;
