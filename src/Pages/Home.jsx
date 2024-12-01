import React from "react";
import "./Home.css"; // Importing the CSS file
import DownloadRecord from "./DownloadRecord"; // Import the DownloadRecord component

const Home = () => {
  const handleDownload = (bookTitle, bookUrl) => {
    // This will handle download logging inside DownloadRecord
    console.log(`Downloading book: ${bookTitle}`);
    // You can add additional logic here, e.g., sending data to the backend
  };

  return (
    <div className="home-container">
      {/* Top Image */}
      <div className="top-image">
        <img src="college-image.jpg" alt="College" className="college-image" />
      </div>

      {/* Welcome Message */}
      <div className="welcome-message">
        <h1>Welcome to S.T. Hindu College</h1>
        <p>Your gateway to knowledge, resources, and books to enhance your learning experience.</p>
      </div>

      {/* Department Section */}
      <div className="department-section">
        <h2>Courses Offered</h2>

        {/* UG Courses */}
        <div className="department-container">
          <h3>Undergraduate (UG) Courses</h3>
          <div className="courses">
            <div className="course-card">
              <h4>B.A. English</h4>
              <p>Description: A comprehensive study of English literature and language.</p>
              <button
                className="download-button"
                onClick={() =>
                  handleDownload("B.A. English Book", "book-download-link-ug1.pdf")
                }
              >
                Download Book
              </button>
            </div>
            <div className="course-card">
              <h4>B.A. Tamil Language and Literature</h4>
              <p>Description: In-depth exploration of Tamil language and its literary heritage.</p>
              <button
                className="download-button"
                onClick={() =>
                  handleDownload("B.A. Tamil Book", "book-download-link-ug2.pdf")
                }
              >
                Download Book
              </button>
            </div>
            <div className="course-card">
              <h4>B.Sc. Computer Science</h4>
              <p>Description: Detailed study of computer science, programming, and algorithms.</p>
              <button
                className="download-button"
                onClick={() =>
                  handleDownload("B.Sc. Computer Science Book", "book-download-link-ug3.pdf")
                }
              >
                Download Book
              </button>
            </div>
          </div>
        </div>

        {/* PG Courses */}
        <div className="department-container">
          <h3>Postgraduate (PG) Courses</h3>
          <div className="courses">
            <div className="course-card">
              <h4>M.A. in Tamil</h4>
              <p>Description: Advanced study of Tamil literature, language, and culture.</p>
              <button
                className="download-button"
                onClick={() =>
                  handleDownload("M.A. Tamil Book", "book-download-link-pg1.pdf")
                }
              >
                Download Book
              </button>
            </div>
            <div className="course-card">
              <h4>M.A. in English</h4>
              <p>Description: Postgraduate degree focusing on advanced English literature studies.</p>
              <button
                className="download-button"
                onClick={() =>
                  handleDownload("M.A. English Book", "book-download-link-pg2.pdf")
                }
              >
                Download Book
              </button>
            </div>
            <div className="course-card">
              <h4>M.Sc. in Mathematics</h4>
              <p>Description: Postgraduate program specializing in advanced mathematics.</p>
              <button
                className="download-button"
                onClick={() =>
                  handleDownload("M.Sc. Mathematics Book", "book-download-link-pg3.pdf")
                }
              >
                Download Book
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Download Record Section */}
      <DownloadRecord onDownload={handleDownload} />
    </div>
  );
};

export default Home;
