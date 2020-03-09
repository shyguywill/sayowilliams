import React from 'react';
import './App.css';
import {Articles, About, Projects, Header, Contact} from './components/index';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Projects />
        <Articles />
        <Contact />
      </div>
    )
  }
}

export default App;
