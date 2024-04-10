import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart } from 'chart.js/auto';
const PopulationGraph = () => {
const [populationData, setPopulationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const data = await response.json();
        setPopulationData(data.data);
        console.log(data.data)
      } catch (error) {
        console.error('Error fetching population data:', error);
      }
    };

    fetchData();
  }, []);

  const renderGraph = () => {
    if (!populationData) {
      return <div>Loading...</div>;
    }
    const labels = populationData.map(item => `${item.Nation}(${item.Year})`);
    const populations = populationData.map(item => item.Population);
  
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Population',
          data: populations,
          fill: false,
          borderColor: 'green',
          tension: 0.1
        }
      ]
    };
  
    const scales = {
      y: {
        type: 'linear',
        title: {
          display: true,
          text: 'Population'
        }
      }
    };
  
    return <Line data={data} options={{ scales: scales }}  style={{color:"#fff",backgroundColor:"black"}}/>;
  };
  

  return (
    <div className='row'> 
      <div style={{width:"400px",height:"300px",color:"#fff"}} className='text-center col-md'>
      {renderGraph()}
      </div>
      
    </div>
  );
};

export default PopulationGraph;
