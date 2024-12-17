import React from "react";
import "./App.css";
import AssessmentCard from "./Components/AssessmentCard";
import AssessmentSummary from "./Components/AssessmentSummary";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./Card/Card";
import StudentForm from "./Student-Information/StudentForm";

function App() {
  return (
    <div>
      <StudentForm/>
    </div>
    // <div className="dashboard">
    //   <StudentForm/>
    //   <Sidebar />

    //   <main className="main-content">
    //     <div>
    //       <h1>Hello Rajat!!</h1>
    //     </div>  
    //     <div className="cards-container">
    //       {/* <AssessmentCard
    //         title="Training Progress"
    //         completed={70}
    //         remaining={30}
    //         color="#F06595"
    //       /> */}
    //       {/* <AssessmentCard
    //         title="Assessments"
    //         completed={70}
    //         remaining={30}
    //         color="#5A67D8"
    //       />
    //       <AssessmentCard
    //         title="Projects"
    //         completed={70}
    //         remaining={30}
    //         color="#38B2AC"
    //       /> */}

    //       <Card title="Training Progress"/>
    //       <Card title="Assessments"/>
    //       <Card title="Projects"/>

    //     </div>
    //     <AssessmentSummary />
    //   </main>
    // </div>
  );
}

export default App;
