import styled from 'styled-components';

export const Frame = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  width: 100vw;
  height: calc(100vh - 60px);
`;
