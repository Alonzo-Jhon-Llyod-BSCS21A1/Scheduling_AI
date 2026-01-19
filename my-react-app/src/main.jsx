import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import ScheduleRoom from "./pages/scheduleRoom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/schedule-room" element={<ScheduleRoom />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
