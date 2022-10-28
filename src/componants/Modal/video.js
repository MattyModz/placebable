import React from "react";

function Video({ src }) {
  return (
    <iframe
      width="1253"
      height="680"
      src={src}
      frame="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="rounded-xl"
    />
  );
}

export default Video;
