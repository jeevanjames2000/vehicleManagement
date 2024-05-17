import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/ScenarioForm.css";

const ScenarioForm = () => {
  const [scenario, setScenario] = useState({ id: "", name: "", time: 0 });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setScenario({ ...scenario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Scenario saved:", scenario);
  };

  const handleReset = () => {
    setScenario({ id: "", name: "", time: 0 });
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="scenario-form">
      <h2>Add Scenario</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div>
            <label
              htmlFor="name"
              style={{ textAlign: "center", fontSize: "large" }}
            >
              Scenario Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Scenario Name"
              value={scenario.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="time"
              style={{ textAlign: "center", fontSize: "large" }}
            >
              Scenario Time(seconds)
            </label>
            <input
              type="number"
              id="time"
              name="time"
              placeholder="Time"
              value={scenario.time}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-buttons">
          <button type="submit" style={{ backgroundColor: "green" }}>
            Add
          </button>
          <button
            type="button"
            style={{ backgroundColor: "orange" }}
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            type="button"
            style={{ backgroundColor: "lightblue" }}
            onClick={handleGoBack}
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScenarioForm;
