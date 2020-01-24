import React from 'react';
import styled from 'styled-components';

import { colors } from 'utils';

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  padding-right: 1rem;
  height: 3rem;
  background-color: ${colors.gray0};
  box-shadow: 0 -2px 2px 3px ${colors.gray20};
  width: 100%;
  font-weight: bold;
`;

export const Footer: React.FC<any> = () => {
  return <FooterContainer>Made by Daniil, 2020</FooterContainer>;
};
