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
       // let style = { display: this.state.infoDisplay === 1 ? 'block' : 'none', position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', }
        return (
           <section id="projects">
               <div style={{minHeight: '70vh', display: 'flex', flexDirection: 'column'}}>
                   <h1 style={{marginBottom: '40px'}}>
                       Projects
                   </h1>

                   <div>Apps</div>

                   <div style={{ marginBottom: '20px', marginTop: '20px'  }} onMouseEnter={() => this.handleMouseOver(1)} onMouseLeave={() => this.handleMouseOut()} >
                        <div style={{position: 'relative'}} >
                        
                            <div style={{display: 'flex', flexDirection: 'row', position: 'relative', flexWrap: 'wrap', justifyContent: 'center'}}>
                                <img src={process.env.PUBLIC_URL + '/projects/platter/0.jpg'} alt="logo" style={{height: '35vw'}}/>
                                <img src={process.env.PUBLIC_URL + '/projects/platter/2.jpg'} alt="logo2" style={{height: '35vw'}}/>
                                <img src={process.env.PUBLIC_URL + '/projects/platter/3.jpg'} alt="logo3" style={{height: '35vw'}}/>
                                <img src={process.env.PUBLIC_URL + '/projects/platter/4.jpg'} alt="logo4" style={{height: '35vw'}}/> 
                            </div>
                           
                            <div style={{display: this.state.infoDisplay === 1 ? 'flex' : 'none', position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', justifyContent: 'center', color: 'white', alignItems: 'center', height: '100%'}}>
                                    <div>Swift / Dart </div>
                                    <div>Platter - Food Recipes</div>
                                    <a href="http://theplatterapp.com/" style={{ color: '#32FBA4'}}>
                                        <div >
                                            Learn More 
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                   </div>


                   <div style={{marginBottom: '20px', marginTop: '20px'}} onMouseEnter={() => this.handleMouseOver(2)} onMouseLeave={() => this.handleMouseOut()} >
                        <div style={{position: 'relative' }} >

                            <div style={{display: 'flex', flexDirection: 'row', position: 'relative', flexWrap: 'wrap', justifyContent: 'center'}}>
                                <img src={process.env.PUBLIC_URL + '/projects/tightup/ionic 1.png'} alt="logo" style={{height: '25vw'}}/>
                                <img src={process.env.PUBLIC_URL + '/projects/tightup/ionic 2.png'} alt="logo" style={{height: '25vw'}}/>
                                <img src={process.env.PUBLIC_URL + '/projects/tightup/versa 1.png'} alt="logo" style={{height: '25vw'}}/>
                                <img src={process.env.PUBLIC_URL + '/projects/tightup/versa 2.png'} alt="logo" style={{height: '25vw'}}/>
                            </div>
                           
                            <div style={{display: this.state.infoDisplay === 2 ? 'flex' : 'none', position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', justifyContent: 'center', color: 'white', alignItems: 'center'}}>
                                    <div> JavaScript / CSS / SVG </div>
                                    <div>Tight Up - Kegel Trainer </div>
                                    <a href="https://gallery.fitbit.com/details/a4758ffa-d763-41ea-bd57-f187f290efdf" style={{ color: '#32FBA4'}}>
                                        <div >
                                            Learn More 
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                   </div>

                   <div> Features</div>
               </div>
           </section>
        );
    }
}

export { Projects };