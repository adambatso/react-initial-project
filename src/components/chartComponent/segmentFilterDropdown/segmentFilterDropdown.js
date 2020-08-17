import React from 'react';
import { observer, inject } from 'mobx-react';
import { GenericDropdown } from '../../genericDropdown/genericDropdown';

const SegmentFilterDropdown = (props) => {
  const { charStore } = props;

  //TODO Create object with key value instead of two constants
  const segmentListData = ['all', 'segmentA', 'segmentB', 'segmentC', 'segmentD'];
  const segmentsList = ['All Segments', 'Segment A', 'Segment B', 'Segment C', 'Segment D'];
  const onSelectedItem = (index) => {
    charStore.setSelectedSegmentFilter(segmentListData[index]);
  };
  const itemDropdownProps = {
    onSelectedItem: onSelectedItem,
    itemList: segmentsList,
  };
  return <GenericDropdown {...itemDropdownProps} />;
};

export default inject('charStore')(observer(SegmentFilterDropdown));
