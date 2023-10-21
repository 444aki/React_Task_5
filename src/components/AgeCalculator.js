import React, { useState } from "react";
import "./styles.css";

function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [ageResult, setAgeResult] = useState("");

  const calculateAge = () => {
    const dobDate = new Date(dob);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - dobDate;
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
    const age = Math.floor(ageInYears);

    setAgeResult(`${age} years`);
  };

  return (
    <div className="container">
      <h1>Age Calculator</h1>
      <div className="form">
        <label htmlFor="dob">Enter your Date of Birth</label>
        <br />
        <br />
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <br />
        <button onClick={calculateAge}>Calculate Age</button>
      </div>
      <div className="result">
        Your are
        <span id="ageResult"> {ageResult} </span>
        old
      </div>
    </div>
  );
}

export default AgeCalculator;
