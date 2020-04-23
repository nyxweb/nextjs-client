import { FC } from 'react';

import LeftSide from './LeftSide';
import RightSide from './RightSide';
import Middle from './Middle';

import { MiddleContainer } from './styles';

const Content: FC = ({ children }) => {
  return (
    <MiddleContainer>
      <LeftSide />
      <Middle children={children} />
      <RightSide />
    </MiddleContainer>
  );
};

export default Content;
