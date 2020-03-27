import React from 'react';
import '../App.css';
import { Button } from 'reactstrap'

class Projects extends React.Component {

    state = {infoDisplay: 0, sectionVisible: false }

    isSection(el) {
        //console.log(el.getBoundingClientRect().top)
        
        return el.getBoundingClientRect().top < window.innerHeight;
    }
      
    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
    }
      
    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }
      
      trackScrolling = () => {
        const wrappedElement = document.getElementById('projects'); 
        if (this.isSection(wrappedElement)){
            console.log('is project')
            this.props.setSection('projects');
            this.setState({ sectionVisible: true})
            //document.removeEventListener('scroll', this.trackScrolling);
        }
      };

    handleMouseOver(index) {
        this.setState({infoDisplay: index})
        console.log('over')
    }

    handleMouseOut() {
        this.setState({ infoDisplay: 0 })
        console.log('out')
    }



    render() {
        return (
           <section id="projects" className={this.state.sectionVisible ? "animated fadeInRightBig delay-1s" : "section-pre-loaded"}>
               <div style={{minHeight: '70vh', display: 'flex', flexDirection: 'column'}} className="d-none d-sm-block">
               <div className="section-header">
                        <h1 >
                            Projects
                        </h1>
                        <div style={{height: '2px', width: '50px', backgroundColor: 'black'}}/>
                    </div>

                   <div style={{marginBottom: '20px', marginTop: '20px'}}>
                        <h3>Apps</h3>

                        <div style={{ marginTop: '20px', marginBottom: '20px'}} onMouseEnter={() => this.handleMouseOver(1)} onMouseLeave={() => this.handleMouseOut()} >
                                <div style={{position: 'relative'}} >
                                
                                    <div style={{display: 'flex', flexDirection: 'row', position: 'relative', flexWrap: 'wrap', justifyContent: 'center'}}>
                                        <img src={process.env.PUBLIC_URL + '/projects/platter/0.jpg'} alt="logo" style={{width: '25%', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}}/>
                                        <img src={process.env.PUBLIC_URL + '/projects/platter/3.jpg'} alt="logo3" style={{width: '25%'}}/>
                                        <img src={process.env.PUBLIC_URL + '/projects/platter/2.jpg'} alt="logo2" style={{width: '25%'}}/>
                                        <img src={process.env.PUBLIC_URL + '/projects/platter/4.jpg'} alt="logo4" style={{width: '25%', borderTopRightRadius: '5px', borderBottomRightRadius: '5px'}}/> 
                                    </div>
                                
                                    <div style={{display: this.state.infoDisplay === 1 ? 'flex' : 'none', position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: '5px' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', justifyContent: 'space-evenly', color: 'white', alignItems: 'center', height: '100%'}}>
                                            <div>
                                                <h3>Swift / Dart </h3>
                                                <h2>Platter - Food Recipes</h2>
                                            </div>
                                            <a href="http://theplatterapp.com/" style={{ color: '#32FBA4'}}>
                                                <div >
                                                    Learn More 
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        <div style={{}} onMouseEnter={() => this.handleMouseOver(2)} onMouseLeave={() => this.handleMouseOut()} >
                                <div style={{position: 'relative' }} >

                                    <div style={{display: 'flex', flexDirection: 'row', position: 'relative', flexWrap: 'wrap', justifyContent: 'center'}}>
                                        <img src={process.env.PUBLIC_URL + '/projects/tightup/ionic 1.png'} alt="logo" style={{width: '25%', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}}/>
                                        <img src={process.env.PUBLIC_URL + '/projects/tightup/ionic 2.png'} alt="logo" style={{width: '25%'}}/>
                                        <img src={process.env.PUBLIC_URL + '/projects/tightup/versa 1.png'} alt="logo" style={{width: '25%'}}/>
                                        <img src={process.env.PUBLIC_URL + '/projects/tightup/versa 2.png'} alt="logo" style={{width: '25%', borderTopRightRadius: '5px', borderBottomRightRadius: '5px'}}/>
                                    </div>
                                
                                    <div style={{display: this.state.infoDisplay === 2 ? 'flex' : 'none', position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: '5px' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', justifyContent: 'space-evenly', color: 'white', alignItems: 'center', height: '100%'}}>
                                            <div>
                                                <h3> JavaScript / CSS / SVG </h3>
                                                <h2>Tight Up - Kegel Trainer </h2>
                                            </div>
                                            
                                            <a href="https://gallery.fitbit.com/details/a4758ffa-d763-41ea-bd57-f187f290efdf" style={{ color: '#32FBA4'}}>
                                                <div >
                                                    Learn More 
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                   </div>


                   <div style={{marginBottom: '20px', marginTop: '20px', }}>
                        <h3>Gallery</h3>
                        
                        <div style={{display: 'flex', flexDirection: 'row', marginBottom: '20px', marginTop: '20px', justifyContent: 'center', width: '100%', flexWrap: 'wrap'}}>
                            <div style={{width: '33%', minWidth: '300px', flexGrow: 1, marginBottom: '20px',}} onMouseEnter={() => this.handleMouseOver(3)} onMouseLeave={() => this.handleMouseOut()} >
                                    <div style={{position: 'relative', width: '100%' }} >

                                    <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/projects/features/images/cam.jpg'})`, backgroundSize: 'cover', width: '100%', height: '300px', position: 'relative', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}}></div>
                                    
                                        <div style={{display: this.state.infoDisplay === 3 ? 'flex' : 'none', position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', justifyContent: 'space-evenly', color: 'white', alignItems: 'center'}}>
                                                <h4> React Native </h4>
                                                <h3>Camera Library</h3>
                                                <div>I  designed, built and implemented a camera library, which is a feature currently being used in the Synced application.</div>
                                                {/* <div onClick={() => this.props.toggleGallery(true, 'cam', 'web')}>Preview</div> */}
                                                {/* <button >Preview</button> */}
                                                <Button onClick={() => this.props.toggleGallery(true, 'cam', 'web')} style={{marginTop: '5px', color: '#32FBA4'}}> Preview </Button>
                                            </div>
                                        </div>

                                    </div>
                            </div>
                            <div style={{width: '33%', minWidth: '300px', flexGrow: 1, marginBottom: '20px'}} onMouseEnter={() => this.handleMouseOver(4)} onMouseLeave={() => this.handleMouseOut()} >
                                    <div style={{position: 'relative', width: '100%'}} >

                                    <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/projects/features/images/reactions.jpg'})`, backgroundSize: 'cover', width: '100%', height: '300px', borderTopRightRadius: '5px', borderBottomRightRadius: '5px'}}></div>
                                    
                                        <div style={{display: this.state.infoDisplay === 4 ? 'flex' : 'none', position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', justifyContent: 'space-evenly', color: 'white', alignItems: 'center'}}>
                                                <h4> React Native </h4>
                                                <h3>Reaction Component</h3>
                                                {/* <div>I designed and built the user reactions that are being used in the synced appication.</div> */}
                                                <div>I was also responsible for designing and building the user reactions feature within the Synced application which that have proven to be useful in increasing user engagement.</div>
                                                <Button onClick={() => this.props.toggleGallery(true, 'reactions', 'web')} style={{marginTop: '5px', color: '#32FBA4'}}> Preview </Button>
                                                {/* <button onClick={() => this.props.toggleGallery(true, 'reactions', 'web')}>Preview</button> */}
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                   </div>
               </div>






               <div className="d-sm-none">
               <div className="section-header" style={{marginTop: '50px'}}>
                        <h1 >
                            Projects
                        </h1>
                        <div style={{height: '2px', width: '50px', backgroundColor: 'black'}}/>
                    </div>

                   <div style={{marginBottom: '20px', marginTop: '20px'}}>
                        <h3>Apps</h3>

                        <div style={{ marginTop: '20px', marginBottom: '20px'}} onMouseEnter={() => this.handleMouseOver(1)} onMouseLeave={() => this.handleMouseOut()} >
                                <div style={{position: 'relative'}} >
                                
                                    <div style={{display: 'flex', flexDirection: 'row', position: 'relative', flexWrap: 'wrap', justifyContent: 'center'}}>
                                        <img src={process.env.PUBLIC_URL + '/projects/platter/0.jpg'} alt="logo" style={{width: '50%'}}/>
                                        <img src={process.env.PUBLIC_URL + '/projects/platter/3.jpg'} alt="logo3" style={{width: '50%'}}/>
                                    </div>
                                
                                    <div style={{display: this.state.infoDisplay === 1 ? 'flex' : 'none', position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', justifyContent: 'space-evenly', color: 'white', alignItems: 'center', height: '100%'}}>
                                            <div>
                                                <h3>Swift / Dart </h3>
                                                <h2>Platter - Food Recipes</h2>
                                            </div>
                                            
                                            <a href="http://theplatterapp.com/" style={{ color: '#32FBA4'}}>
                                                <div >
                                                    Learn More 
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                        </div>


                        <div style={{}} onMouseEnter={() => this.handleMouseOver(2)} onMouseLeave={() => this.handleMouseOut()} >
                                <div style={{position: 'relative' }} >

                                    <div style={{display: 'flex', flexDirection: 'row', position: 'relative', flexWrap: 'wrap', justifyContent: 'center'}}>
                                        <img src={process.env.PUBLIC_URL + '/projects/tightup/ionic 2.png'} alt="logo" style={{width: '50%'}}/>
                                        <img src={process.env.PUBLIC_URL + '/projects/tightup/versa 2.png'} alt="logo" style={{width: '50%'}}/>
                                    </div>
                                
                                    <div style={{display: this.state.infoDisplay === 2 ? 'flex' : 'none', position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', justifyContent: 'space-evenly', color: 'white', alignItems: 'center', height: '100%'}}>
                                            <div>
                                                <h3> JavaScript / CSS / SVG </h3>
                                                <h2>Tight Up - Kegel Trainer </h2>
                                            </div>
                                            
                                            <a href="https://gallery.fitbit.com/details/a4758ffa-d763-41ea-bd57-f187f290efdf" style={{ color: '#32FBA4'}}>
                                                <div >
                                                    Learn More 
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                   </div>



                   <div style={{marginBottom: '20px', marginTop: '20px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                        <h3>Gallery</h3>

                        <div style={{display: 'flex', flexDirection: 'row', marginBottom: '20px', marginTop: '20px', justifyContent: 'center', width: '100%', flexWrap: 'wrap'}}>
                            <div style={{width: '100%', marginBottom: '20px'}} onMouseEnter={() => this.handleMouseOver(3)} onMouseLeave={() => this.handleMouseOut()} >
                                    <div style={{position: 'relative', width: '100%' }} >

                                        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/projects/features/images/cam.jpg'})`, backgroundSize: 'cover', width: '100%', height: '300px', position: 'relative'}}></div>
                                    
                                        <div style={{display: this.state.infoDisplay === 3 ? 'flex' : 'none', position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', justifyContent: 'space-evenly', color: 'white', alignItems: 'center'}}>
                                                <h4> React Native </h4>
                                                <h3>Camera Library</h3>
                                                <div>I  designed, built and implemented a camera library, which is a feature currently being used in the Synced application.</div>
                                                <Button onClick={() => this.props.toggleGallery(true, 'cam', 'mobile')} style={{marginTop: '5px', color: '#32FBA4'}}> Preview </Button>
                                                {/* <button onClick={() => this.props.toggleGallery(true, 'cam', 'mobile')}>Preview</button> */}
                                            </div>
                                        </div>

                                    </div>
                            </div>
                            <div style={{width: '100%', marginBottom: '20px'}} onMouseEnter={() => this.handleMouseOver(4)} onMouseLeave={() => this.handleMouseOut()} >
                                    <div style={{position: 'relative', width: '100%'}} >

                                    <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/projects/features/images/reactions.jpg'})`, backgroundSize: 'cover', width: '100%', height: '300px'}}></div>
                                    
                                        <div style={{display: this.state.infoDisplay === 4 ? 'flex' : 'none', position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', justifyContent: 'space-evenly', color: 'white', alignItems: 'center'}}>
                                                <h4> React Native </h4>
                                                <h3>Reaction Component</h3>
                                                <div>I was also responsible for designing and building the user reactions feature within the Synced application which that have proven to be useful in increasing user engagement.</div>
                                                <Button onClick={() => this.props.toggleGallery(true, 'reactions', 'mobile')} style={{marginTop: '5px', color: '#32FBA4'}}> Preview </Button>
                                                {/* <button onClick={() => this.props.toggleGallery(true, 'reactions', 'mobile')}>Preview</button> */}
                                            </div>
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

export { Projects };