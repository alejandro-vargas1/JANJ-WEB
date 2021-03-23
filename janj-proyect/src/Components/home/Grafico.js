import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'Divisas ',
        data: [12, 19, 3, 5, 2, 3],
        // fill: false,
        backgroundColor: '#2dc997',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  }
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }


export default class Grafico extends React.Component {
  render() {
    return (
        <>
        <Line data={data} options={options} />
      </>
    );
  }
}
