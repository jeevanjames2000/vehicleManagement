import React, { useState } from "react";

const VehicleForm = () => {
  const [vehicle, setVehicle] = useState({
    id: "",
    name: "",
    initialPositionX: 0,
    initialPositionY: 0,
    speed: 0,
    direction: "Towards",
  });

  const [scenarios, setScenarios] = useState([
    {
      id: "1",
      name: "Scenario 1",
      time: 10,
      numOfVehicles: 2,
      direction: "towards",
    },
    {
      id: "2",
      name: "Scenario 2",
      time: 20,
      numOfVehicles: 3,
      direction: "forward",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Vehicle saved:", vehicle);
  };

  return (
    <div style={{ width: "100%", border: "2px solid black", padding: "20px" }}>
      <h2>Create Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexWrap: "wrap",
            gap: "50px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="scenaiolist">Scenario List</label>
            <select
              name="scenarioId"
              value={vehicle.scenarioId || ""}
              onChange={handleChange}
              style={{ height: "40px", width: "15rem" }}
            >
              <option value="" disabled>
                Select a scenario
              </option>
              {scenarios.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="name">Vehicle Name</label>
            <input
              type="text"
              name="name"
              placeholder="Vehicle Name"
              value={vehicle.name}
              onChange={handleChange}
              style={{ height: "40px", width: "15rem" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="initialPositionX">Position X</label>
            <input
              type="number"
              name="initialPositionX"
              placeholder="Initial Position X"
              value={vehicle.initialPositionX}
              onChange={handleChange}
              style={{ height: "40px", width: "15rem" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="initialPositionY">Position Y</label>
            <input
              type="number"
              name="initialPositionY"
              placeholder="Initial Position Y"
              value={vehicle.initialPositionY}
              onChange={handleChange}
              style={{ height: "40px", width: "15rem" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="speed">Speed</label>
            <input
              type="number"
              name="speed"
              placeholder="Speed"
              value={vehicle.speed}
              onChange={handleChange}
              style={{ height: "40px", width: "15rem" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="direction">Direction</label>
            <select
              name="direction"
              value={vehicle.direction}
              onChange={handleChange}
              style={{ height: "40px", width: "15rem" }}
            >
              <option value="Towards">Towards</option>
              <option value="Backwards">Backwards</option>
              <option value="Upwards">Upwards</option>
              <option value="Downwards">Downwards</option>
            </select>
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <button
            type="submit"
            style={{
              backgroundColor: "lightblue",
              width: "100px",
              height: "40px",
            }}
          >
            Save
          </button>
          <button
            type="button"
            style={{
              backgroundColor: "lightgreen",
              width: "100px",
              height: "40px",
            }}
            onClick={() =>
              setVehicle({
                id: "",
                name: "",
                initialPositionX: 0,
                initialPositionY: 0,
                speed: 0,
                direction: "Towards",
              })
            }
          >
            Reset
          </button>
          <button
            type="button"
            style={{
              backgroundColor: "orange",
              width: "100px",
              height: "40px",
            }}
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default VehicleForm;
