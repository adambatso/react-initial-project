import styled from 'styled-components';

const ChartPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

const ChartDashboard = styled.div`
  background-color: darkblue;
  min-height: 100vh;
  h2 {
    font-size: 30px;
    font-weight: 600;
  }
  padding: 10px;
  color: white;
`;

const ChartComponentWrapper = styled.div`
  background-color: lightblue;
  min-height: 100vh;
  h2 {
    font-size: 30px;
    font-weight: 600;
    color: black;
  }
  padding: 10px;
  color: white;
  flex: 1;
`;
export { ChartPageWrapper, ChartDashboard, ChartComponentWrapper };
