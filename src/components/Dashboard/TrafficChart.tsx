'use client'
import axios from 'axios'
import { Line } from 'react-chartjs-2'
import React, { useEffect } from 'react'
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
import { useState } from 'react'
import { Res, UserLogs } from '@/models/log'
import { getToken } from '@/app/service/help'
import Constants from '@/models/constant/constant'
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler)

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)


const groupByCategory = (array: any[], key: string | number): Record<string, any[]> => {
  return array.reduce((result, currentItem) => {
    const groupKey = currentItem[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(currentItem);

    return result;
  }, {} as Record<string, any[]>);
};


export default function TrafficChart() {
  const [groupdata, setGroupData] = useState<Record<string, UserLogs[]>>({});

  useEffect(() => {

    axios.get<Res>(`${Constants.API_URL}${Constants.API_LOGS_USER}`,
      {
        params: {


          "$skip": 0,
          "$take": 100,
          // _limit: perPage,
          // _sort: sort,
          // _order: order,
        },
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',

          'Authorization': `${Constants.TOKEN_SHM} ${getToken()}`
        },


      }
    ).then(res => {
      if (!res.data) {
        throw 'Empty access token'
      }
      setGroupData(groupByCategory(res.data?.result, 'createdAtString'))
      console.log(groupdata)
    }).catch(err => {
      console.error(err)

    })
  }, 
  
  
  []);
  return (

    <div style={{ height: '60vh' }}>
      {groupdata ?
        <Line

          data={


            {
              labels: Object.keys(groupdata).map(key => key) ?? [],


              datasets: Object.values(groupdata).map((group, index) => {
                return {
                  label: group[index].ip,
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  borderColor: 'rgba(13, 202, 240, 1)',
                  pointHoverBackgroundColor: '#fff',
                  borderWidth: 2,
                  data: group.map(item => item.request_count),
                  fill: true,
                };
              }) ?? [],






            }}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  drawOnChartArea: false,
                },
              },
              y: {
                beginAtZero: true,
                max: 250,
                ticks: {
                  maxTicksLimit: 5,
                  stepSize: Math.ceil(250 / 5),
                },
              },
            },
            elements: {
              line: {
                tension: 0.4,
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
              },
            },
          }}


        /> : <h1 style={{ textAlign: "center", margin: "auto" }}>Нет данных для отображения</h1>
      }
    </div>
  )
}
