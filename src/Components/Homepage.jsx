import React, { useState, useRef, useEffect } from "react";
import { data } from "./staticdata";
import "../Styles/Homepage.css";

const HomePage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [scenario, setScenario] = useState("");
  const [editVehicle, setEditVehicle] = useState(null);
  const [editValues, setEditValues] = useState({});
  const vehicleRefs = useRef({});
  const boardRef = useRef(null);

  const handleScenarioChange = (e) => {
    const selectedScenario = e.target.value;
    setScenario(selectedScenario);
    const scenarioData = data.find((sc) => sc.name === selectedScenario);
    if (scenarioData) {
      setVehicles(
        scenarioData.vehicles.map((v) => ({
          ...v,
          position: {
            x: parseInt(v.positionX, 10),
            y: parseInt(v.positionY, 10),
          },
          moving: false,
          visible: true,
        }))
      );
    }
  };

  const startSimulation = () => {
    setVehicles((prev) => prev.map((v) => ({ ...v, moving: true })));
  };

  const stopSimulation = () => {
    setVehicles((prev) => prev.map((v) => ({ ...v, moving: false })));
  };

  const handleEdit = (vehicle) => {
    setEditVehicle(vehicle.id);
    setEditValues(vehicle);
  };

  const handleDelete = (id) => {
    setVehicles(vehicles.filter((v) => v.id !== id));
  };

  const handleSave = () => {
    setVehicles(
      vehicles.map((v) => (v.id === editVehicle ? { ...v, ...editValues } : v))
    );
    setEditVehicle(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditValues({ ...editValues, [name]: value });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles((prev) =>
        prev.map((vehicle) => {
          if (!vehicle.moving) return vehicle;
          const newPosition = { ...vehicle.position };
          const speed = parseInt(vehicle.speed, 10);
          switch (vehicle.direction) {
            case "right":
              newPosition.x += speed;
              break;
            case "left":
              newPosition.x -= speed;
              break;
            case "up":
              newPosition.y -= speed;
              break;
            case "down":
              newPosition.y += speed;
              break;
            default:
              break;
          }

          const board = boardRef.current.getBoundingClientRect();
          if (
            newPosition.x < 0 ||
            newPosition.x > board.width ||
            newPosition.y < 0 ||
            newPosition.y > board.height
          ) {
            return { ...vehicle, visible: false };
          }
          return { ...vehicle, position: newPosition, visible: true };
        })
      );
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        <label>
          Scenario:
          <select
            value={scenario}
            style={{ height: "30px", marginLeft: "1rem" }}
            onChange={handleScenarioChange}
          >
            <option value="" disabled>
              Select a scenario
            </option>
            {data.map((scen, index) => (
              <option key={index} value={scen.name}>
                {scen.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <table className="vehicle-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Vehicle Name</th>
            <th>Speed</th>
            <th>Position X</th>
            <th>Position Y</th>
            <th>Direction</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              {editVehicle === vehicle.id ? (
                <>
                  <td></td>
                  <td>
                    <input
                      type="text"
                      name="vehicleName"
                      value={editValues.vehicleName}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="speed"
                      value={editValues.speed}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="positionX"
                      value={editValues.positionX}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="positionY"
                      value={editValues.positionY}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="direction"
                      value={editValues.direction}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <button onClick={handleSave}>Save</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{vehicle.id}</td>
                  <td>{vehicle.vehicleName}</td>
                  <td>{vehicle.speed}</td>
                  <td>{vehicle.positionX}</td>
                  <td>{vehicle.positionY}</td>
                  <td>{vehicle.direction}</td>
                  <td>
                    <button onClick={() => handleEdit(vehicle)}>Edit</button>
                    <button onClick={() => handleDelete(vehicle.id)}>
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="controls">
        <button
          onClick={startSimulation}
          style={{ height: "30px", backgroundColor: "lightgreen" }}
        >
          Start Simulation
        </button>
        <button
          onClick={stopSimulation}
          style={{ height: "30px", backgroundColor: "lightblue" }}
        >
          Stop Simulation
        </button>
      </div>
      <div className="game-board" ref={boardRef}>
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            ref={(el) => (vehicleRefs.current[vehicle.id] = el)}
            className={`vehicle ${vehicle.visible ? "" : "hidden"}`}
            style={{ top: vehicle.position.y, left: vehicle.position.x }}
          >
            {vehicle.vehicleName}
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomePage;
