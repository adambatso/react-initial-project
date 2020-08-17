import styled from 'styled-components';

const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  width: auto;
  margin: 10px;
`;
const DropdownButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
  z-index: 2;
`;

//TODO:: remove display condition for animation
const DropdownItemsBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  transform: translate(0, 40px);
  top: 0;
  z-index: 3;
  transition: opacity 0.2s, max-height 0.2s;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  max-height: ${(props) => (props.isOpen ? '400px' : '0px')};
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  cursor: pointer;
  background-color: rgb(170, 170, 170);
`;
const DropdownItemWrapper = styled.div`
  font-size: 12px;
  padding: 10px;
  color: ${(props) => (props.isSelected ? 'black' : 'white')};
  font-weight: ${(props) => (props.isSelected ? '600' : '400')};
`;

export { DropdownWrapper, DropdownItemsBox, DropdownItemWrapper, DropdownButton };
