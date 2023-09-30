import "./App.scss";

// components
import Home from "./components/home";
import About from "./components/about";
import Project from "./components/project";

// router
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/SketchesXR">
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/exps/:id" component={Project} />
      </div>
    </Router>
  );
}

export default App;
