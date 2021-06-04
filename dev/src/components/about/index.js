import "./about.scss";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

function About() {
  return (
    <Container className="About-Page">
      <Link to={`/`}>
        <div className="About-CloseButton">
          <svg width="512px" height="512px" viewBox="0 0 512 512">
            <path
              d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5
						c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9
						c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"
            />
          </svg>
        </div>
      </Link>
      <div className="About-RightPanel">
        <div className="About-TextWrapper">
          <p className="About-Desc">
            A place for my sketches, most of them are not optimised so it take a
            bit of time to load, please be patient. And apologies for some of
            the sketches might not work across different devices and platforms.
            This is more a playground for me to tryout ideas.
          </p>
          <div className="About-Desc with-link">
            Source code could be found here:{" "}
            <a
              className="About-Link"
              href="https://github.com/yiwenl/Sketches"
              rel="noreferrer"
              target="_blank"
            >
              https://github.com/yiwenl/SketchesXR
            </a>
          </div>
          <br />
          <div className="About-Desc with-link">
            Built with my WebGL Tools :{" "}
            <a
              className="About-Link"
              href="https://github.com/yiwenl/Alfrid"
              rel="noreferrer"
              target="_blank"
            >
              https://github.com/yiwenl/Alfrid
            </a>
          </div>
          <br />
          <a href="https://wensday.co/" rel="noreferrer" target="_blank">
            <p className="About-Link">wensday.co</p>
          </a>
          <a
            href="https://twitter.com/yiwen_lin"
            rel="noreferrer"
            target="_blank"
          >
            <p className="About-Link">twitter @yiwen_lin</p>
          </a>
          <a
            href="https://www.instagram.com/yiwen/"
            rel="noreferrer"
            target="_blank"
          >
            <p className="About-Link">instagram @yiwen</p>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default About;
