import React from "react";
import reactDom from "react-dom";
import './Dashboard.css';

const Header = () => {
    return (
      <div className="header">
        <h2>Hello Rajat!!</h2>
        <p>rajatpatle@abc.com</p>
      </div>
    );
  };

  const ProgressCircle = ({ title, completedPercentage, remainingPercentage }) => {
    return (
      <div className="progress-circle">
        <p>{title}</p>
        <svg width="100" height="100">
          <circle cx="50" cy="50" r="40" stroke="gray" strokeWidth="5" fill="none" />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="blue"
            strokeWidth="5"
            fill="none"
            strokeDasharray={251.327}
            strokeDashoffset={251.327 - (251.327 * completedPercentage) / 100}
          />
        </svg>
        <div className="progress-text">
          <p>Completed: {completedPercentage}%</p>
          <p>Remaining: {remainingPercentage}%</p>
        </div>
      </div>
    );
  };

  const AssessmentSummary = ({ assessments }) => {
    return (
      <div className="assessment-summary">
        <h3>Assessment Summary</h3>
        <table className="assessment-table">
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
            {assessments.map((assessment) => (
              <tr key={assessment.name}>
                <td>{assessment.name}</td>
                <td>{assessment.status}</td>
                <td>{assessment.score}</td>
                <td>{assessment.date}</td>
                <td><a href="#">View</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const Dashboard = () => {
    const assessments = [
      // ...assessment data from your API or mock data
    ];
  
    return (
      <div className="hexaware-dashboard">
        <Header />
        <div className="progress-container">
          <ProgressCircle title="Training Progress" completedPercentage={70} remainingPercentage={30} />
          <ProgressCircle title="Assessments" completedPercentage={70} remainingPercentage={30} />
          <ProgressCircle title="Projects" completedPercentage={75} remainingPercentage={25} />
        </div>
        <AssessmentSummary assessments={assessments} />
      </div>
    );
  };

  export default Dashboard;