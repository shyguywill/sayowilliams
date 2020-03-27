import React from 'react';
import './App.css';
import {Articles, About, Projects, Header, Contact, Footer} from './components/index';
import Gallery from './components/Gallery';

class App extends React.Component {

  state = { showGallery: false, asset: '', platform: '', section: 'home' }

  toggleGallery = (showGallery, asset, platform) => {
    this.setState({ showGallery, asset, platform })
  }

  setMenuSection = (section) => {
    console.log('setting', section)
    this.setState({ section })
  }

  render() {
    return (
      <div className="App">
        <Header 
          section={this.state.section}
          setSection={this.setMenuSection}
        />
        <div className="body">
          <About 
            setSection={this.setMenuSection}
          />
          <Projects 
            toggleGallery={this.toggleGallery}
            setSection={this.setMenuSection}
          />
          <Articles 
            setSection={this.setMenuSection}
          />
          <Contact 
            setSection={this.setMenuSection}
          />
        </div>
        <Footer 
          setSection={this.setMenuSection}
        />
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
