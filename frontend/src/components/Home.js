import React from 'react';
import logo from '../logo.svg';
import './Home.scss';

class HomePage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <header className="App-header">
            <div>
              <img src={logo} className="App-logo" alt="logo" />
              <p>Protobuf / JSON proof of concept</p>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default HomePage;
