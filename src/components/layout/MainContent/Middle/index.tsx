import { FC } from 'react';

import { Container, CornerIcons } from './styles';
import TopClasses from './TopClasses';

const Middle: FC = ({ children }) => {
  return (
    <Container>
      <CornerIcons />
      <TopClasses />
      {children}
    </Container>
  );
};

export default Middle;
