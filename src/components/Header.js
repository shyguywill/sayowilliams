import React from 'react';
import '../App.css';
import { Menu } from './Menu'




class Header extends React.Component {
    state = { headerVisible: true, crossedHeader: false }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= 0;
    }

    isHeader(el) {
        return el.getBoundingClientRect().bottom > 0;
    }
      
      componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
      }
      
      componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
      }
      
      trackScrolling = () => {
        const wrappedElement = document.getElementById('home');
        if (this.isBottom(wrappedElement) && !this.state.crossedHeader) {
          console.log('header bottom reached');
          this.setState({ headerVisible: false, crossedHeader: true })
          //document.removeEventListener('scroll', this.trackScrolling);
        }  
        if (this.isHeader(wrappedElement) && !this.state.headerVisible){
            this.props.setSection('home')
            console.log('is in header')
            this.setState({ headerVisible: true, crossedHeader: false })
            //document.removeEventListener('scroll', this.trackScrolling);
        }
      };
    render() {
        return (
            <header id="home" className="App-header">
                <div >
                    <div style={{display: 'flex', flexDirection: 'row',}}>
                        <h1 className="animated wobble delay-1s">Hello,</h1>
                        <div className="animated fadeIn delay-1s" style={{marginLeft: '10px', display: 'flex', flexDirection: 'row'}}> 
                            <h1>I'm</h1>
                            <span style={{marginLeft: '8px', color: '#6853f6', display: 'flex', }}>
                                <h1>Sayo Williams.</h1>
                            </span>
                        </div>
                    </div>
                
                    <div className="animated fadeIn delay-2s slow">
                        <h1>
                            I build things with _code.
                        </h1>
                    </div>

                </div>
                {/* <i aria-hidden="true" class="red rocket icon"></i> */}
                <a href="#about" style={{marginTop: '100px', color: 'white'}} className="animated fadeIn delay-2s slower">
                    <div className="header-button">
                        View my work 
                    </div>
                </a>

                <Menu 
                    headerVisible={this.state.headerVisible}
                    section={this.props.section}
                />

            </header>
        );
    }
}

export { Header };

