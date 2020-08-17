import React from 'react';
import { observer, inject } from 'mobx-react';

import CanvasJSReact from '../../../lib/canvasjs.react';

const ChartBuilder = (props) => {
  const CanvasJS = CanvasJSReact.CanvasJS;
  const CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const { filteredChartData } = props.charStore;

  const getData = () => {
    const data = [];
    Object.keys(filteredChartData).forEach((segmentKey) => {
      if (filteredChartData[segmentKey].length) {
        data.push({
          type: 'spline',
          name: `${segmentKey}`,
          showInLegend: true,
          dataPoints: filteredChartData[segmentKey],
        });
      }
    });
    return data;
  };
  const data = getData();

  const options = {
    animationEnabled: true,

    axisY: {
      title: 'Segments',
    },
    toolTip: {
      shared: true,
    },
    data: data,
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default inject('charStore')(observer(ChartBuilder));
