import styled from 'styled-components';

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

const Container = styled.aside`
  position: relative;
  width: 270px;
  background: url('/images/layout/sidebar-bg.jpg');
  margin: 80px 0 80px 0;

  &:before {
    content: '';
    position: absolute;
    pointer-events: none;
    width: 25px;
    height: 25px;
    background: url('/images/layout/corner-icon-small-left-top.png');
    top: -4px;
    left: -4px;
  }

  &:after {
    content: '';
    position: absolute;
    pointer-events: none;
    width: 25px;
    height: 25px;
    background: url('/images/layout/corner-icon-small-left.png');
    bottom: -4px;
    left: -4px;
  }
`;
