import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./input2.css";

function InputDemo2() {
  const [formData, setFormData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.skills && !Array.isArray(data.skills)) {
      data.skills = [data.skills];
    }

    setFormData(data);
  };

  return (
    <div className="job-container">
      <form className="job-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Job Application Form</h2>

        {/* Full Name */}
        <label>Full Name</label>
        <input
          type="text"
          {...register("fullName", { required: "Name is required" })}
        />
        <p className="error">{errors.fullName?.message}</p>

        {/* Phone */}
        <label>Phone Number</label>
        <input
          type="tel"
          {...register("phone", {
            required: "Phone is required",
            minLength: { value: 10, message: "Enter valid phone number" },
          })}
        />
        <p className="error">{errors.phone?.message}</p>

        {/* Position */}
        <label>Position Applied</label>
        <input
          type="text"
          {...register("position", { required: "Position is required" })}
        />
        <p className="error">{errors.position?.message}</p>

        {/* Skills */}
        <label>Skills</label>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" value="React" {...register("skills")} />
            React
          </label>

          <label>
            <input type="checkbox" value="Node" {...register("skills")} />
            Node
          </label>

          <label>
            <input type="checkbox" value="MongoDB" {...register("skills")} />
            MongoDB
          </label>
        </div>

        {/* Experience */}
        <label>Experience</label>
        <select {...register("experience")}>
          <option value="Fresher">Fresher</option>
          <option value="1-2 Years">1-2 Years</option>
          <option value="3+ Years">3+ Years</option>
        </select>

        {/* Resume */}
        <label>Resume Link</label>
        <input
          type="url"
          placeholder="Paste Google Drive link"
          {...register("resume", { required: "Resume link required" })}
        />
        <p className="error">{errors.resume?.message}</p>

        {/* Cover Letter */}
        <label>Cover Letter</label>
        <textarea
          rows="4"
          {...register("coverLetter", { required: "Cover letter required" })}
        ></textarea>
        <p className="error">{errors.coverLetter?.message}</p>

        <button type="submit">Apply Now</button>
      </form>

      {/* Result Card */}
      {formData && (
        <div className="result-card">
          <h3>Application Submitted</h3>
          <p><strong>Name:</strong> {formData.fullName}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Position:</strong> {formData.position}</p>
          <p>
            <strong>Skills:</strong>{" "}
            {formData.skills?.join(", ") || "None"}
          </p>
          <p><strong>Experience:</strong> {formData.experience}</p>
        </div>
      )}
    </div>
  );
}

export default InputDemo2;
