import * as React from 'react';
import { ChartTitle } from './chartComponent.style';
const ReactD3 = require('react-d3-components');

export const ChartComponent = () => {
    const [y, setY] = React.useState(10)
    const BarChart = ReactD3.BarChart;
    const data = [{
        label: 'somethingA',
        values: [{x: 'SomethingA', y: y}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
    }];
    return <><ChartTitle>
        This is my first Chart
    </ChartTitle>
    <button onClick={() => {setY(Math.ceil(Math.random() * 20))}}>clickOnMeToChange</button>
    <BarChart
        data={data}
        width={400}
        height={400}
        margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
    </>
}