// src/pages/Profile.js
import React from "react";
import "./Home.css";

const Profile = ({ user }) => {
  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <div className="profile-info">
        {/* First Name */}
        <p className="first-name">
          <strong>First Name:</strong> {user.firstName}
        </p>
        
        {/* Last Name */}
        <p className="last-name">
          <strong>Last Name:</strong> {user.lastName}
        </p>
        
        {/* Email */}
        <p className="email">
          <strong>Email:</strong> {user.email}
        </p>

        {/* College Information */}
        <p className="college-name">
          <strong>College Name:</strong> {user.collegeName}
        </p>
        <p className="college-location">
          <strong>College Location:</strong> {user.collegeLocation}
        </p>
        <p className="college-pincode">
          <strong>College Pincode:</strong> {user.collegePincode}
        </p>

        {/* Course and Department */}
        <p className="course-type">
          <strong>Course Type:</strong> {user.courseType}
        </p>
        <p className="department">
          <strong>Department:</strong> {user.department}
        </p>

        {/* Year and Semester */}
        <p className="year">
          <strong>Year:</strong> {user.year}
        </p>
        <p className="semester">
          <strong>Semester:</strong> {user.semester}
        </p>

        {/* Profile Image */}
        <div className="profile-image">
          <img src={user.profilePicture} alt="Profile" />
        </div>
        
        {/* Image Upload (Optional) */}
        <div className="image-upload">
          <input type="file" accept="image/*" className="upload-button" />
        </div>

      </div>
      <button className="edit-button">Edit Profile</button>
    </div>
  );
};

export default Profile;
