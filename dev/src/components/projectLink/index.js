import styled from "styled-components";
import { Link } from "react-router-dom";

// css
import "./project-link.scss";

function ProjectLink({ url, cover, title, video }) {
  const onMouseEnter = () => {
    console.log("on Mosue enter");
  };
  const onMouseLeave = () => {
    console.log("on Mouse out");
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
        <img
          src={video}
          className="Experiment-video Experiment-media"
          alt={title}
          autoPlay
          loop
        ></img>
      </div>
    </Link>
  );
}

export default ProjectLink;
