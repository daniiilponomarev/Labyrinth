import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { map } from 'ramda';

// import Card from '@material-ui/core/Card/index';
// import CardMedia from '@material-ui/core/CardMedia/index';
// import CardContent from '@material-ui/core/CardContent/index';
// import Typography from '@material-ui/core/Typography/index';

import { colors, useWindowSize } from 'utils';
import { Cell } from 'containers/cell';
// import { LogoSVG } from '../../components/common-components';
// import { ThemeProvider } from 'styled-components';
// import { MuiThemeProvider } from '@material-ui/core';
// import Button from '@material-ui/core/Button';

const BoardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  // width: ${(props: { windowWidth: number }) => `${props.windowWidth}px`};
  width: 95%;
  height: ${(props: { windowWidth: number }) => `${props.windowWidth - 20}px`};
  max-width: 50rem;
  // min-width: 50rem;
  max-height: 50rem;
  // min-height: 50rem;
  border-radius: 5px;
  border: 1px solid ${colors.gray50};
`;

const BoardRow = styled.div`
  height: 10%;
`;

export const Board: React.FC<any> = ({ className }) => {
  // const size = useWindowSize();
  // const windowWidth1 = size.width;
  const windowWidth = typeof window === 'object' ? window.innerWidth : undefined;

  const cells: number[][] = [];
  let cellId = 0;

  for (let i = 0; i < 10; i++) {
    cells[i] = Array(10);
    for (let j = 0; j < 10; j++) {
      cells[i][j] = cellId++;
    }
  }
  console.log(className);

  return (
    // @ts-ignore
    <BoardContainer windowWidth={windowWidth} className={className}>
      {map((cellsRow: number[]): any => {
        return (
          // maybe another key should be used
          // TODO: check performance
          <BoardRow key={cellsRow[0]}>
            {map((cell: number): any => {
              return <Cell id={cell} key={cell} />;
            }, cellsRow)}
          </BoardRow>
        );
      }, cells)}
    </BoardContainer>
  );
};
