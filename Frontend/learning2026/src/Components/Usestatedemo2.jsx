import React from 'react'
import {useState} from 'react'

function Usestatedemo2() {
    const[loading,Setloding] = useState(true)
    const stopLoding = () =>{
        Setloding(false);
    }
  return (
    <div>
        <h1>UseState demo 2</h1>
        {
            loading == false && <h1>Loading...</h1>
        }
        <button onClick={stopLoding}>StopLoading</button>
    </div>
  )
}

export default Usestatedemo2    