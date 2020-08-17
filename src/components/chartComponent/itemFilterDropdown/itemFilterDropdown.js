import React from 'react';
import { observer, inject } from 'mobx-react';
import { GenericDropdown } from '../../genericDropdown/genericDropdown';

const ItemFilterDropdown = (props) => {
  const { charStore } = props;

  const itemList = [10, 20, 30, 40, 50, 100, 150];
  const itemlistStinrgs = itemList.map((itemNumber) => {
    return `${itemNumber} items`;
  });
  const onSelectedItem = (index) => {
    charStore.setSelectedItemFilter(itemList[index]);
  };
  const itemDropdownProps = {
    onSelectedItem: onSelectedItem,
    itemList: itemlistStinrgs,
    defaultItemIndex: 5,
  };
  return <GenericDropdown {...itemDropdownProps} />;
};

export default inject('charStore')(observer(ItemFilterDropdown));
