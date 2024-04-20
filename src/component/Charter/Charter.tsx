import 'chart.js/auto';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

function Charter() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Revenue (vnd)',
        backgroundColor: [],
        data: [],
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/products/');
        const products = response.data;
        const labels = products.map((product: any) => product.name);
        const data = products.map(
          (product: any) => product.sold_quantity * product.price,
        );
        const backgroundColors = Array.from(
          { length: labels.length },
          () =>
            `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
              Math.random() * 256,
            )}, ${Math.floor(Math.random() * 256)}, 0.6)`,
        );

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Revenue (Vnd)',
              backgroundColor: backgroundColors,
              data: data,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Bar
        data={chartData}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
}

export default Charter;
