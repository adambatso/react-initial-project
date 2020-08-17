import React from 'react';
import PropTypes from 'prop-types';
import {
  DropdownItemWrapper,
  DropdownItemsBox,
  DropdownWrapper,
  DropdownButton,
} from './genericDropdown.style';

export const GenericDropdown = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(props.defaultItemIndex || 0);
  const { itemList } = props;
  React.useEffect(() => {
    const { onSelectedItem } = props;
    onSelectedItem && onSelectedItem(selectedIndex);
  }, [selectedIndex]);

  const getDropdownItems = React.useCallback(() => {
    const { itemList } = props;
    return itemList.map((itemName, index) => {
      const onClick = () => {
        setSelectedIndex(index);
        setIsOpen(false);
      };
      return (
        <DropdownItemWrapper
          isSelected={index === selectedIndex}
          key={`${itemName}_${index}`}
          onClick={onClick}
        >
          {itemName}
        </DropdownItemWrapper>
      );
    });
  }, [props.itemList, selectedIndex]);

  //TODO:: need to define the behaviour when clicking out of the dropdown so it will be closed and then change the dropdown onClick function

  return (
    <DropdownWrapper>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>{itemList[selectedIndex]}</DropdownButton>
      <DropdownItemsBox isOpen={isOpen}>{getDropdownItems()}</DropdownItemsBox>
    </DropdownWrapper>
  );
};

GenericDropdown.propTypes = {
  onSelectedItem: PropTypes.func.isRequired,
  itemList: PropTypes.arrayOf(PropTypes.any),
  defaultItemIndex: PropTypes.number,
};
