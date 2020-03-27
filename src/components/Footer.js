import React from 'react';
import '../App.css';





class Footer extends React.Component {
    
    render() {
        return (
            <footer id="footer" className="App-footer">
                <div>A Sayo production.</div>
                <div>
                    {/* <div style={{display: 'flex', flexDirection: 'row',}}>
                        <div style={{marginRight: '2px'}}>Beautiful Animations courtsey of</div>
                        <a href="https://daneden.me/" style={{marginRight: '2px'}}>
                            <div >
                                Daniel Eden's 
                            </div>
                        </a>
                        <a href="https://daneden.github.io/animate.css/" >
                            <div >
                                Animate CSS
                            </div>
                        </a>
                    </div> */}
                </div>
                {/* <i aria-hidden="true" class="red rocket icon"></i> */}
                
            </footer>
        );
    }
}

export { Footer };

