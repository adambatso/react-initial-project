import React from 'react';
import { Provider } from 'mobx-react';
import chartData from '../../../public/data.json5';
import { ChartDashboard, ChartPageWrapper, ChartComponentWrapper } from './chartPage.style';

import chartStore from '../../stores/chart-store';
import ChartComponent from '../chartComponent/chartComponent';

export const ChartPage = () => {
  const store = new chartStore(chartData);

  //TODO:: need to separate dashboard
  return (
    <Provider charStore={store}>
      <ChartPageWrapper>
        <ChartDashboard>
          <h2>My Deshboard</h2>
        </ChartDashboard>
        <ChartComponentWrapper>
          <ChartComponent />
        </ChartComponentWrapper>
      </ChartPageWrapper>
    </Provider>
  );
};
