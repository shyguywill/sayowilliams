import React from 'react';
import '../App.css';

class About extends React.Component {
    render() {
        const image = 'https://media.gq.com/photos/5963fe297bf9083f8bf87fcd/master/w_2000,h_2667,c_limit/john-boyega-burberry-close-up-0817-GQ-FEBO12-01.jpg'
        return (
            <section id="about">
                <div>
                    <h1 style={{marginBottom: '50px'}}>
                        About
                    </h1>
                    
                    <div className="d-none d-md-block">
                        <div className="about">
                            <div className="about-section" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', height: '80vh', borderRadius: '10px'}}>
                                {/* <div className="profile-image" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}/> */}

                                <div className="about-text">
                                    <h2> Who am I ? </h2>
                                    <div> 
                                        I am a front-end developer with a passion for creating inuitive and dynamic user experiences.
                                        My "why" is being problem solver, so I find fulfilment in solving problems in creative ways. I also enjoy learning, in fact, I am a self-taught developer.
                                        My personal motto is ABLE - Always be learning, always be evolving.
                                    </div>
                                </div>
                            </div>
                            <div className="about-section"> 
                                <div>Skills</div> 
                                <div>Skills list</div>
                            </div>
                        </div>
                    </div>

                    <div className="d-md-none">
                        <div className="mobile">
                            <div className="mobile-column" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', height: '80vh', borderRadius: '10px'}}>
                               
                                <div className="about-text">
                                    <h2> Who am I ? </h2>
                                    <div> 
                                        I am a front-end developer with a passion for creating inuitive and dynamic user experiences.
                                        My "why" is being problem solver, so I find fulfilment in solving problems in creative ways. I also enjoy learning, in fact, I am a self-taught developer.
                                        My personal motto is ABLE - Always be learning, always be evolving.
                                    </div>
                                </div>
                            </div>
                            <div className="about-section"> 
                                <div>Skills</div> 
                                <div>Skills list</div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export { About };