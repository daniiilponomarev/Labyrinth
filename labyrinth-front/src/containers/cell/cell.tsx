import React from 'react';
import styled from 'styled-components';

import { CellContentEnum, colors, getContentIcon, ICell, transition } from 'utils';

const CellContainer = styled.span`
  display: inline-block;
  width: 100%;
  height: 100%;
  background: ${colors.blue0};
  border-radius: 25%;
  border: 1px solid ${colors.blue90};
  text-align: center;
  transition: background ${transition.average};

  &:hover {
    background: ${colors.blue10};
  }
`;

const ContentContainer = styled.img`
  width: 50%;
  height: 100%;
`;

export const Cell: React.FC<{ cell: ICell }> = ({ cell }) => {
  return (
    <CellContainer>
      {cell.content !== CellContentEnum.Empty && (
        <ContentContainer src={getContentIcon(cell.content)} alt="Treasure" width={50} />
      )}
    </CellContainer>
  );
};
