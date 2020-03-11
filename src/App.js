import React from 'react';
import './App.css';
import {Articles, About, Projects, Header, Contact} from './components/index';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="body">
          <About />
          <Projects />
          <Articles />
          <Contact />
        </div>
      </div>
    )
  }
}

export default App;
