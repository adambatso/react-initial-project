import React from 'react';
import { observer, inject } from 'mobx-react';

import CanvasJSReact from '../../../lib/canvasjs.react';

const ChartBuilder = (props) => {
  const CanvasJS = CanvasJSReact.CanvasJS;
  const CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const { filteredChartData } = props.charStore;
  console.log('%c filteredChartData', 'font-size:20px;color:lime;', filteredChartData);
  const dataBySegment = React.useMemo(() => {
    //TODO:: do it dynamic
    const dataBySegment = {
      segmentA: [],
      segmentB: [],
      segmentC: [],
      segmentD: [],
    };
    //TODO:: need to move it to store so it will be saved in cache
    filteredChartData.forEach((element) => {
      Object.keys(element).forEach((key) => {
        if (dataBySegment[key]) {
          const date = new Date(element.date);

          dataBySegment[key].push({
            y: element[key],
            label: date.getMonth(),
          });
        }
      });
    });
    return dataBySegment;
  }, [filteredChartData]);
  console.log('%c dataBySegment', 'font-size:20px;color:lime;', dataBySegment);
  const getData = () => {
    const data = [];
    Object.keys(dataBySegment).forEach((segmentKey) => {
      if (dataBySegment[segmentKey].length) {
        data.push({
          type: 'spline',
          name: `${segmentKey}`,
          showInLegend: true,
          dataPoints: dataBySegment[segmentKey],
        });
      }
    });
    return data;
  };
  const options = {
    animationEnabled: true,

    axisY: {
      title: 'Segments',
    },
    toolTip: {
      shared: true,
    },
    data: getData(),
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default inject('charStore')(observer(ChartBuilder));
