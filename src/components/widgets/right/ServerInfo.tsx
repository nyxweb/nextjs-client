import Link from 'next/link';
import styled from 'styled-components';
import { User, Character, Guild } from 'components/ui/icons';

const ServerInfo = () => {
  return (
    <Container>
      <Header>
        <ServerName>
          <Name>NyxWeb</Name>
          <OnlineCount>( 232 )</OnlineCount>
        </ServerName>
        <Progress>
          <Fill style={{ width: '66%' }} />
        </Progress>
        <Link href='/info'>
          <a>Server Information</a>
        </Link>
      </Header>
      <Statistics>
        <StatsItem>
          <Icon>
            <User />
          </Icon>
          <Title>Accounts</Title>
          <Count>( 6,561 )</Count>
        </StatsItem>
        <StatsItem>
          <Icon>
            <Guild />
          </Icon>
          <Title>Guilds</Title>
          <Count>( 561 )</Count>
        </StatsItem>
        <StatsItem>
          <Icon>
            <Character />
          </Icon>
          <Title>Characters</Title>
          <Count>( 15,561 )</Count>
        </StatsItem>
      </Statistics>
    </Container>
  );
};

export default ServerInfo;

const Container = styled.div`
  background: url('/images/layout/light-bg.jpg');
`;

const Header = styled.div`
  height: 90px;
  background-image: url('/images/partials/info.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20px 0 95px;

  a {
    width: 100%;
  }
`;

const ServerName = styled.div`
  display: flex;
  width: 100%;
`;

const Name = styled.div`
  flex: 1;
  color: white;
`;

const OnlineCount = styled.div`
  flex: 1;
  text-align: right;
  color: rgb(14, 122, 14);
`;

const Progress = styled.div`
  margin: 8px 0;
  height: 6px;
  width: 100%;
  background: rgb(22, 22, 22);
  display: flex;
  align-items: center;
  border-radius: 2px;
`;

const Fill = styled.div`
  height: 10px;
  background: #1a8ec5;
  box-shadow: 0 0 5px 0 #00aeff;
  border-radius: 2px;
`;

const Statistics = styled.div`
  display: flex;
`;

const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 10px 10px;
  padding: 10px;
  width: 76.5px;
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 3px;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  user-select: none;

  &:hover {
    background: rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.1);
    filter: brightness(1.5);
  }
`;

const Icon = styled.div`
  width: 25px;
  height: 25px;

  svg {
    width: 25px;
    height: 25px;
  }
`;

const Title = styled.div`
  margin-top: 5px;
`;

const Count = styled.div``;
