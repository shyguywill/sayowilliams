import React from 'react';
import '../App.css';
import { Menu } from './Menu'




class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
            <div >
            <div style={{display: 'flex', flexDirection: 'row',}}>
                    
                        <h1>
                            Hello, 
                        </h1>
                   
                    <div className="header-second" style={{marginLeft: '10px', display: 'flex', flexDirection: 'row'}}> 
                        <h1>
                            I'm
                        </h1>
                        <span style={{marginLeft: '8px', color: '#1fe5bd', display: 'flex', }}>
                        <h1>Sayo Williams.</h1>
                        </span>
                    </div>
                </div>
                
                <div className="header-third">
                    <h1>
                        I build things with code.
                    </h1>
                </div>

            </div>
                
                {/* <i aria-hidden="true" class="red rocket icon"></i> */}
                
                <a href="#about" style={{marginTop: '100px', color: '#1fe5bd'}}>
                    <div className="header-button">
                        View my work 
                    </div>
                </a>
                <Menu />
            </header>
        );
    }
}

export { Header };

