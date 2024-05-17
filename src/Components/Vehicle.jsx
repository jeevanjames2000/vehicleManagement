import React, { useEffect, useState } from "react";

const Vehicle = ({ vehicle, scenarioTime, isSimulationRunning }) => {
  const [position, setPosition] = useState({
    x: vehicle.initialPositionX,
    y: vehicle.initialPositionY,
  });

  useEffect(() => {
    let interval;

    if (isSimulationRunning) {
      interval = setInterval(() => {
        setPosition((prevPosition) => {
          let newX = prevPosition.x;
          let newY = prevPosition.y;

          switch (vehicle.direction) {
            case "Towards":
              newX += vehicle.speed;
              break;
            case "Backwards":
              newX -= vehicle.speed;
              break;
            case "Upwards":
              newY -= vehicle.speed;
              break;
            case "Downwards":
              newY += vehicle.speed;
              break;
            default:
              break;
          }

          return { x: newX, y: newY };
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isSimulationRunning, vehicle]);

  return (
    <div
      className="vehicle"
      style={{
        transform: `translate(${position.x * 40}px, ${position.y * 40}px)`,
        transition: "transform 1s linear",
      }}
    >
      {vehicle.name}
    </div>
  );
};

export default Vehicle;
