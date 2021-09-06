import React, { useState } from "react";
import { Link } from "react-router-dom";

// css
import "./project-link.scss";

function ProjectLink({ url, cover, title, video }) {
  const [hovered, setHovered] = useState(false);
  const onMouseEnter = () => {
    setHovered(true);
  };
  const onMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Link to={url}>
      <div
        className="Experiment-Item"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img
          className="Experiment-cover Experiment-media"
          src={cover}
          alt={title}
        ></img>
        {hovered && (
          <img
            src={video}
            className="Experiment-video Experiment-media"
            alt={title}
            autoPlay
            loop
          ></img>
        )}
      </div>
    </Link>
  );
}

export default ProjectLink;
