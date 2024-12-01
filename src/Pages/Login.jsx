import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google"; // Importing GoogleLogin from the new package
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook for routing
import "./Home.css";

const clientId = "YOUR_GOOGLE_CLIENT_ID"; // Replace with your actual Google Client ID

const Login = () => {
  const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup form
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const [email, setEmail] = useState(""); // Optional: For email input in signup
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  // Success function for Google login
  const onSuccess = (response) => {
    console.log("Login Success: ", response);
    const { credential } = response; // Get the credential (token) from the response
    console.log("Token ID: ", credential);

    // Here, we can send the credential to your backend to check if the user exists
    fetch("YOUR_BACKEND_API/check-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: credential }), // Send the Google OAuth token to your backend
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.exists) {
          localStorage.setItem("googleToken", credential); // Store the token
          navigate("/profile"); // Redirect to profile page
        } else {
          // If the user doesn't exist, create the user in your system
          fetch("YOUR_BACKEND_API/register-user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: credential }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.success) {
                localStorage.setItem("googleToken", credential); // Store the token
                navigate("/profile");
              } else {
                console.error("Registration failed:", data.message);
              }
            })
            .catch((error) => {
              console.error("Error during registration:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error during user check:", error);
      });
  };

  // Error function for Google login
  const onFailure = (error) => {
    console.log("Login Failed: ", error);
  };

  // Handle manual username/password signup
  const handleSignup = () => {
    if (!username || !password || !email) {
      console.log("All fields are required");
      return;
    }

    // Send the username, email, and password to the backend for registration
    fetch("YOUR_BACKEND_API/register-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log("User successfully registered");
          navigate("/profile");
        } else {
          console.error("Registration failed:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error during registration:", error);
      });
  };

  // Handle manual username/password login
  const handleLogin = () => {
    if (!username || !password) {
      console.log("Both username and password are required");
      return;
    }

    // Send the username and password to the backend for login
    fetch("YOUR_BACKEND_API/login-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log("Login successful");
          localStorage.setItem("userToken", data.token); // Save user token
          navigate("/profile"); // Redirect to profile page
        } else {
          console.error("Login failed:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };

  // Toggle between signup and login forms
  const toggleForm = () => {
    setIsSignup((prev) => !prev);
  };

  return (
    <div className="login-container">
      <h1>{isSignup ? "Create Account" : "Login"}</h1>

      {/* Google Login Button */}
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onFailure}
        useOneTap
        clientId={clientId}
      />

      {/* Toggle to show signup or login form */}
      <button onClick={toggleForm}>
        {isSignup ? "Already have an account? Login" : "Need an account? Sign up"}
      </button>

      {/* Username/Password form for signup */}
      {isSignup && (
        <div className="signup-form">
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </label>
          <button onClick={handleSignup}>Sign Up</button>
        </div>
      )}

      {/* Username/Password form for login */}
      {!isSignup && (
        <div className="login-form">
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </label>
          <button className="loginbutton" onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
