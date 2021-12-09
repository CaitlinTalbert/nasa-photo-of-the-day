import React { useState } from "react"; 
import "./index.css"; 

const Image = (props) => {
    const { nasaURL } = props; 
    return (
       <div>
           <img src={nasaURL}/>
       </div>
    ); 
}; 

export default Image; 