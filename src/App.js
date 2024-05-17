import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Components/Homepage";
import ScenarioForm from "./Components/ScenarioForm";
import VehicleForm from "./Components/VehicleForm";
import "./App.css";
import AllScenarios from "./Components/AllScenarios";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-scenario" element={<ScenarioForm />} />
            <Route path="/all-scenario" element={<AllScenarios />} />

            <Route path="/create-vehicle" element={<VehicleForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
