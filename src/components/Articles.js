import React from 'react';
import '../App.css';

class Articles extends React.Component {

    state = { sectionVisible: false }

    isSection(el) {
        return el.getBoundingClientRect().top < window.innerHeight;
    }
      
    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
    }
      
    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }
      
      trackScrolling = () => {
        const wrappedElement = document.getElementById('articles'); 
        if (this.isSection(wrappedElement)){
            this.props.setSection('articles');
            console.log('is article')
            this.setState({ sectionVisible: true})
            //document.removeEventListener('scroll', this.trackScrolling);
        }
      };
    render() {
        return (
            <section id="articles" className={this.state.sectionVisible ? "animated fadeInLeftBig " : "section-pre-loaded"}>
            <div>
            <div className="section-header">
                        <h1 >
                            Articles
                        </h1>
                        <div style={{height: '2px', width: '50px', backgroundColor: 'black'}}/>
                    </div>
                <div style={{width: '100%', minHeight: '60vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                    <blockquote class="embedly-card">
                        <h4>
                            <a href="https://medium.com/synced-to-tech-blog/implementing-pinch-to-zoom-in-react-native-8a291ca29ac1" >Implementing Pinch to Zoom in React Native</a>
                        </h4>
                        <p>React native is very versatile and widely used framework, frankly speaking, it is the best in class for creating cross platform applications. So, I was a bit disappointed to discover that React Native doesn't come with a simple pinch to zoom component included in the box.</p>
                    </blockquote>
                    
                    <blockquote class="embedly-card">
                        <h4>
                            <a href="https://blog.synced.to/Linking-React-Native-to-native-code/">Linking React Native to native code</a>
                        </h4>
                        <p>Linking native code to React Native, piece of cake, right? After all it's in the name. Wrong! I found it to be an unnecessarily complex and obscured process.</p>
                    </blockquote>
                </div>
            </div>
        </section>
        );
    }
}

export { Articles };