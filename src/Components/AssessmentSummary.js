import React from "react";

const data = [
  { name: "Java Core", status: "Pass", score: 67, date: "Nov 15, 2024" },
  { name: "Data Structures and Algorithm", status: "Pass", score: 76, date: "Nov 30, 2024" },
  { name: "Machine Learning", status: "Assigned", score: "-", date: "-" },
  { name: "Object Oriented Programming", status: "Failed", score: 45, date: "Oct 05, 2024" },
  { name: "React", status: "Pass", score: 83, date: "Nov 22, 2024" },
];

function AssessmentSummary() {
  return (
    <div className="assessment-summary">
      <h2>Assessment Summary</h2>
      <div className="summary-cards">
        <div className="card red">Total Assigned Assessments: 5</div>
        <div className="card">Assessments Attempted: 4</div>
        <div className="card">Assessments Passed: 3</div>
        <div className="card">Assessments Failed: 1</div>
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
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td>{item.score}</td>
              <td>{item.date}</td>
              <td>
                <a href="#">View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AssessmentSummary;
