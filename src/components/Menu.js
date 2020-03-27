import React from 'react';
import '../App.css';

export const Menu = (props) => {

    const headerStyle = {
        bottom: '-50px',left: '0px', position: 'absolute'
    }

    const pageStyle = {
        top: '0px',left: '0px', position: 'fixed', 
    }
    return (
        <div className="d-none d-md-block">
            <nav className="navbar" style={props.headerVisible ?  headerStyle : pageStyle} >
                <div className="navitems">
                    <a aria-current="true" href="#home"  className="navtext" style={{color: props.section === 'home' ? '#32FBA4' : 'white'}}>
                        Home
                    </a>
                    <a aria-current="true" href="#about" className="navtext" style={{color: props.section === 'about' ? '#32FBA4' : 'white'}}>
                        About
                    </a>
                    <a aria-current="true" href="#projects" className="navtext" style={{color: props.section === 'projects' ? '#32FBA4' : 'white'}}>
                        Projects
                    </a>
                    <a aria-current="true" href="#articles" className="navtext" style={{color: props.section === 'articles' ? '#32FBA4' : 'white'}}>
                        Articles
                    </a>
                    <a aria-current="true" href="#contact" className="navtext" style={{color: props.section === 'contact' ? '#32FBA4' : 'white'}}>
                        Contact
                    </a>
                </div>
            </nav>
        </div>
    )
}