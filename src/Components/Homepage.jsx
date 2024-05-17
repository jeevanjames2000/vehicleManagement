import React, { useState } from "react";
import Board from "./Board";
import "../Styles/Homepage.css";

const HomePage = () => {
  const [scenarios, setScenarios] = useState([
    {
      id: "1",
      name: "Scenario 1",
      time: 10,
      vehicles: [
        {
          id: "v1",
          name: "Car 1",
          initialPositionX: 50,
          initialPositionY: 50,
          speed: 10,
          direction: "Towards",
        },
        {
          id: "v2",
          name: "Car 2",
          initialPositionX: 100,
          initialPositionY: 100,
          speed: 5,
          direction: "Backwards",
        },
      ],
    },
    {
      id: "2",
      name: "Scenario 2",
      time: 20,
      vehicles: [
        {
          id: "v3",
          name: "Car 3",
          initialPositionX: 150,
          initialPositionY: 150,
          speed: 7,
          direction: "Upwards",
        },
      ],
    },
  ]);
  const [selectedScenario, setSelectedScenario] = useState(scenarios[0]);

  const handleSelectScenario = (e) => {
    const scenario = scenarios.find((sc) => sc.id === e.target.value);
    setSelectedScenario(scenario);
  };

  return (
    <div className="home-page">
      <div className="scenario-select">
        <label htmlFor="scenario-select">Select Scenario: </label>
        <select
          id="scenario-select"
          value={selectedScenario?.id || ""}
          onChange={handleSelectScenario}
          style={{ height: "30px", width: "100px" }}
        >
          {scenarios.map((scenario) => (
            <option key={scenario.id} value={scenario.id}>
              {scenario.name}
            </option>
          ))}
        </select>
      </div>
      {selectedScenario && (
        <>
          <div className="vehicle-table">
            <table>
              <thead>
                <tr>
                  <th>Vehicle ID</th>
                  <th>Vehicle Name</th>
                  <th>Position X</th>
                  <th>Position Y</th>
                  <th>Speed</th>
                  <th>Direction</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {selectedScenario.vehicles.map((vehicle) => (
                  <tr key={vehicle.id}>
                    <td>{vehicle.id}</td>
                    <td>{vehicle.name}</td>
                    <td>{vehicle.initialPositionX}</td>
                    <td>{vehicle.initialPositionY}</td>
                    <td>{vehicle.speed}</td>
                    <td>{vehicle.direction}</td>
                    <td>
                      <button>Edit</button>
                    </td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              gap: "10px",
              margin: "1rem",
            }}
          >
            <button
              style={{
                backgroundColor: "green",
                height: "30px",
                cursor: "pointer",
                borderRadius: "5px 5px 5px 5px",
              }}
            >
              Start Simulation
            </button>
            <button
              style={{
                backgroundColor: "red",
                height: "30px",
                cursor: "pointer",
                borderRadius: "5px 5px 5px 5px",
              }}
            >
              Stop Simulation
            </button>
          </div>
          <div className="simulation">
            <Board
              vehicles={selectedScenario.vehicles}
              scenarioTime={selectedScenario.time}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
