import React, { useEffect, useState } from "react";

const Vehicle = ({ vehicle, scenarioTime }) => {
  const [position, setPosition] = useState({
    x: vehicle.initialPositionX,
    y: vehicle.initialPositionY,
  });

  useEffect(() => {
    const interval = setInterval(() => {
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

    setTimeout(() => clearInterval(interval), scenarioTime * 1000);

    return () => clearInterval(interval);
  }, [vehicle, scenarioTime]);

  return (
    <div
      className="vehicle"
      style={{
        transform: `translate(${position.x * 40}px, ${position.y * 40}px)`,
      }}
    >
      {vehicle.name}
    </div>
  );
};

export default Vehicle;
