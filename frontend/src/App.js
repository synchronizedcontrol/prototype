import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './components/Home';
import JsonLoader from './components/Json';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Protubuf POC
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/json" className="nav-link">
                  Json loading
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/protobuf" className="nav-link">
                  Protobuf loading
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid">
          <Route exact path="/" component={HomePage} />
          <Route path="/json" component={JsonLoader} />
        </div>
      </Router>
    </div>
  );
}

export default App;
