import { Container } from './styles';
import Wrapper from '../Wrapper';
import {
  Table,
  Thead,
  HeadRow,
  HeadCell,
  Tbody,
  Row,
  Cell,
  CenterCell,
} from 'components/ui/DataTable';
import { useQuery } from '@apollo/client';
import { GET_GUILDS } from 'components/pages/rankings/queries';
import Loader from 'react-loader-spinner';
import GuildMark from 'components/partials/guild/Mark';
import { IGuild } from 'types/Guild';

const TopGuilds = () => {
  const { loading, error, data } = useQuery(GET_GUILDS, {
    variables: { perPage: 5 },
  });

  return (
    <Wrapper title='Guilds' subTitle='top 5 strongest guilds'>
      <Container>
        <Table>
          <Thead>
            <HeadRow>
              <HeadCell>#</HeadCell>
              <HeadCell>name</HeadCell>
              <HeadCell>membs</HeadCell>
              <HeadCell>resets</HeadCell>
              <HeadCell>logo</HeadCell>
            </HeadRow>
          </Thead>
          <Tbody>
            {loading ? (
              <Row>
                <Cell colSpan={5}>
                  <Loader
                    type='Triangle'
                    color='#00BFFF'
                    width={30}
                    height={30}
                  />
                </Cell>
              </Row>
            ) : error || !data ? (
              <Row>
                <Cell colSpan={5}>Server issue</Cell>
              </Row>
            ) : !data.guilds.rows.length ? (
              <Row>
                <Cell colSpan={5}>No guilds</Cell>
              </Row>
            ) : (
              data.guilds.rows.map((guild: IGuild, i: number) => (
                <Row key={i}>
                  <Cell>{i + 1}</Cell>
                  <Cell>{guild.G_Name}</Cell>
                  <Cell>{guild.TotalMembers}</Cell>
                  <Cell>{guild.TotalResets}</Cell>
                  <Cell>
                    <CenterCell>
                      <GuildMark mark={guild.G_Mark} size={20} />
                    </CenterCell>
                  </Cell>
                </Row>
              ))
            )}
          </Tbody>
        </Table>
      </Container>
    </Wrapper>
  );
};

export default TopGuilds;
