import React,{useState} from 'react'
import axios from 'axios'


function ApiDemo3() {
    const [Data, setData] = useState([])
    const api = async()=>{
        const responce = await axios.get("https://corsproxy.io/?https://dummyjson.com/comments");
        console.log(responce.data.comments);
        setData(responce.data.comments)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>APIDEMO </h1>
        <button onClick={api}>GET Table Of Comments</button>
        {
            Data.length > 0 && (
                <table className='table'>
                    <thead className='thead-dark'>
                        <tr>
                            <td>Id</td>
                            <td>FullName</td>
                            <td>Username</td>
                            <td>Body</td>
                            <td>PostID</td>
                            <td>Likes</td>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        Data.map((data)=>(
                        <tr key={data.id}>
                            <td>{data.user.id}</td>
                            <td>{data.user.fullName}</td>
                            <td>{data.user.username}</td>
                            <td>{data.body}</td>
                            <td>{data.postId}</td>
                            <td>{data.likes}</td>
                        </tr>
                        ))
                       }
                    </tbody>

                </table>
            )
        }
    </div>
  )
}

export default ApiDemo3