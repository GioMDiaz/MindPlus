import React from 'react';
import './VerticalBar.sass'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)


export function VerticalBar({ moods }) {

  const data = {
    type: 'verticalBar',
    labels: [
      "Excelent",
      "Very Good",
      "Good",
      "Not so Bad",
      "Regular"
    ],
    datasets: [
      {
        label: "Last 90 days",
        data: [
          moods.filter(mood => mood.mood === 5).length,
          moods.filter(mood => mood.mood === 4).length,
          moods.filter(mood => mood.mood === 3).length,
          moods.filter(mood => mood.mood === 2).length,
          moods.filter(mood => mood.mood === 1).length,
        ],

        backgroundColor: [
          'rgba(0, 255, 0, 0.7)',
          'rgba(53, 162, 235, 0.5)',
          'rgba(255,255,0,0.7)',
          'rgba(255, 125, 0, 0.4)',
          'rgba(200, 0, 0, 0.7)'
        ],
      },
    ],
  }

  return <div className='vertical__bar'>
    <Bar className='bar' options={{
        animation: {
        duration: 2000,
        easing: "easeOutCirc",
      },
      // plugins: {
      //   legend: {
      //     position: 'top',
      //   },
      //   title: {
      //     display: true,
      //     text: 'Here is a summary of your mood',
      //   },
      // },
    }}
      data={data} />
  </div>
}

export default VerticalBar