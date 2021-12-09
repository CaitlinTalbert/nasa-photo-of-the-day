import React from 'react'; 

export default function nasaImage(props) {
    const [nasaImage] = props; 

    return (
        <div className='Photo'>
            <img src={nasaImage} alt="A Comet" />
        </div>
    ); 
}