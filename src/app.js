
import React, { useState } from "react";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        {!isLoggedIn ? (
          showSignup ? (
            <Signup setShowSignup={setShowSignup} />
          ) : (
            <Login setIsLoggedIn={setIsLoggedIn} setShowSignup={setShowSignup} />
          )
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  );
}

export default App;

