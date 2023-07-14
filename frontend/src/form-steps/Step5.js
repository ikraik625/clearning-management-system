import React from "react";
import "./Step1.css";
import "./Step5.css";

export default function Step5({
  date,
  time,
  setDate,
  setTime,
  handleSubmit,
  handleBackStep,
  submitted,
}) {
  
  return (
    <>
      <label>Step 5: Quand souhaitez vous que nous arrivions ?</label>
      <div>
        <label>Date:</label>
        <input
          type="date"
          className="arrival-time-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label>Time:</label>
        <input
          type="time"
          className="arrival-time-date"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button type="button" className="next-button" onClick={handleSubmit}>
        Submit
      </button>
      <button type="button" className="back-button" onClick={handleBackStep}>
        Back
      </button>
    </>
  );
}
