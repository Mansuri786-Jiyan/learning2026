import React from 'react'
import { useForm } from 'react-hook-form'

function FormDemo3() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode: "onChange" })
    const password = watch("password");
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[@$!%*?&]/.test(password);
    // const hasLength = password.length >= 8;


    const Validator = {

        name: {
            required: {
                value: true,
                message: "Full name is required"
            }
        },

        contact: {
            required: {
                value: true,
                message: "Contact number is required"
            },
            pattern: {
                value: /^[6-9]{1}[0-9]{9}$/,
                message: "Enter a valid 10-digit Indian number"
            }
        },

        email: {
            required: {
                value: true,
                message: "Email is required"
            },
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email"
            }
        },

        promo: {
            validate: (value) =>
                value === "ME" || "Invalid Code*"
        },

        password: {
            required: {
                value: true,
                message: "Password is required*"
            },
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Password is not correct"
                ,
            }
        },
        ConformPassword: {
            require: {
                value: true,
                message: "Conform password is required"
            },
            validate: (params) => {
                return params == password || "Password does not match*"
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

    };


    const onsubmit = (data) => {
        console.log(data);
    }


    return (
        <div>
            <h1>Password Form 3</h1>
            <form onSubmit={handleSubmit(onsubmit)}>
                <label>Name:</label>
                <input type='text' {...register("name", Validator.name)}></input>
                {errors.name?.message}<br />

                <label>Contact:</label>
                <input type='text' {...register("contact", Validator.contact)}></input>
                {errors.contact?.message}<br />

                <label>Age:</label>
                <input type="number" placeholder='Enter Age' {...register("Age")} /><br/>

                <label>Email:</label>
                <input type='email' {...register("email", Validator.email)}></input>
                {errors.email?.message}<br />

                <label>PROMO CODE:</label>
                <input type='text' {...register("promo", Validator.promo)}></input>
                {errors.promo?.message}<br />

                <label>Password:</label>
                <input type="password" {...register("password", Validator.password)} />
                {errors.password?.message}<br />

                <label>ConformPassword:</label>
                <input type="password" {...register("Conformpassword", Validator.ConformPassword)} />
                {errors.Conformpassword?.message}<br />

                <div>
                    <p style={{color :hasUpperCase ? "green" : "red"}}>
                        1)Password must have one UpperCase
                    </p>

                    <p style={{color :hasLowerCase ? "green" : "red"}}>
                        2)Password must have one Lowercase
                    </p>

                    <p style={{color :hasNumber ? "green" : "red"}}>
                        3) Password must have one Special Character
                    </p>


                    <p style={{color :hasSpecial ? "green" : "red"}}>
                        4)Password must have Min One Number
                    </p>

                    {/* <p style={{color :hasLength ? "green" : "red"}}>
                        5)At least 8 to 16 Charecter
                    </p> */}


                </div>



                <input type="submit" />
            </form>
        </div>
    )
}

export default FormDemo3