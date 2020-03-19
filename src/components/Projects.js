import React from 'react';
import '../App.css';

class Projects extends React.Component {

    state = {infoDisplay: 0}

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
           <section id="projects">
               <div style={{minHeight: '70vh', display: 'flex', flexDirection: 'column'}} className="d-none d-sm-block">
                   <h1 >
                       Projects
                   </h1>

                   <div style={{marginBottom: '20px', marginTop: '20px'}}>
                        <div >Apps</div>

                        <div style={{ marginTop: '20px', marginBottom: '20px'}} onMouseEnter={() => this.handleMouseOver(1)} onMouseLeave={() => this.handleMouseOut()} >
                                <div style={{position: 'relative'}} >
                                
                                    <div style={{display: 'flex', flexDirection: 'row', position: 'relative', flexWrap: 'wrap', justifyContent: 'center'}}>
                                        <img src={process.env.PUBLIC_URL + '/projects/platter/0.jpg'} alt="logo" style={{width: '25%'}}/>
                                        <img src={process.env.PUBLIC_URL + '/projects/platter/3.jpg'} alt="logo3" style={{width: '25%'}}/>
                                        <img src={process.env.PUBLIC_URL + '/projects/platter/2.jpg'} alt="logo2" style={{width: '25%'}}/>
                                        <img src={process.env.PUBLIC_URL + '/projects/platter/4.jpg'} alt="logo4" style={{width: '25%'}}/> 
                                    </div>
                                
                                    <div style={{display: this.state.infoDisplay === 1 ? 'flex' : 'none', position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', justifyContent: 'space-between', color: 'white', alignItems: 'center', height: '100%'}}>
                                            <div>
                                                <div>Swift / Dart </div>
                                                <div>Platter - Food Recipes</div>
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
                                        <img src={process.env.PUBLIC_URL + '/projects/tightup/ionic 1.png'} alt="logo" style={{width: '25%'}}/>
                                        <img src={process.env.PUBLIC_URL + '/projects/tightup/ionic 2.png'} alt="logo" style={{width: '25%'}}/>
                                        <img src={process.env.PUBLIC_URL + '/projects/tightup/versa 1.png'} alt="logo" style={{width: '25%'}}/>
                                        <img src={process.env.PUBLIC_URL + '/projects/tightup/versa 2.png'} alt="logo" style={{width: '25%'}}/>
                                    </div>
                                
                                    <div style={{display: this.state.infoDisplay === 2 ? 'flex' : 'none', position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', justifyContent: 'space-between', color: 'white', alignItems: 'center', height: '100%'}}>
                                            <div>
                                                <div> JavaScript / CSS / SVG </div>
                                                <div>Tight Up - Kegel Trainer </div>
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
                        <div> Gallery</div>
                        
                        <div style={{display: 'flex', flexDirection: 'row', marginBottom: '20px', marginTop: '20px', justifyContent: 'center', width: '100%', flexWrap: 'wrap'}}>
                            <div style={{width: '33%', minWidth: '300px', flexGrow: 1, marginBottom: '20px'}} onMouseEnter={() => this.handleMouseOver(3)} onMouseLeave={() => this.handleMouseOut()} >
                                    <div style={{position: 'relative', width: '100%' }} >

                                    <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/projects/features/images/cam.jpg'})`, backgroundSize: 'cover', width: '100%', height: '300px', position: 'relative'}}></div>
                                    
                                        <div style={{display: this.state.infoDisplay === 3 ? 'flex' : 'none', position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', justifyContent: 'center', color: 'white', alignItems: 'center'}}>
                                                <div> React Native </div>
                                                <div>Camera Library</div>
                                                <a href="https://gallery.fitbit.com/details/a4758ffa-d763-41ea-bd57-f187f290efdf" style={{ color: '#32FBA4'}}>
                                                    <div >
                                                        Learn More 
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                            </div>
                            <div style={{width: '33%', minWidth: '300px', flexGrow: 1, marginBottom: '20px'}} onMouseEnter={() => this.handleMouseOver(4)} onMouseLeave={() => this.handleMouseOut()} >
                                    <div style={{position: 'relative', width: '100%'}} >

                                    <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/projects/features/images/reactions.jpg'})`, backgroundSize: 'cover', width: '100%', height: '300px'}}></div>
                                    
                                        <div style={{display: this.state.infoDisplay === 4 ? 'flex' : 'none', position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', justifyContent: 'center', color: 'white', alignItems: 'center'}}>
                                                <div> React Native </div>
                                                <div>Reaction Component</div>
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
                   </div>
               </div>






               <div className="d-sm-none">
                    <h1 >
                       Projects
                   </h1>

                   <div style={{marginBottom: '20px', marginTop: '20px'}}>
                        <div >Apps</div>

                        <div style={{ marginTop: '20px', marginBottom: '20px'}} onMouseEnter={() => this.handleMouseOver(1)} onMouseLeave={() => this.handleMouseOut()} >
                                <div style={{position: 'relative'}} >
                                
                                    <div style={{display: 'flex', flexDirection: 'row', position: 'relative', flexWrap: 'wrap', justifyContent: 'center'}}>
                                        <img src={process.env.PUBLIC_URL + '/projects/platter/0.jpg'} alt="logo" style={{width: '50%'}}/>
                                        <img src={process.env.PUBLIC_URL + '/projects/platter/3.jpg'} alt="logo3" style={{width: '50%'}}/>
                                    </div>
                                
                                    <div style={{display: this.state.infoDisplay === 1 ? 'flex' : 'none', position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', justifyContent: 'space-between', color: 'white', alignItems: 'center', height: '100%'}}>
                                            <div>
                                                <div>Swift / Dart </div>
                                                <div>Platter - Food Recipes</div>
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
                                        <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', justifyContent: 'space-between', color: 'white', alignItems: 'center', height: '100%'}}>
                                            <div>
                                                <div> JavaScript / CSS / SVG </div>
                                                <div>Tight Up - Kegel Trainer </div>
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
                        <div> Gallery</div>

                        <div style={{display: 'flex', flexDirection: 'row', marginBottom: '20px', marginTop: '20px', justifyContent: 'center', width: '100%', flexWrap: 'wrap'}}>
                            <div style={{width: '100%', marginBottom: '20px'}} onMouseEnter={() => this.handleMouseOver(3)} onMouseLeave={() => this.handleMouseOut()} >
                                    <div style={{position: 'relative', width: '100%' }} >

                                        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/projects/features/images/cam.jpg'})`, backgroundSize: 'cover', width: '100%', height: '300px', position: 'relative'}}></div>
                                    
                                        <div style={{display: this.state.infoDisplay === 3 ? 'flex' : 'none', position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', justifyContent: 'center', color: 'white', alignItems: 'center'}}>
                                                <div> React Native </div>
                                                <div>Camera Library</div>
                                                <a href="https://gallery.fitbit.com/details/a4758ffa-d763-41ea-bd57-f187f290efdf" style={{ color: '#32FBA4'}}>
                                                    <div >
                                                        Learn More 
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                            </div>
                            <div style={{width: '100%', marginBottom: '20px'}} onMouseEnter={() => this.handleMouseOver(4)} onMouseLeave={() => this.handleMouseOut()} >
                                    <div style={{position: 'relative', width: '100%'}} >

                                    <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/projects/features/images/reactions.jpg'})`, backgroundSize: 'cover', width: '100%', height: '300px'}}></div>
                                    
                                        <div style={{display: this.state.infoDisplay === 4 ? 'flex' : 'none', position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', justifyContent: 'center', color: 'white', alignItems: 'center'}}>
                                                <div> React Native </div>
                                                <div>Reaction Component</div>
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
                   </div>
               </div>
           </section>
        );
    }
}

export { Projects };