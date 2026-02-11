import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
// import "./inputdemo1.css";

function Inputdemo1() {
    const [data, setData] = useState("");
    const [isSubmit,setSubmit] = useState(false);

    const {register,handleSubmit} = useForm()
    const submitdetails = (data) =>{
        console.log(data);
        setData(data);
        setSubmit(true);
        
    }

  return (
    <form action={handleSubmit(submitdetails)}>
         <div style={{textAlign:"center"}}>
        <h2>Student Form</h2>
        <label>Name:</label>
        <input type="text"  placeholder='Enter Your Name' {...register("Name")} /><br/>
        <label>Age:</label>
        <input type="number" placeholder='Enter Age' {...register("Age")} /><br/>
        <label>Email:</label>
        <input type="email" placeholder='Enter email' {...register("email")} /><br/>


        Male: <input type="radio" name='Male' {...register("Gender")} />
        Female:<input type="radio" name='Female' {...register("Gender")} /><br/>

         <label>Select Course:</label>
        <select {...register("course",{required : true})}>
            <option value="Frontend">Frontend </option>
            <option value="Backend">Backend</option>
            <option value="Fullstack">Fullstack</option>
            <option value="AI & ML">AI & ML</option>
        </select><br/>

        <button type="submit">Submit</button>
        
    </div>

    {
        isSubmit && <div>
            <h1>Name:{data.Name}</h1>
            <h1>Age:{data.Age}</h1>
            <h1>Email:{data.email}</h1>
            <h1>Course:{data.course}</h1>
        </div>
    }
    </form>


   
  )
}

export default Inputdemo1