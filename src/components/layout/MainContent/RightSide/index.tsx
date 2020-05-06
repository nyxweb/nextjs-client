import { Container } from './styles';

import ServerInfo from 'components/widgets/right/ServerInfo';
import Events from 'components/widgets/right/Events';

const RightSide = () => {
  return (
    <Container>
      <ServerInfo />
      <Events />
    </Container>
  );
};

export default RightSide;
