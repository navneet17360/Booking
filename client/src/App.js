import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated (e.g., by checking local storage or making an API call)
    const isAuthenticated = localStorage.getItem("authenticated");
    if (isAuthenticated) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/hotels"
            element={authenticated ? <List /> : <Navigate to="/" replace />}
          />
          <Route
            path="/hotels/:id"
            element={authenticated ? <Hotel /> : <Navigate to="/" replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
