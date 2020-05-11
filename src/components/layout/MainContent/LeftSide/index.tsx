import { Container } from './styles';

import UserArea from 'components/widgets/left/UserArea';
import TopCharacters from 'components/widgets/left/TopCharacters';
import TopGuilds from 'components/widgets/left/TopGuilds';

const LeftSide = () => {
  return (
    <Container>
      <UserArea />
      <TopCharacters />
      <TopGuilds />
    </Container>
  );
};

export default LeftSide;
