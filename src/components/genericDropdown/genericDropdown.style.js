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

const DropdownItemsBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 10px;
  top: 0;
  transition: opacity 0.2s, max-height 0.2s;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  max-height: ${(props) => (props.isOpen ? '400px' : '0px')};
  cursor: pointer;
  background-color: gray;
`;
const DropdownItemWrapper = styled.div`
  font-size: 12px;
  padding: 10px;
`;

export { DropdownWrapper, DropdownItemsBox, DropdownItemWrapper, DropdownButton };
