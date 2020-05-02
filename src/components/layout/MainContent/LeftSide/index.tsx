import { Container } from './styles';

import UserArea from 'components/widgets/left/UserArea';
import TopGuilds from 'components/widgets/left/TopGuilds';

const LeftSide = () => {
  return (
    <Container>
      <UserArea />
      <TopGuilds />
    </Container>
  );
};

export default LeftSide;
