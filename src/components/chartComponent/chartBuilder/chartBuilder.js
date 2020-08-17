import React from 'react';
import { observer, inject } from 'mobx-react';
import CanvasJSReact from '../../../lib/canvasjs.react';

const ChartBuilder = (props) => {
  const [data, setData] = React.useState();
  const CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const { filteredChartData } = props.charStore;

  React.useEffect(() => {
    const dataResult = [];
    Object.keys(filteredChartData).forEach((segmentKey) => {
      if (filteredChartData[segmentKey].length) {
        dataResult.push({
          type: 'spline',
          name: `${segmentKey}`,
          showInLegend: true,
          dataPoints: filteredChartData[segmentKey],
        });
      }
    });
    setData(dataResult);
  }, [filteredChartData]);

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
    <div style={{ marginTop: 30 }}>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default inject('charStore')(observer(ChartBuilder));
