import React from 'react';
import styled from 'styled-components';

const StyledWall = styled.span`
  height: 7rem;
  background-color: #aaa;
  box-shadow: 0 -2px -2px -3px #f6f7f8;
  width: 100%;
`;

export const Wall = () => <StyledWall>|</StyledWall>;
