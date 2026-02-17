import React, { useState } from 'react';
import axios from 'axios';


function ApiDemo1() {
    const [messege, setMessege] = useState("")
    const [data, setData] = useState([])
    const api1 = async()=> {
        const response = await axios.get("https://node5.onrender.com/user/user/")
        console.log(response);
        console.log(response.data);
        console.log(response.data.message);
        setMessege(response.data.message)
        console.log(response.data.data);
        setData(response.data.data)
        


    }
  return (
    <div style={{textAlign: "center"}}>
        <h2>API DEMO 1</h2>
        <h1>{messege}</h1>
     {
        data.map((user)=>(
            <li>{user.name}</li>
        ))
     }
    <button onClick={api1}>GET</button>
    </div>
    
  )
}

export default ApiDemo1