import React from 'react';
import styled from 'styled-components';

import { colors } from 'utils';
import { Wall } from 'components/wall';

// TODO: change to % instead of rems or pxs, remember about the walls
const CellContainer = styled.span`
  display: inline-block;
  width: 10%;
  height: 100%;
  max-width: 5rem;
  max-height: 5rem;
  box-sizing: border-box;
  // border-radius: 5px;
  // border: 1px solid ${colors.gray50};
  background: linear-gradient(${colors.gray30}, ${colors.gray20});
`;

export const Cell: React.FC<{ id: number }> = ({ id }) => {
  return (
    <CellContainer>
      <Wall />
      <Wall />
      {id}
      <Wall />
      <Wall />
    </CellContainer>
  );
};
