import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import 'chart.js/auto';
// Implemetntation of donut chart
const Progress = ({title}) => {
  const navigate = useNavigate();

  const data = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#F55C8A', '#E8E8FF'], // Pink and light purple
        hoverBackgroundColor: ['#F33B6E', '#D1D1FF'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 15,
          padding: 15,
          color: '#666',
        },
      },
    },
    cutout: '70%', // Doughnut thickness
    responsive: true,
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', width: '300px', margin: 'auto' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', paddingBottom:'10px' }}>
          {title}
        </h3>
        <Doughnut data={data} options={options} />
        <div style={{ marginTop: '20px' }}>
          <button
            onClick={() => navigate('/report')}
            style={{
              marginRight: '10px',
              padding: '10px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#E6E6FF',
              color: '#4A4AFF',
              cursor: 'pointer',
            }}
          >
            View Report
          </button>
          <button
            onClick={() => navigate('/analyze')}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#FDE6EF',
              color: '#F55C8A',
              cursor: 'pointer',
            }}
          >
            Analyze
          </button>
        </div>
      </div>
    </div>
  );
};

export default Progress;
