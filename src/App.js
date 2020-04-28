import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import NotFound from "./components/404/404";
import "./App.scss";
import "./global/global.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="App-nav">
            <h1 className="App-nav-logo">
              <Link to="/" title="Home">
                <img src="https://svgshare.com/i/KaQ.svg" alt="circle" />
              </Link>
            </h1>
            <ul className="App-ul">
              <li className="App-li">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
