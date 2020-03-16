import React from 'react';
import '../App.css';

export const Menu = (props) => {

    const headerStyle = {
        bottom: '-50px',left: '0px', position: 'absolute'
    }

    const pageStyle = {
        top: '0px',left: '0px', position: 'fixed'
    }
    return (
        <div className="d-none d-md-block">
            <nav className="navbar" style={props.headerVisible ?  headerStyle : pageStyle} >
                <div className="navitems">
                    <a href="#home" className="navtext">
                        Home
                    </a>
                    <a href="#about" className="navtext">
                        About
                    </a>
                    <a href="#projects" className="navtext">
                        Projects
                    </a>
                    <a href="#articles" className="navtext">
                        Articles
                    </a>
                    <a href="#contact" className="navtext">
                        Contact
                    </a>
                </div>
            </nav>
        </div>
    )
}