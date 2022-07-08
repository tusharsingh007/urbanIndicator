import React,{useState} from 'react'
// import C11 from './C11'
// import Chart from './Chart'
import Horizontalchart from './HorizontalChart'
import Horizontalchart1 from './HorizontalChart1'
// import LineChartScreen from './LineChartScreen'


export default function About() {
  return (<>
    {/* <div className="container">
        <h1>Line Chart-1 --AWS Polaris</h1>
    <Chart/>
    </div>
    <br/>
    <h1> Line chart-2</h1>
    <div className="container">
    <C11/></div>  */}
    <div className="container"><h1> Indices Graph</h1></div>
    <div className="container">
      <Horizontalchart/>
    </div>
   <br/> <hr/><br/>
    <div className="container"><h1>Coverage Graph</h1></div>
    <div className="container">
      <Horizontalchart1/>
    </div>
  
    </>
  )
}

