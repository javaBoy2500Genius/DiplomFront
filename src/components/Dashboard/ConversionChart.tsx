'use client'

import { Line } from 'react-chartjs-2'
import React from 'react'
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'
import { UserLogsWeek } from '@/models/log'
import { NavItem } from 'react-bootstrap'
interface ConversionChartProps {
  data: UserLogsWeek[];
}
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler)

const ConversionChart: React.FC<ConversionChartProps> = ({ data }) => {
  return (
    <Line
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        maintainAspectRatio: false,
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
        elements: {
          line: {
            borderWidth: 2,
            tension: 0.4,
          },
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
          },
        },
      }}
      data={
        {

          labels: data.map(item => {
            return item.day + " " + item.ip
          }),
          datasets: [{

            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)',
            data: data.map(item => {
              return item.reqestCount;
            }),
            fill: true,
          }],
        }}
    />
  )
}
export default ConversionChart