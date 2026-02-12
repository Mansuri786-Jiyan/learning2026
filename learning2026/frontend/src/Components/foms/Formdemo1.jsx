import React from 'react'
import { useForm } from 'react-hook-form'

function Formdemo1() {

    const { handleSubmit, register, formState: { errors } } = useForm();
    console.log(errors)
    const onSubmit = (data) => {
        alert("Form SUbmitterd")
        console.log(data);

    }

    const validatoreSchema = {
        nameValidatore: {
            required: {
                value: true,
                message: "Enter your name"
            },
            min: {
                value: 3,
                message: "Its contain min 3 char"
            }
        },

       ageValidator: {
            required: {
                value: true,
                message: "Age is Required*"
            },
            min: {
                value: 18,
                message: "Min age should be 18*"
            },
            max: {
                value: 60,
                message: "Max age should be 60*"
            }
        },

        emialValidator:{
            required:{
                value: true,
                message: "Email is Required*"
            },
             pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter valid email"
            },
        },

        passwordValidator:{
            required:{
                value: true,
                message: "Email is Required*"
            },
             minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
            },
        },

        phonvalidator:{
            required:{
                value: true,
                message: "Email is Required*"
        },
           pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter valid 10 digit phone number"
            }

    },

    }

 return (
        <div>
            <h1>FormDemo 1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Name:</label>
                <input type="text" placeholder='Enter Your Name' {...register("name", validatoreSchema.nameValidatore)} />
                {errors.name && errors.name.message}<br />

                 <label htmlFor="">Age:</label>
                <input type="number" placeholder='' {...register("age", validatoreSchema.ageValidator)} />
                {errors.age && errors.age.message}<br />

                <label htmlFor="">Email:</label>
                <input type="email" placeholder='' {...register("email", validatoreSchema.emialValidator)} />
                {errors.email && errors.email.message}<br />

                <label htmlFor="">password:</label>
                <input type="password" placeholder='' {...register("password", validatoreSchema.passwordValidator)} />
                {errors.password && errors.password.message}<br />

                 <label htmlFor="">phone:</label>
                <input type="number" placeholder='' {...register("phone", validatoreSchema.phonvalidator)} />
                {errors.phone && errors.phone.message}<br />

                <input type="submit" />
            </form>
        </div>
    )
}

export default Formdemo1