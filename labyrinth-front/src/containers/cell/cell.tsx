import React from 'react';
import styled from 'styled-components';

import { colors, transition } from 'utils';

const CellContainer = styled.span`
  display: inline-block;
  width: 100%;
  height: 100%;
  background: ${colors.blue0};
  border-radius: 25%;
  transition: background ${transition.average};

  &:hover {
    background: ${colors.blue10};
  }
`;

export const Cell: React.FC<{ id: string }> = ({ id }) => {
  return <CellContainer>{/*{id}*/}</CellContainer>;
};
