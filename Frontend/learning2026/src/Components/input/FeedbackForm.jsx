import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import "./FeedbackForm.css";

function FeedbackForm() {
  const [feedbackData, setFeedbackData] = useState(null);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setFeedbackData(data);
  };

  return (
    <div className="feedback-container">
      <form className="feedback-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Feedback</h2>

        <input
          type="text"
          placeholder="Your Name"
          {...register("name")}
        />

        <select {...register("rating")}>
          <option value="">Select Rating</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
        </select>

        <textarea
          placeholder="Write your feedback"
          rows="3"
          {...register("message")}
        ></textarea>

        <button type="submit">Submit</button>

        {feedbackData && (
        <div className="result">
          <h3>Thank You!</h3>
          <p>Name: {feedbackData.name}</p>
          <p>Rating: {feedbackData.rating}</p>
          <p>Message: {feedbackData.message}</p>
        </div>
      )}
      </form>

      
    </div>
  );
}

export default FeedbackForm;
