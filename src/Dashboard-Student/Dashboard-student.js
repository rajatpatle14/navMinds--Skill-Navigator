import Sidebar from "./Sidebar/Sidebar";
import Card from "./Card/Card";
import AssessmentSummary from "./AssessmetSummary/AssessmentSummary";

function Dashboard(){
    return(
       <div>
        <div className="dashboard">      
         <Sidebar/>
         <main className="main-content">
           <div>
             <h1>Hello Rajat!!</h1>
           </div>  
           <div className="cards-container">
             <Card title="Training Progress"/>
             <Card title="Assessments"/>
             <Card title="Projects"/> 
           </div>
             <AssessmentSummary />
         </main>
         </div>
        </div>
           /*{ <AssessmentCard
    //         title="Training Progress"
    //         completed={70}
    //         remaining={30}
    //         color="#F06595"
    //       /> *}/
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
    //       /> */

    );
}

export default Dashboard