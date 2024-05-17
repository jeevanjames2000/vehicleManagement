import React from "react";
import "../Styles/AllScenarios.css";

const AllScenarios = () => {
  const scenarios = [
    {
      id: "1",
      name: "Scenario 1",
      time: 10,
      numOfVehicles: 2,
    },
    {
      id: "2",
      name: "Scenario 2",
      time: 20,
      numOfVehicles: 3,
    },
  ];

  return (
    <div style={{ width: "70%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div>
          <h2>All Scenarios</h2>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              width: "100px",
              height: "30px",
              backgroundColor: "lightblue",
            }}
          >
            New Scenario
          </button>
          <button
            style={{
              width: "100px",
              height: "30px",
              backgroundColor: "lightgreen",
            }}
          >
            Add Vehicle
          </button>
          <button
            style={{
              width: "100px",
              height: "30px",
              backgroundColor: "orange",
            }}
          >
            Delete All
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="scenario-table">
        <thead>
          <tr>
            <th>Scenario ID</th>
            <th>Scenario Name</th>
            <th>Scenario Time</th>
            <th>Number of Vehicles</th>
            <th>Add Vehicle</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {scenarios.map((scenario) => (
            <tr key={scenario.id}>
              <td>{scenario.id}</td>
              <td>{scenario.name}</td>
              <td>{scenario.time}</td>
              <td>{scenario.numOfVehicles}</td>
              <td>
                <button className="action-button add-vehicle">Add</button>
              </td>
              <td>
                <button className="action-button edit">Edit</button>
              </td>
              <td>
                <button className="action-button delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllScenarios;
