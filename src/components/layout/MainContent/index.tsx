import { FC } from 'react';
import styled from 'styled-components';

import LeftSide from './LeftSide';
import RightSide from './RightSide';
import Middle from './Middle';

const Content: FC = ({ children }) => {
  return (
    <MiddleContainer>
      <LeftSide />
      <Middle>{children}</Middle>
      <RightSide />
    </MiddleContainer>
  );
};

export default Content;

/** STYLES */

const MiddleContainer = styled.main`
  width: 1200px;
  min-height: 900px;
  display: flex;
`;
