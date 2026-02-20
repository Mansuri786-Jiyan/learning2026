import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function Inputdemo1() {

    const { register, handleSubmit } = useForm();

    const [data, setData] = useState(null);
    const [isSubmit, setSubmit] = useState(false);

    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");

    const locationData = {
        India: {
            Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
            Maharashtra: ["Mumbai", "Pune", "Nagpur"]
        },
        USA: {
            California: ["Los Angeles", "San Diego"],
            Texas: ["Houston", "Dallas"]
        }
    };

    const submitdetails = (formData) => {
        setData(formData);
        setSubmit(true);
    };

    return (
        <form onSubmit={handleSubmit(submitdetails)}>
            <div style={{ textAlign: "center" }}>

                <h2>Student Form</h2>

                {/* ---------- BASIC INFO ---------- */}
                <label>Name:</label>
                <input type="text" {...register("Name")} />
                <br /><br />

                <label>Email:</label>
                <input type="email" {...register("email")} />
                <br /><br />

                <label>Select Course:</label>
                <select
                    {...register("course")}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                >
                    <option value="">-- Select --</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                </select>
                <br /><br />

                {selectedCourse === "Frontend" && (
                    <>
                        <label>Select Technology:</label>
                        <select {...register("technology")}>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Vue">Vue</option>
                        </select>
                        <br /><br />
                    </>
                )}

                {selectedCourse === "Backend" && (
                    <>
                        <label>Select Technology:</label>
                        <select {...register("technology")}>
                            <option value="Java">Java</option>
                            <option value="Python">Python</option>
                            <option value="NodeJS">NodeJS</option>
                        </select>
                        <br /><br />
                    </>
                )}


                <label>Select Country:</label>
                <select
                    {...register("country")}
                    onChange={(e) => {
                        setSelectedCountry(e.target.value);
                        setSelectedState("");
                    }}
                >
                    <option value="">-- Select Country --</option>
                    {Object.keys(locationData).map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
                <br /><br />

                {selectedCountry && (
                    <>
                        <label>Select State:</label>
                        <select
                            {...register("state")}
                            onChange={(e) => setSelectedState(e.target.value)}
                        >
                            <option value="">-- Select State --</option>
                            {Object.keys(locationData[selectedCountry]).map((state) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                        <br /><br />
                    </>
                )}

                {selectedState && (
                    <>
                        <label>Select City:</label>
                        <select {...register("city")}>
                            <option value="">-- Select City --</option>
                            {locationData[selectedCountry][selectedState].map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                        <br /><br />
                    </>
                )}

                <button type="submit">Submit</button>
            </div>

            {isSubmit && data && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Name: {data.Name}</h3>
                    <h3>Email: {data.email}</h3>
                    <h3>Course: {data.course}</h3>
                    <h3>Technology: {data.technology}</h3>
                    <h3>Country: {data.country}</h3>
                    <h3>State: {data.state}</h3>
                    <h3>City: {data.city}</h3>
                </div>
            )}
        </form>
    );
}

export default Inputdemo1;
