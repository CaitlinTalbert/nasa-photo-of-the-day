//dependencies 
import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import { API_URL, API_KEY,} from "./Constants"; 


//Components 
import Image from "./components/Image/Image.js"; 
import Explanation from "./components/Explanation/Explanation.js";


//stylesheets
import "./App.css";


function App() {
  const [nasaData, setNasaData] = useState([]); 

  useEffect(() => {
    const fetchData = () => {
        axios.get(`${API_URL}?api_key=${API_KEY}`)
        .then((res) => {
          console.log(res.data); 
          setNasaData(res.data)
        })
        .catch((err) => {
          console.error(err);
        }); 
    };
    fetchData(); 
   }, []); 

  return (
    <div className="App">
      <Image nasaURL={nasaData.url} />
      <Explanation text={nasaData.explanation} />
    </div>
  );
}


export default App;
