import React, { useState } from "react"; 
import "./index.css"; 

const Copyright = (props) => {
    const { copyright } = props; 
    return (
        <div>
            <h4>{copyright}</h4>
        </div>
    );
}; 

export default Copyright; 