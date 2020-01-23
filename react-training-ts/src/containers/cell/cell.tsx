import React from 'react';
import styled from 'styled-components';

import { colors, transition } from 'utils';

// TODO: change to % instead of rems or pxs, remember about the walls
const CellContainer = styled.span`
  display: inline-block;
  width: 100%;
  height: 100%;
  // background: linear-gradient(${colors.gray50}, ${colors.gray20});
  
  // background: linear-gradient(${colors.blue10}, ${colors.blue0});
  // transition: background ${transition.average};
  //
  // &:hover {
  //   background: linear-gradient(${colors.blue0}, ${colors.blue10});
  // }
  
  background-image: linear-gradient(
    to right,
    hsl(211, 100%, 50%),
    hsl(179, 100%, 30%)
  );
  transition: background-image 0.5s linear;
  &:hover {
  background-image: linear-gradient(
    to bottom,
    hsl(344, 100%, 50%),
    hsl(31, 100%, 40%)
  );
`;

export const Cell: React.FC<{ id: string }> = ({ id }) => {
  return (
    <CellContainer>
      {/*{id}*/}
    </CellContainer>
  );
};
