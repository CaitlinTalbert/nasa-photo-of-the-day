import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import "./App.css";

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', 
      );
      setData(result.data); 
    }; 
    fetchData();  
  }, []); 

  return (
    <div className="App">
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
            </li>
        ))}
      </ul>
  ); 
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
