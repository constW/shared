import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/title';
import Catalog from './components/catalog';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <section className="App-section">
          <img src={logo} className="App-logo" alt="logo" />
          <Title />
          <Catalog />
        </section>
      </div>
    );
  }
}

export default App;
