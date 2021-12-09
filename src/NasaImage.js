import React from 'react'; 

const nasaImage = props => {
    const { image } = props; 
    return (
        <div>
            <div className='nasa-image' key='nasa-image-container'></div>
            <img src={nasaImage} alt="Comet" />
        </div>
    ); 
}; 

export default nasaImage; 