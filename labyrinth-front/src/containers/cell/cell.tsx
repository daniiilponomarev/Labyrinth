import React from 'react';
import styled from 'styled-components';

import { colors, transition } from 'utils';

// TODO: change to % instead of rems or pxs, remember about the walls
const CellContainer = styled.span`
  display: inline-block;
  width: 100%;
  height: 100%;
  // background: radial-gradient(${colors.blue0} 25%, transparent 75%);
  // background: radial-gradient(${colors.blue10} 10%, ${colors.blue0} 50%, transparent 75%);
  // background: linear-gradient(90deg, transparent 0%, transparent 25%, ${colors.blue30} 50%, transparent 75%, transparent 100%), 
  //             linear-gradient(transparent 0%, transparent 25%, ${colors.blue30} 50%, transparent 75%, transparent 100%);
  background: linear-gradient(90deg, transparent 0%, ${colors.blue0} 50%, transparent 100%), 
              linear-gradient(transparent 0%, ${colors.blue0} 50%, transparent 100%);
  //transition: background ${transition.average}, transform ${transition.average};

  &:hover {
    //background: radial-gradient(${colors.blue10} 10%, ${colors.blue0} 50%, transparent 75%);
    //transform: scale(1.1);
    //transform: rotate(360deg);
  }
`;

export const Cell: React.FC<{ id: string }> = ({ id }) => {
  return <CellContainer>{/*{id}*/}</CellContainer>;
};
