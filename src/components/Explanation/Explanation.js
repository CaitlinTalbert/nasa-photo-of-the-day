import React, { useState } from "react"; 
import "./index.css"; 
import styled from "styled-components";

const StyledExplanation = styled.div`
    background-color: ${props => props.theme.primaryColor};
`


const Explanation = (props) => {
    const { text } = props; 
    return (
        <StyledExplanation>
            <h3>{text}</h3>
        </StyledExplanation>
    ); 
}; 

export default Explanation; 




//import 

//create component 

//export 