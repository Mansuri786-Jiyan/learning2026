import React from 'react'
import { useParams } from 'react-router-dom'

const SingleTeam = () => {
    var Teamame = useParams().teamName;
  return (
    <div style={{textAlign:"center"}}>
     <h1> Playing...{Teamame}</h1>
      </div>
  )
}

export default SingleTeam