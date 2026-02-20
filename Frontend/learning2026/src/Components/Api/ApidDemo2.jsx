import React, { useState } from 'react'
import axios from 'axios'

function ApidDemo2() {
  const [Products, setProducts] = useState([])
  const api = async () => {
    const result = await axios.get("https://dummyjson.com/products")
    // console.log(result);
    console.log(result.data.products)
    setProducts(result.data.products)


  }
  return (
    <div style={{ textAlign: "center" }}>

      Apidemo2
      <button onClick={api}>GETdata</button>
          <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px"}}>
            
        {Products.map((product) => (
          <div key={product.id}  style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              width: "220px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}>
           <img src={product.thumbnail} alt={product.title} width="100%"/>

          
            <h4>Price: ₹ {product.price}</h4>
            <h4>Title: {product.title}</h4>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ApidDemo2