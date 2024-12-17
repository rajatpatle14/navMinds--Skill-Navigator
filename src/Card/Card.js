import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Progress from './Progress';
import ReportPage from './ReportPage';
import AnalyzePage from './AnalyzePage';

function Card({title}) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Progress title={title} />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/analyze" element={<AnalyzePage />} />
      </Routes>
    </Router>
  );
}

export default Card;
