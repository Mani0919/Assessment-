import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'chart.js/auto';
import "./G.css";
const PopulationGraph = () => {
  const [data, setData] = useState(null);
  let myChart;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      renderGraph();
    }
  }, [data]);

  const renderGraph = () => {
    if (!data) return;

    const labels = data.map(item => item.Nation);
    const populations = data.map(item => item.Population);

    const ctx = document.getElementById('myChart').getContext('2d');

    if (myChart) {
      myChart.destroy(); // Destroy previous chart if exists
    }

    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Population',
            data: populations,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Population',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Nation',
            },
          },
        },
      },
    });
  };

  return (
    <div className="population-graph">
      <h2>Population Data by Nation</h2>
      <div id="Chart">
        <canvas id="myChart"></canvas>
      </div>
    </div>
  );
};

export default PopulationGraph;
