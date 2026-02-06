import React from 'react'
import {useState} from 'react'

function FunctionalDemo1() {

    const[count,Setcount]  = useState(0);

    const increament = () =>{
        Setcount(count+1);
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1> Currunt Value :{count} </h1>
        <button onClick={increament} >Increament Value</button>
    </div>
  )
}

export default FunctionalDemo1;