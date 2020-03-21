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
                    <a aria-current="true" href="#home"  className="navtext">
                        Home
                    </a>
                    <a aria-current="true" href="#about" className="navtext">
                        About
                    </a>
                    <a aria-current="true" href="#projects" className="navtext">
                        Projects
                    </a>
                    <a aria-current="true" href="#articles" className="navtext">
                        Articles
                    </a>
                    <a aria-current="true" href="#contact" className="navtext">
                        Contact
                    </a>
                </div>
            </nav>
        </div>
    )
}