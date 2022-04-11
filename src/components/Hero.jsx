import React from "react";
import beachVid from "../assets/beachVid.mp4";

export const Hero = () => {
  return (
    <div className="w-full h-screen relative ">
      <video
        className="w-full h-full object-cover "
        src={beachVid}
        autoPlay
        loop
        muted
      />
      {/* overlay */}
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
    </div>
  );
};
