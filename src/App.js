import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google"; // Import GoogleOAuthProvider

import Sidebar from './Pages/Sidebar';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Section from './Pages/Section';
import Login from './Pages/Login';
import DownloadRecord from './Pages/DownloadRecord';

const App = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID"> {/* Wrap with GoogleOAuthProvider */}
      <Router>
        <div className="content">
        <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/section" element={<Section />} />
            <Route path="/login" element={<Login />} />
            <Route path="/download-record" element={<DownloadRecord />} />
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
