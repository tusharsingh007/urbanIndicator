import React, { Component } from 'react';

import { scaleLinear, scaleBand } from 'd3-scale';

import XYAxis from './axis/xy-axis';
import { line, curveMonotoneX } from 'd3-shape';
import { extent } from 'd3-array';
import { transition } from 'd3-transition';
import Line from './line';



class C11 extends Component {
    constructor() {
      super();
      this.state = {
        data: [
          { name: '(2019, 1)', value: 0.1555681818 },
          { name: '(2019, 4)', value: 0.1184090909 },
          { name: '(2019, 7)', value: 0.1417045455 },
          { name: '(2019, 10)', value: 0.1867045455 },
          { name: '(2020, 1)', value: 0.1664772727 },
          { name: '(2020, 4)', value: 0.1280681818 },
          { name: '(2020, 7)', value: 0.1134090909 },
          { name: '(2020, 10)', value: 0.1864772727 },
          { name: '(2021, 1)', value: 0.1627272727 },
          { name: '(2021, 4)', value: 0.1275 },
          { name: '(2021, 7)', value: 0.1460227273 },
          { name: '(2021, 10)', value: 0.1898863636 },
        ],
      };
    }
  
    render() {
      const { data } = this.state;
      const parentWidth = 800;
  
      const margins = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      };
  
      const width = parentWidth - margins.left - margins.right;
      const height = 350 - margins.top - margins.bottom;
  
      const ticks = 5;
      const t = transition().duration(1000);
  
      const xScale = scaleBand()
        .domain(data.map((d) => d.name))
        .rangeRound([0, width])
        .padding(0.1);
  
      const yScale = scaleLinear()
        .domain(extent(data, (d) => d.value))
        .range([height, 0])
        .nice();
  
      const lineGenerator = line()
        .x((d) => xScale(d.name))
        .y((d) => yScale(d.value))
        .curve(curveMonotoneX);
  
      return (
        <div>
          {/* <button onClick={this.randomData}>Randomize data</button> */}
          <svg
            className="lineChartSvg"
            width={width + margins.left + margins.right}
            height={height + margins.top + margins.bottom}
          >
            <g transform={`translate(${margins.left}, ${margins.top})`}>
              <XYAxis {...{ xScale, yScale, height, ticks, t }} />
              <Line
                data={data}
                xScale={xScale}
                yScale={yScale}
                lineGenerator={lineGenerator}
                width={width}
                height={height}
              />
            </g>
          </svg>
        </div>
      );
    }
  }
  
  export default C11;