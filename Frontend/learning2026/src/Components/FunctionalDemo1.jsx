import React from 'react'

function FunctionalDemo1() {

    var count = 0;
    function increament() {
      console.log("Current value",count);
      count++;
      console.log("After Value",count);
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1> Currunt Value :{count} </h1>
        <button onClick={increament} >Increament Value</button>
    </div>
  )
}

export default FunctionalDemo1;