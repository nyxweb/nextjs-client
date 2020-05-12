import { useEffect } from 'react';
import Link from 'next/link';
import Loader from 'react-loader-spinner';
import GuildMark from 'components/partials/guild/Mark';
import { useOvermind } from 'brains';
import styled from 'styled-components';

// Styles
import Wrapper from './Wrapper';
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

const TopGuilds = () => {
  const { state, actions } = useOvermind();

  useEffect(() => {
    actions.rank.getWidgetGuilds();
  }, []);

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
            {state.rank.widgets.guilds.isLoading ? (
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
            ) : !state.rank.widgets.guilds.data ? (
              <Row>
                <Cell colSpan={5}>Server issue</Cell>
              </Row>
            ) : !state.rank.widgets.guilds.data.length ? (
              <Row>
                <Cell colSpan={5}>No guilds</Cell>
              </Row>
            ) : (
              state.rank.widgets.guilds.data.map((guild, i) => (
                <Row key={i}>
                  <Cell>{i + 1}</Cell>
                  <Cell>
                    <Link href={`guild/${guild.G_Name}`}>
                      <a>{guild.G_Name}</a>
                    </Link>
                  </Cell>
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

/** STYLES */

const Container = styled.div`
  padding: 10px;
`;
