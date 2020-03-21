import React from 'react';  
import '../App.css';  

class Gallery extends React.Component {  

  render() {  
    const images = {

        web : {
            cam: ['/projects/features/cam1.gif', '/projects/features/cam2.gif'],
            reactions: ['/projects/features/reactions1.gif', '/projects/features/reactions2.gif']
        } ,
        mobile : {
            cam: ['/projects/features/cam1.gif',],
            reactions: [ '/projects/features/reactions2.gif']
        }
    }
    const { asset, platform } = this.props

      if (this.props.showGallery){
        return (  
            <div className='popup' onClick={() => this.props.toggleGallery(false)}>  
                <div className='popup-content'>
                    <div style={{position: 'relative', height: '100%', width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly',}}>
                        {
                            images[platform][asset].map(i => <img src={process.env.PUBLIC_URL + i} alt="logo" style={{height: '100%', marginBottom: '10px'}}/>)
                        }
                    </div>
                </div>
            </div>  
        ); 
      }
      return null;
         
    }  
}  

export default Gallery;