import React, { useState, useEffect } from "react";
import "./AssessmentSummary.css";
import * as XLSX from "xlsx";

const AssessmentSummary = () => {
  const [summaryData, setSummaryData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeButton, setActiveButton] = useState("All");

  // Fetch data from backend
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("http://your-backend-api-url/assessments");
//       const data = await response.json();
//       setSummaryData(data);
//       setFilteredData(data);
//     };
//     fetchData();
//   }, []);

  // Filter logic
  const filterData = (filterType) => {
    setActiveButton(filterType);
    if (filterType === "All") {
      setFilteredData(summaryData);
    } else if (filterType === "Passed") {
      setFilteredData(summaryData.filter((item) => item.status === "Pass"));
    } else if (filterType === "Failed") {
      setFilteredData(summaryData.filter((item) => item.status === "Fail"));
    } else if (filterType === "Assigned") {
      setFilteredData(summaryData.filter((item) => item.status === "Assigned"));
    }
  };

  // Export to Excel/CSV
  const exportTable = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Assessments");
    XLSX.writeFile(workbook, "assessment_summary.xlsx");
  };

  return (
    <div className="assessment-summary">
      <h2>Assessment Summary</h2>
      <div className="buttons">
        <button
          className={activeButton === "All" ? "active" : ""}
          onClick={() => filterData("All")}
        >
          Total Assigned Assessments: {summaryData.length}
        </button>
        <button
          className={activeButton === "Attended" ? "active" : ""}
          onClick={() => filterData("Attended")}
        >
          Assessments Attended: {summaryData.filter((d) => d.status === "Pass" || d.status === "Fail").length}
        </button>
        <button
          className={activeButton === "Passed" ? "active" : ""}
          onClick={() => filterData("Passed")}
        >
          Assessments Passed: {summaryData.filter((d) => d.status === "Pass").length}
        </button>
        <button
          className={activeButton === "Failed" ? "active" : ""}
          onClick={() => filterData("Failed")}
        >
          Assessments Failed: {summaryData.filter((d) => d.status === "Fail").length}
        </button>
        <button
          className={activeButton === "Assigned" ? "active" : ""}
          onClick={() => filterData("Assigned")}
        >
          Remaining Assessments: {summaryData.filter((d) => d.status === "Assigned").length}
        </button>
      </div>

      <div className="top-right-buttons">
        <button onClick={() => alert("Filter functionality")}>Filter</button>
        <button onClick={exportTable}>Export</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Assessment Name</th>
            <th>Status</th>
            <th>Score</th>
            <th>Date</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td className={`status ${item.status.toLowerCase()}`}>{item.status}</td>
              <td>{item.score || "-"}</td>
              <td>{item.date || "-"}</td>
              <td>
                <a href={`/feedback/${item.id}`} className="view-link">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssessmentSummary;
