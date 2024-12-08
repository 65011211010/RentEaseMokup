import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handle user login
  const handleLogin = () => {
    setIsLoggedIn(true); // Update state to logged in
  };

  // Handle user logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Update state to logged out
  };

  return (
    <Router>
      <div className="flex">
        {/* Sidebar appears only when the user is logged in */}
        {isLoggedIn && (
          <Sidebar
            isOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            handleLogout={handleLogout} // Pass logout handler
          />
        )}

        {/* Main Content */}
        <div className="flex-1">
          <Navbar
            toggleSidebar={toggleSidebar}
            isLoggedIn={isLoggedIn}
            handleLogin={handleLogin} // Pass login handler
            handleLogout={handleLogout} // Pass logout handler
          />
          <main className="p-6">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Homepage />} />

              {/* Login Route */}
              <Route
                path="/login"
                element={<LoginPage onLogin={handleLogin} />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
