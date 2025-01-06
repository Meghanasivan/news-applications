import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // To track loading state
  const [error, setError] = useState(""); // To store error messages

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(""); // Reset any previous errors

    try {
      const response = await fetch("https://f0dbcba5c8c94d519151233dd49add05/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed! Please check your credentials.");
      }

      const data = await response.json();

      // Store the token or user data in localStorage
      localStorage.setItem("authToken", data.token); // or data.user if you want to store user info

      // Redirect to dashboard or home page after successful login
      window.location.href = "/home"; // Change this to your desired route
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message); // Set the error message to display
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Show error message if login fails */}
                {error && <div className="alert alert-danger">{error}</div>}

                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>
            </div>
            <div className="card-footer text-center">
              <small>
                Don't have an account? <a href="/signup">Sign up here</a>.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
