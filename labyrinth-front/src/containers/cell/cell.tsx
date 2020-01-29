import React from 'react';
import styled from 'styled-components';

import { colors, transition } from 'utils';

// TODO: change to % instead of rems or pxs, remember about the walls
const CellContainer = styled.span`
  display: inline-block;
  width: 100%;
  height: 100%;
  background: radial-gradient(${colors.blue10} 25%, ${colors.gray30} 75%);
  transition: background ${transition.average};

  &:hover {
  background: radial-gradient(${colors.blue20} 10%, ${colors.blue10} 50%, ${colors.gray30} 75%);
  }
`;

export const Cell: React.FC<{ id: string }> = ({ id }) => {
  return (
    <CellContainer>
      {/*{id}*/}
    </CellContainer>
  );
};
