import React from "react";

function AssessmentCard({ title, completed, remaining, color }) {
  return (
    <div className="assessment-card">
      <div className="header">
        <h3>{title}</h3>
      </div>
      <div
        className="circle-chart"
        style={{
          background: `conic-gradient(${color} ${completed}%, #e4e4e4 ${completed}%)`,
        }}
      >
        <div className="circle-inner">
          <p>{`Completed ${completed}%`}</p>
          <p>{`Remaining ${remaining}%`}</p>
        </div>
      </div>
      <div className="actions">
        <button>View Report</button>
        <button>Analyze</button>
      </div>
    </div>
  );
}

export default AssessmentCard;
