import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const Dankchart = () => {
  const [chartData, setChartData]= useState({})

  const chart = () => {
    setChartData({
      labels: ['monday','tuesday'],
      datasets: [
          {
            label: 'level',
            data:[34,43],
            backgroundColor: [
              'rgba(75,192,192,0.6)'
            ],
            borderWidth: 4
          }
      ]
    }) 
  }
  useEffect(() => {
    chart()
  },[])
  return(
    <div>
      <Line data={chartData}/>
    </div>
  )
}
export default Dankchart;