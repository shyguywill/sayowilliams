import React from 'react';
import '../App.css';



class About extends React.Component {

    state = {imageSelected: 0, sectionVisible: false}

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
        const wrappedElement = document.getElementById('about'); 
        if (this.isSection(wrappedElement)){
            console.log('is about')
            this.props.setSection('about')
            this.setState({ sectionVisible: true})
            //document.removeEventListener('scroll', this.trackScrolling);
        }
      };

    handleMouseOver(index) {
        this.setState({imageSelected: 1})
        console.log('over')
       
    }

    handleMouseOut() {
        this.setState({ imageSelected: 0 })
        console.log('out')
    }
    render() {
        const image = [process.env.PUBLIC_URL + '/me/me1.jpeg', process.env.PUBLIC_URL + '/me/me2.jpeg']
        return (
            <section id="about" className={this.state.sectionVisible ? "animated fadeInLeftBig " : "section-pre-loaded"}>
                <div>
                    <div className="section-header" style={{marginTop: '50px'}}>
                        <h1 >
                            About
                        </h1>
                        <div style={{height: '2px', width: '50px', backgroundColor: 'black'}}/>
                    </div>
                    
                    
                    <div className="d-none d-md-block">
                        <div className="about">
                            <div className="about-section" style={{backgroundImage: `url(${image[this.state.imageSelected]})`, backgroundSize: 'cover', }} onMouseEnter={() => this.handleMouseOver()} onMouseLeave={() => this.handleMouseOut()}>
                                {/* <div className="profile-image" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}/> */}
                                <div className="bio-text">
                                    <h2> Who am I ? </h2>
                                    <div> 
                                        I am a front-end developer with a passion for creating inuitive and dynamic user experiences.
                                        A tinkerer and a problem solver, I find fulfilment in building creative solutions to problems.
                                    </div>
                                </div>
                            </div>
                            <div className="about-section"> 
                                <div className="skills-main-bar">
                                    <div className="skills" style={{width: '90%'}}>
                                        {/* <div className="about-section" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/skills/react.png'})`, backgroundSize: 'contain', height: '50px', width: '50px'}}></div> */}
                                        <div className="skill-text">React Native</div>
                                        <img src={process.env.PUBLIC_URL + '/skills/react.png'} alt="logo" className="skill-image" />
                                    </div>
                                </div>
                                
                                <div className="skills-main-bar">
                                    <div className="skills" style={{width: '90%'}}>
                                        <div className="skill-text" >Swift / iOS</div>
                                        <img src={process.env.PUBLIC_URL + '/skills/swift.png'} alt="logo" className="skill-image"  />
                                    </div>
                                </div>

                                <div className="skills-main-bar">
                                    <div className="skills" style={{width: '80%'}}>
                                        <img src={process.env.PUBLIC_URL + '/skills/react.png'} alt="logo" className="skill-image" />
                                        <div className="skill-text">React JS</div>
                                    </div>
                                </div>
                                
                                <div className="skills-main-bar">
                                    <div className="skills" style={{width: '80%'}}>
                                        <img src={process.env.PUBLIC_URL + '/skills/js.png'} alt="logo" className="skill-image" />
                                        <div className="skill-text">Javascript</div>
                                    </div>
                                </div>

                                <div className="skills-main-bar" >
                                    <div className="skills" style={{width: '70%'}}>
                                        <img src={process.env.PUBLIC_URL + '/skills/css.png'} alt="logo" className="skill-image" />
                                        <div className="skill-text">CSS</div>
                                    </div>
                                </div>

                                <div className="skills-main-bar" >
                                    <div className="skills" style={{width: '60%'}}>
                                        <img src={process.env.PUBLIC_URL + '/skills/react.png'} alt="logo" className="skill-image" />
                                        <div className="skill-text">React-redux</div>
                                    </div>
                                </div>

                                <div className="skills-main-bar" >
                                    <div className="skills" style={{width: '60%'}}>
                                        <img src={process.env.PUBLIC_URL + '/skills/dart.png'} alt="logo" className="skill-image" />
                                        <div className="skill-text">Dart / Flutter</div>
                                    </div>
                                </div>

                                <div className="skills-main-bar" >
                                    <div className="skills" style={{width: '50%'}}>
                                        <img src={process.env.PUBLIC_URL + '/skills/html.png'} alt="logo" className="skill-image" />
                                        <div className="skill-text">HTML</div>
                                    </div>
                                </div>

                                <div className="skills-main-bar" >
                                    <div className="skills" style={{width: '50%'}}>
                                        <img src={process.env.PUBLIC_URL + '/skills/nodejs.png'} alt="logo" className="skill-image" />
                                        <div className="skill-text">Node JS</div>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </div>

                    <div className="d-md-none">
                        <div className="mobile">
                            <div className="mobile-column" style={{backgroundImage: `url(${image[1]})`, backgroundSize: 'cover', height: '80vh', borderRadius: '10px'}}>
                               
                                <div className="bio-text">
                                    <h2> Who am I ? </h2>
                                    <div> 
                                        I am a front-end developer with a passion for creating inuitive and dynamic user experiences.
                                        A tinkerer and a problem solver, I find fulfilment in building creative solutions to problems.
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-column" style={{marginTop: '30px'}}> 
                            <div className="skills-main-bar-mobile">
                                    <div className="skills" style={{width: '90%'}}>
                                        <img src={process.env.PUBLIC_URL + '/skills/react.png'} alt="logo" className="skill-image" />
                                        {/* <div className="about-section" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/skills/react.png'})`, backgroundSize: 'contain', height: '50px', width: '50px'}}></div> */}
                                        <div className="skill-text">React Native</div>
                                    </div>
                                </div>
                                
                                <div className="skills-main-bar-mobile">
                                    <div className="skills" style={{width: '90%'}}>
                                        <img src={process.env.PUBLIC_URL + '/skills/swift.png'} alt="logo" className="skill-image" />
                                        <div className="skill-text">Swift/iOS</div>
                                    </div>
                                </div>

                                <div className="skills-main-bar-mobile">
                                    <div className="skills" style={{width: '80%'}}>
                                        <img src={process.env.PUBLIC_URL + '/skills/react.png'} alt="logo" className="skill-image" />
                                        <div className="skill-text">React JS</div>
                                    </div>
                                </div>
                                
                                <div className="skills-main-bar-mobile">
                                    <div className="skills" style={{width: '80%'}}>
                                        <img src={process.env.PUBLIC_URL + '/skills/js.png'} alt="logo" className="skill-image" />
                                        <div className="skill-text">Javascript</div>
                                    </div>
                                </div>

                                <div className="skills-main-bar-mobile" >
                                    <div className="skills" style={{width: '70%'}}>
                                        <img src={process.env.PUBLIC_URL + '/skills/css.png'} alt="logo" className="skill-image" />
                                        <div className="skill-text">CSS</div>
                                    </div>
                                </div>

                                <div className="skills-main-bar-mobile" >
                                    <div className="skills" style={{width: '60%'}}>
                                        <img src={process.env.PUBLIC_URL + '/skills/react.png'} alt="logo" className="skill-image" />
                                        <div className="skill-text">React-redux</div>
                                    </div>
                                </div>

                                <div className="skills-main-bar-mobile" >
                                    <div className="skills" style={{width: '60%'}}>
                                        <img src={process.env.PUBLIC_URL + '/skills/dart.png'} alt="logo" className="skill-image" />
                                        <div className="skill-text">Dart / Flutter</div>
                                    </div>
                                </div>

                                <div className="skills-main-bar-mobile" >
                                    <div className="skills" style={{width: '50%'}}>
                                        <img src={process.env.PUBLIC_URL + '/skills/html.png'} alt="logo" className="skill-image" />
                                        <div className="skill-text">HTML</div>
                                    </div>
                                </div>

                                <div className="skills-main-bar-mobile" >
                                    <div className="skills" style={{width: '50%'}}>
                                        <img src={process.env.PUBLIC_URL + '/skills/node.png'} alt="logo" className="skill-image" />
                                        <div className="skill-text">Node js</div>
                                    </div>
                                </div>

                                

                                
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export { About };