import React from 'react';
import '../App.css';

export const Menu = ({children}) => {
    return (
        <div className="d-none d-md-block">
            <nav className="navbar" >
                <div className="navitems">
                    <div className="navtext">
                        Home
                    </div>
                    <div className="navtext">
                        About
                    </div>
                    <div className="navtext">
                        Portfolio
                    </div>
                    <div className="navtext">
                        Articles
                    </div>
                    <div className="navtext">
                        Contact
                    </div>
                </div>
            </nav>
        </div>
    )
}