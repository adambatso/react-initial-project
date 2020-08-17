import React from 'react';
import { ChartFiltersWrapper } from './chartComponent.style';
import ItemFilterDropdown from './itemFilterDropdown/itemFilterDropdown';
import SegmentFilterDropdown from './segmentFilterDropdown/segmentFilterDropdown';
import ChartBuilder from './chartBuilder/chartBuilder';

const ChartComponent = () => {
  return (
    <>
      <h2>My Chart</h2>
      <ChartFiltersWrapper>
        <ItemFilterDropdown />
        <SegmentFilterDropdown />
      </ChartFiltersWrapper>
      <ChartBuilder />
    </>
  );
};

export default ChartComponent;
