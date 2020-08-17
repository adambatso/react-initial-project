import React from 'react';
import { observer, inject } from 'mobx-react';
const ReactD3 = require('react-d3-components');

const ChartBuilder = (props) => {
  const { filteredChartData } = props.charStore;
  const LineChart = ReactD3.LineChart;
  const Brush = ReactD3.Brush;

  console.log('%c filteredChartData', 'font-size:20px;color:lime;', filteredChartData);
  return <div>asdsajkdhkl</div>;
};

export default inject('charStore')(observer(ChartBuilder));
