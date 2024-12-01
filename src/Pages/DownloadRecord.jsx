import React, { useState } from "react";
import "./Home.css"; // Importing the CSS file

const DownloadRecord = ({ onDownload }) => {
  const [downloads, setDownloads] = useState([]);

  const handleDownload = (bookTitle, bookUrl) => {
    // Add the download record
    const newRecord = {
      title: bookTitle,
      timestamp: new Date().toLocaleString(),
      url: bookUrl, // Store the URL of the downloaded book
    };
    setDownloads((prevDownloads) => [...prevDownloads, newRecord]);

    // Call the passed-in download handler
    if (onDownload) {
      onDownload(bookTitle, bookUrl); // Prop function for logging
    }
  };

  const handleViewBook = (bookUrl) => {
    // Open the book in a new tab for viewing
    window.open(bookUrl, "_blank");
  };

  return (
    <div>
      <h2>Download Records</h2>
      <ul>
        {downloads.length === 0 ? (
          <li>No downloads yet.</li>
        ) : (
          downloads.map((record, index) => (
            <li key={index}>
              {record.title} (Downloaded at {record.timestamp}){" "}
              <button onClick={() => handleViewBook(record.url)}>View</button>
            </li>
          ))
        )}
      </ul>

      {/* Sample download links (you can update these to your actual download links) */}
      <div>
        <button
          onClick={() =>
            handleDownload("B.A. English Book", "book-download-link-ug1.pdf")
          }
        >
          Download B.A. English Book
        </button>
        <button
          onClick={() =>
            handleDownload("B.A. Tamil Book", "book-download-link-ug2.pdf")
          }
        >
          Download B.A. Tamil Book
        </button>
        <button
          onClick={() =>
            handleDownload("B.Sc. Computer Science Book", "book-download-link-ug3.pdf")
          }
        >
          Download B.Sc. Computer Science Book
        </button>
      </div>
    </div>
  );
};

export default DownloadRecord;
