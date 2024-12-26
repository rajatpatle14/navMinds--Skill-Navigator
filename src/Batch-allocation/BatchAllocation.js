import React, { useEffect, useState } from "react";
import "./BatchAllocation.css";

const BatchAllocated = () => {
  const [batch, setBatch] = useState(null);

//   useEffect(() => {
    // Fetch batch data from the backend
//     const fetchBatchDetails = async () => {
//       try {
//         const response = await fetch("http://localhost:8000/api/batch");
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setBatch(data);
//       } catch (error) {
//         console.error("Error fetching batch details:", error);
//       }
//     };

//     fetchBatchDetails();
//   }, []);

  return (
    <div className="batch-allocated-container">
      <div className="batch-card">
        
        {/* <button className="close-button">✖</button> */}
        <h1>Batch Allocated!</h1>
        <p>
          According to the data, you were assigned to the{" "}
          <span className="batch-name">{batch?.name || "..."}</span>
        </p>
        <p className="batch-id">{batch?.id || "..."}</p>
        <button className="continue-button">Continue</button>
      </div>
    </div>
  );
};

export default BatchAllocated;
