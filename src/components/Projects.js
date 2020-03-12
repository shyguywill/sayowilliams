import React from 'react';
import '../App.css';

class Projects extends React.Component {

    state = {showInfo: false}

    handleMouseOver() {
        this.setState({showInfo: true})
        console.log('over')
       
    }

    handleMouseOut() {
        this.setState({ showInfo: false })
        console.log('out')
    }

    render() {
        let style = { display: this.state.showInfo ? 'block' : 'none', position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', }
        return (
           <section id="projects">
               <div>
                   <h1>
                       Projects
                   </h1>

                   <div style={{display: 'flex', flexDirection: 'column', }} onMouseEnter={this.handleMouseOver.bind(this)} onMouseLeave={this.handleMouseOut.bind(this)} >
                        
                        <div style={{position: 'relative'}} >

                            <div style={{display: 'flex', flexDirection: 'row', position: 'relative', marginTop: '20px', marginBottom: '20px'}}>
                                <img src={process.env.PUBLIC_URL + '/projects/platter/0.jpg'} alt="logo" />
                                <img src={process.env.PUBLIC_URL + '/projects/platter/1.jpg'} alt="logo" />
                                <img src={process.env.PUBLIC_URL + '/projects/platter/2.jpg'} alt="logo" />
                                <img src={process.env.PUBLIC_URL + '/projects/platter/3.jpg'} alt="logo" />
                                <img src={process.env.PUBLIC_URL + '/projects/platter/4.jpg'} alt="logo" />
                            </div>
                           
                            <div style={{display: this.state.showInfo ? 'block' : 'none', position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(0,0,0,0.5)', minHeight: '100%', minWidth: '100%', }}>
                                <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', justifyContent: 'center', color: 'white', alignItems: 'center'}}>
                                    <div>Swift (iOS) / Dart (Android)</div>
                                    <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/projects/platter/logo.png'})`, backgroundSize: 'cover', height: '60px', width: '60px'}}/>
                                    <div>Platter - Food Recipes</div>
                                    <div >Find new and exciting recipes with ingredients you already have in your fridge!</div>
                                  
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