import styled from "styled-components";
import { Link } from "react-router-dom";

// css
import "./home.scss";

// site data
import SiteModel from "../../data/SiteModel";

// comonent
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll;
`;

function Home() {
  const projectList = SiteModel.concat().reverse();
  return (
    <Container>
      <Link to={`/about`} className="App-LinkToAbout">
        <svg height="32px" viewBox="0 0 32 32" width="32px">
          <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
        </svg>
      </Link>
      <div className="Experiment-List">
        {projectList.map(({ title, cover, video }, i) => {
          return (
            <Link to={`/exps/${projectList.length - i}`} key={`project${i}`}>
              <div className="Experiment-Item">
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
        })}
      </div>
    </Container>
  );
}

export default Home;
