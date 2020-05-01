import Link from 'next/link';
import {
  Container,
  Header,
  ServerName,
  Progress,
  Fill,
  Statistics,
  Name,
  OnlineCount,
  StatsItem,
  Icon,
  Title,
  Count,
} from './styles';
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
        <Link href='/rankings'>
          <a>
            <StatsItem>
              <Icon>
                <Guild />
              </Icon>
              <Title>Guilds</Title>
              <Count>( 561 )</Count>
            </StatsItem>
          </a>
        </Link>
        <Link href='/rankings'>
          <a>
            <StatsItem>
              <Icon>
                <Character />
              </Icon>
              <Title>Characters</Title>
              <Count>( 15,561 )</Count>
            </StatsItem>
          </a>
        </Link>
      </Statistics>
    </Container>
  );
};

export default ServerInfo;
