import React, { useState } from "react";
import "./Home.css";
import Sidebar from "./Sidebar";

const Section = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [yearOptions, setYearOptions] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState({});

  // Subject Data
  const courseSubjects = {
    PG: {
      "M.A. Tamil": {
        "1 Year": {
          "1 Sem": ["Literature", "Linguistics"],
          "2 Sem": ["Poetry", "Tamil Culture"],
        },
        "2 Years": {
          "1 Sem": ["Modern Tamil Literature", "Tamil Grammar"],
          "2 Sem": ["Translation Studies", "Tamil Folklore"],
        },
      },
      "M.A. English": {
        "1 Year": {
          "1 Sem": ["Shakespeare", "Literary Criticism"],
          "2 Sem": ["Postcolonial Literature", "Modern Poetry"],
        },
        "2 Years": {
          "1 Sem": ["English Fiction", "Drama Studies"],
          "2 Sem": ["Applied Linguistics", "English Literature Theory"],
        },
      },
    },
    UG: {
      "B.A. English": {
      "1 Year": {
        "1 Sem": ["Literature", "English Grammar"],
        "2 Sem": ["Poetry", "Prose"],
      },
      "2 Years": {
        "1 Sem": ["Shakespeare", "Drama Studies"],
        "2 Sem": ["Modern English Literature", "Linguistics"],
      },
      "3 Years": {
        "1 Sem": ["English Literature", "Modern English Poetry"],
        "2 Sem": ["Rhetoric", "Language and Society"],
      },
    },
    "B.A. Tamil Language and Literature": {
      "1 Year": {
        "1 Sem": ["Tamil Literature", "Tamil Grammar"],
        "2 Sem": ["Poetry", "Prose Studies"],
      },
      "2 Years": {
        "1 Sem": ["Classical Tamil", "Modern Tamil Literature"],
        "2 Sem": ["Translation Studies", "Folklore Studies"],
      },
      "3 Years": {
        "1 Sem": ["Tamil Epigraphy", "Historical Tamil Literature"],
        "2 Sem": ["Modern Tamil Poetry", "Tamil Linguistics"],
      },
    },
    "B.A. History & Tourism": {
      "1 Year": {
        "1 Sem": ["Introduction to History", "Geography of Tourism"],
        "2 Sem": ["World History", "Tourism Planning"],
      },
      "2 Years": {
        "1 Sem": ["Medieval History", "Cultural Tourism"],
        "2 Sem": ["Modern History", "Tourism Management"],
      },
      "3 Years": {
        "1 Sem": ["History of India", "Ecotourism"],
        "2 Sem": ["Heritage Studies", "Tourism Marketing"],
      },
    },
    "B.Com with Computer Applications": {
      "1 Year": {
        "1 Sem": ["Financial Accounting", "Computer Applications in Business"],
        "2 Sem": ["Cost Accounting", "E-Commerce"],
      },
      "2 Years": {
        "1 Sem": ["Corporate Accounting", "Business Statistics"],
        "2 Sem": ["Management Accounting", "Database Management Systems"],
      },
      "3 Years": {
        "1 Sem": ["Business Laws", "Business Analytics"],
        "2 Sem": ["Financial Management", "Web Technologies"],
      },
    },
    "B.B.A.": {
      "1 Year": {
        "1 Sem": ["Principles of Management", "Business Economics"],
        "2 Sem": ["Financial Accounting", "Organizational Behavior"],
      },
      "2 Years": {
        "1 Sem": ["Marketing Management", "Business Law"],
        "2 Sem": ["Human Resource Management", "Business Communication"],
      },
      "3 Years": {
        "1 Sem": ["Entrepreneurship", "Financial Management"],
        "2 Sem": ["International Business", "Project Management"],
      },
    },
    "B.Sc. Computer Science": {
      "1 Year": {
        "1 Sem": ["Intro to Programming", "Mathematics for CS"],
        "2 Sem": ["Data Structures", "Discrete Mathematics"],
      },
      "2 Years": {
        "1 Sem": ["Algorithms", "Computer Networks"],
        "2 Sem": ["Operating Systems", "Database Systems"],
      },
      "3 Years": {
        "1 Sem": ["Object-Oriented Programming", "Software Engineering"],
        "2 Sem": ["Web Programming", "Network Security"],
      },
    },
    "B.Sc. Electronics": {
      "1 Year": {
        "1 Sem": ["Electronics Basics", "Mathematics for Electronics"],
        "2 Sem": ["Digital Electronics", "Electronic Circuits"],
      },
      "2 Years": {
        "1 Sem": ["Microprocessors", "Analog Electronics"],
        "2 Sem": ["Signal Processing", "Control Systems"],
      },
      "3 Years": {
        "1 Sem": ["Communication Systems", "VLSI Design"],
        "2 Sem": ["Digital Signal Processing", "Robotics"],
      },
    },
    "B.Sc. Mathematics": {
      "1 Year": {
        "1 Sem": ["Calculus", "Linear Algebra"],
        "2 Sem": ["Discrete Mathematics", "Probability Theory"],
      },
      "2 Years": {
        "1 Sem": ["Differential Equations", "Vector Calculus"],
        "2 Sem": ["Real Analysis", "Abstract Algebra"],
      },
      "3 Years": {
        "1 Sem": ["Complex Analysis", "Number Theory"],
        "2 Sem": ["Topology", "Partial Differential Equations"],
      },
    },
    "B.Sc. Statistics": {
      "1 Year": {
        "1 Sem": ["Probability Theory", "Descriptive Statistics"],
        "2 Sem": ["Statistical Inference", "Sampling Theory"],
      },
      "2 Years": {
        "1 Sem": ["Regression Analysis", "Time Series Analysis"],
        "2 Sem": ["Design of Experiments", "Multivariate Analysis"],
      },
      "3 Years": {
        "1 Sem": ["Statistical Quality Control", "Computational Statistics"],
        "2 Sem": ["Bayesian Statistics", "Stochastic Processes"],
      },
    },
    "B.Sc. Bio-Technology": {
      "1 Year": {
        "1 Sem": ["Biochemistry", "Genetics"],
        "2 Sem": ["Cell Biology", "Molecular Biology"],
      },
      "2 Years": {
        "1 Sem": ["Bioinformatics", "Microbiology"],
        "2 Sem": ["Plant Biotechnology", "Animal Biotechnology"],
      },
      "3 Years": {
        "1 Sem": ["Genetic Engineering", "Environmental Biotechnology"],
        "2 Sem": ["Bioprocess Technology", "Pharmaceutical Biotechnology"],
      },
    },
    "BCA": {
      "1 Year": {
        "1 Sem": ["Introduction to Programming", "Mathematics for BCA"],
        "2 Sem": ["Database Management Systems", "Data Structures"],
      },
      "2 Years": {
        "1 Sem": ["Operating Systems", "Computer Networks"],
        "2 Sem": ["Software Engineering", "Web Development"],
      },
      "3 Years": {
        "1 Sem": ["Object-Oriented Programming", "Discrete Mathematics"],
        "2 Sem": ["Data Communication", "Software Testing"],
      },
      },
    },
  };

  const handleCourseChange = (e) => {
    const course = e.target.value;
    setSelectedCourse(course);
    setSelectedDepartment(""); // Reset department when course changes
    setSelectedYear(""); // Reset year when course changes
    setSelectedSubjects({}); // Reset subjects when course changes

    if (course === "PG") {
      setYearOptions(["1 Year", "2 Years"]); // PG doesn't use the year selection
    } else if (course === "UG") {
      setYearOptions(["1 Year", "2 Years", "3 Years"]); // Include 3 Years for UG
    } else {
      setYearOptions([]);
    }
  };

  const handleDepartmentChange = (e) => {
    const department = e.target.value;
    setSelectedDepartment(department);
    setSelectedYear(""); // Reset year when department changes
    setSelectedSubjects({}); // Reset subjects when department changes

    if (department) {
      setYearOptions(["1 Year", "2 Years", "3 Years"]); // Set years for UG courses
    }
  };

  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);

    // Handle PG and UG subjects
    if (selectedCourse === "PG" && selectedDepartment) {
      setSelectedSubjects(courseSubjects[selectedCourse]?.[selectedDepartment]?.[year] || {});
    } else if (selectedCourse === "UG" && selectedDepartment) {
      setSelectedSubjects(courseSubjects[selectedCourse]?.[selectedDepartment]?.[year] || {});
    }
  };

  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <div className="section-container">
          <h1 className="section-title">Select Course, Department, Year, and Subjects</h1>
          <form className="section-form">
            <div className="form-group">
              <label htmlFor="course" className="form-label">
                Select Course:
              </label>
              <select
                id="course"
                className="form-select"
                value={selectedCourse}
                onChange={handleCourseChange}
              >
                <option value="">-- Select --</option>
                <option value="PG">Postgraduate (PG)</option>
                <option value="UG">Undergraduate (UG)</option>
              </select>
            </div>

            {selectedCourse === "PG" && (
              <div className="form-group">
                <label htmlFor="department" className="form-label">
                  Select Department:
                </label>
                <select
                  id="department"
                  className="form-select"
                  value={selectedDepartment}
                  onChange={handleDepartmentChange}
                >
                  <option value="">-- Select Department --</option>
                  <option value="M.A. Tamil">M.A. Tamil</option>
                  <option value="M.A. English">M.A. English</option>
                  <option value="M.Sc. Computer Science">M.Sc. Computer Science</option>
                  <option value="M.Sc. Electronics">M.Sc. Electronics</option>
                  <option value="M.Sc. Nano Science and Nano Technology">
                    M.Sc. Nano Science and Nano Technology
                  </option>
                  <option value="M.Com">M.Com</option>
                  <option value="M.S.W.">M.S.W.</option>
                  <option value="M.C.A.">M.C.A.</option>
                  <option value="M.A. Economics">M.A. Economics</option>
                  <option value="M.Sc. Mathematics">M.Sc. Mathematics</option>
                  {/* Add more PG departments */}
                </select>
              </div>
            )}

            {selectedCourse === "UG" && (
              <div className="form-group">
                <label htmlFor="department" className="form-label">
                  Select Department:
                </label>
                <select
                  id="department"
                  className="form-select"
                  value={selectedDepartment}
                  onChange={handleDepartmentChange}
                >
                  <option value="">-- Select Department --</option>
                  <option value="">-- Select Department --</option>
                  <option value="B.A. English">B.A. English</option>
                  <option value="B.A. Tamil Language and Literature">B.A. Tamil Language and Literature</option>
                  <option value="BCA">Bachelor of Computer Applications (BCA)</option>
                  <option value="B.Sc. Computer Science">B.Sc. Computer Science</option>
                  <option value="B.Com">B.Com</option>
                  <option value="B.B.A.">B.B.A.</option>
                  <option value="B.Sc. Electronics">B.Sc. Electronics</option>
                  <option value="B.Sc. Mathematics">B.Sc. Mathematics</option>
                  <option value="B.Sc. Statistics">B.Sc. Statistics</option>
                  <option value="B.Sc. Bio - Technology">B.Sc. Bio - Technology</option>
                  {/* Add more UG departments */}
                </select>
              </div>
            )}

            {selectedDepartment && (
              <div className="form-group">
                <label htmlFor="year" className="form-label">
                  Select Year:
                </label>
                <select
                  id="year"
                  className="form-select"
                  value={selectedYear}
                  onChange={handleYearChange}
                >
                  <option value="">-- Select Year --</option>
                  {yearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {selectedYear && selectedDepartment && selectedCourse === "UG" && (
              <div className="subjects-container">
                <h2 className="subjects-title">Subjects for {selectedDepartment} ({selectedYear})</h2>
                {Object.entries(selectedSubjects).map(([semester, subjectList]) => (
                  <div key={semester} className="semester-container">
                    <h3>{semester}</h3>
                    <ul>
                      {subjectList.map((subject, index) => (
                        <li key={index}>{subject}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {selectedYear && selectedDepartment && selectedCourse === "PG" && (
              <div className="subjects-container">
                <h2 className="subjects-title">Subjects for {selectedDepartment} ({selectedYear})</h2>
                {Object.entries(selectedSubjects).map(([semester, subjectList]) => (
                  <div key={semester} className="semester-container">
                    <h3>{semester}</h3>
                    <ul>
                      {subjectList.map((subject, index) => (
                        <li key={index}>{subject}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </form>
        </div>
      </main>
    </div>
  );
};

export default Section;
