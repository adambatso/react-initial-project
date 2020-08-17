import React from 'react';
import chartData from '../../../public/data.json5';
import { GenericDropdown } from '../genericDropdown/genericDropdown';

export const ChartPage = () => {
  console.log('%c chartData', 'font-size:20px;color:lime;', chartData);

  const genericDropdownProps = {
    onSelectedItem: (index) => {
      console.log('%c selectedindex', 'font-size:20px;color:lime;', index);
    },
    itemList: ['check', 'check2', 'check3', 'check4'],
  };
  return (
    <div>
      <GenericDropdown {...genericDropdownProps} />
    </div>
  );
};
