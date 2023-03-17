import React from 'react';

const DemoVideo = (props) => {

  return (
    <iframe 
      width="560" 
      height="315" 
      src={props.source}
      title="YouTube video player"
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
    </iframe>
  );
}

export default DemoVideo;

