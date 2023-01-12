import React from "react";

/*
Credit to: bravemaster619
https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2 

This components is used to embed a youtube video. 
Source takes an embedId which is provided as a prop in IntroVideo

*/
const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
