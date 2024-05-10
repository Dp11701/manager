import 'chart.js/auto';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import { URL } from '../../constants/constants';

function Charter() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Revenue (vnd)',
        borderColor: [],
        backgroundColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        data: [],
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}/products`);
        const products = response.data;
        const labels = products.map((product: any) => product.name);
        const data = products.map(
          (product: any) => product.sold_quantity * product.price,
        );
        const borderColors = Array.from(
          { length: labels.length },
          () =>
            `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
              Math.random() * 256,
            )}, ${Math.floor(Math.random() * 256)}, 1)`,
        );

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Revenue (Vnd)',
              borderColor: borderColors,
              backgroundColor: 'rgba(75,192,192,0.2)',
              borderWidth: 2,
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
      <Line
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
