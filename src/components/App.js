
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <label htmlFor="greet">Enter your name: </label>
        <br/>
        <input
        type="text"
        id="greet"
        name="greet"
        value={data}
        onChange={(e)=>setData(e.target.value)}/>
        {(data==="")?<p></p>:<p>Hello {data}!</p>}
    </div>
  )
}

export default App
