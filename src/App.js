import React from 'react';
import './App.css';
import {Articles, About, Projects, Header, Contact, Footer} from './components/index';
import Gallery from './components/Gallery';

class App extends React.Component {

  state = { showGallery: false, asset: '', platform: '' }

  toggleGallery = (showGallery, asset, platform) => {
    this.setState({ showGallery, asset, platform })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="body">
          <About />
          <Projects 
            toggleGallery={this.toggleGallery}
          />
          <Articles />
          <Contact />
        </div>
        <Footer />
        <Gallery 
          showGallery={this.state.showGallery}
          toggleGallery={this.toggleGallery}
          asset ={this.state.asset}
          platform={this.state.platform}
        />
      </div>
    )
  }
}

export default App;
