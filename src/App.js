import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import SelfGuided from "./pages/SelfGuided";
import Burger from "./components/Burger";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Burger />
        <div className="App"></div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/self-guided">
            <SelfGuided />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
