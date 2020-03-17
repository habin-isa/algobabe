import React from 'react';
import * as S from './styles';
import Cell from '../Cell';

const Grid = ({ sequence, toggleStep }) => (
  <S.Frame rows={8} columns={16}>
    {sequence.map((line, i) =>
      line.map((time, j) => (
        <Cell
          key={i + j}
          column={j + 1}
          row={i + 1}
          activated={sequence[i][j]['activated']}
          triggered={sequence[i][j]['triggered']}
          onClick={() => toggleStep(i, j)}
        />
      ))
    )}
  </S.Frame>
);

export default Grid;
