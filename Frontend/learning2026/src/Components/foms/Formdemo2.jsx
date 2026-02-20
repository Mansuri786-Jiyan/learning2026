import React from 'react'
import { useForm } from 'react-hook-form'

function Formdemo2() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        alert("Form has been submitted");
        console.log(data);
    }

   const validator = {

    name: {
        required: {
            value: true,
            message: "Your name is required"
        },
        minLength: {
            value: 3,
            message: "Minimum 3 characters required"
        }
    },

    email: {
        required: "Email is required",
        pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter valid email"
            },
    },

    Phone: {
        required: "Phone is required",
        pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter valid 10 digit phone number"
            }
    },

    salary: {
        required: "Salary is required",
        valueAsNumber: true,
        validate: (value) => {
            if (value < 20000) return "Salary must be above 20000";
            if (value > 200000) return "Salary too high";
            return true;
        }
    },

    password: {
        required: "Password is required",
        pattern: {
            value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
            message:
                "Password must contain 1 uppercase, 1 number & 1 special character"
        }
    }
};


    return (
        <div>
            <h1>Employee Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Full Name:</label>
                <input
                    type="text"
                    {...register("fullName", validator.fullName)}
                />
                <p>{errors.fullName?.message}</p>


                <label>Email:</label>
                <input
                    type="email"
                    {...register("email", validator.email)}
                />
                <p>{errors.email?.message}</p>

                <label>Phone:</label>
                <input
                    type="text"
                    {...register("Phone", validator.Phone)}
                />
                <p>{errors.Phone?.message}</p>

                <label>Department:</label>
                <input
                    type="text"
                    {...register("Department", validator.Department)}
                />
                <p>{errors.Department?.message}</p>

                <label>Sallary:</label>
                <input
                    type="text"
                    {...register("Sallary", validator.salary)}
                />
                <p>{errors.Sallary?.message}</p>

                <label>Join in Date:</label>
                <input
                    type="date"
                    {...register("Date")}
                />
                <p>{errors.Date?.message}</p>

                <label>Gender:</label>
                <input type="radio" value="Male"
                    {...register("gender", { required: "Select gender" })} /> Male
                <input type="radio" value="Female"
                    {...register("gender")} /> Female
                <input type="radio" value="Other"
                    {...register("gender")} /> Other
                <p>{errors.gender?.message}</p>

                <label>Address:</label>
                <textarea
                    {...register("address", {
                        required: "Address is required"
                    })}
                />
                <p>{errors.address?.message}</p>

                <br />

                <button type="submit">Submit</button>



            </form>
        </div>
    )
}

export default Formdemo2