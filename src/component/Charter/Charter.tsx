import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function Charter() {
  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Bar
        data={{
          labels: ['Dress', 'Jean', 'Camera', 'Shirt', 'Polo'],
          datasets: [
            {
              label: 'Revenue (millions)',
              backgroundColor: [
                '#3e95cd',
                '#8e5ea2',
                '#3cba9f',
                '#e8c3b9',
                '#c45850',
              ],
              data: [2478, 5267, 734, 784, 433],
            },
          ],
        }}
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
