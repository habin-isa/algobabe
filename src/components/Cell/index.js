import styled from 'styled-components';
import { darken } from 'polished';
import { bool } from 'prop-types';

const getBackground = (activated, triggered) => {
  switch (true) {
    case activated && triggered:
      return darken(0.2, '#ffe419');
    case activated && !triggered:
      // selected cells
      return '#ffe419';
    case !activated && triggered:
      // bar running vertical along cells
      return '#545454';
    default:
      // cell colour
      return '#b5b5b5';
  }
};

const Cell = styled.div.attrs(({ activated, triggered }) => ({
  style: {
    background: getBackground(activated, triggered)
  }
}))`
  border-radius: 4px;
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
  margin: 2px;
  cursor: pointer;
`;

Cell.propTypes = {
  activated: bool,
  triggered: bool
};

Cell.defaultProps = {
  activated: false,
  triggered: false
};

export default Cell;
