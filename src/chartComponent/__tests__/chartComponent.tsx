import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartComponent } from '../chartComponent';
import { ChartTitle } from '../chartComponent.style';

describe('chart component test', () => {
  it('should render title', () => {
    const chartComponent = shallow(<ChartComponent />);
    const chartTitle = chartComponent.find(ChartTitle);

    expect(chartTitle.text()).toEqual('This is my first Chart');
  });
});
