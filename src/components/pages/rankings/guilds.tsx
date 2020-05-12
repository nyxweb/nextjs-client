import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Loader from 'react-loader-spinner';
import { useOvermind } from 'brains';
import styled from 'styled-components';

import Pagination from 'components/ui/Pagination';
import {
  Table,
  Thead,
  HeadRow,
  HeadCell,
  Tbody,
  Row,
  Cell,
} from 'components/ui/DataTable';
import Link from 'next/link';
import GuildMark from 'components/partials/guild/Mark';

const Guilds = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const { state, actions } = useOvermind();

  useEffect(() => {
    actions.rank.getGuilds({ page, perPage });
  }, [page, perPage]);

  return (
    <Container>
      <Table>
        <Thead>
          <HeadRow>
            <HeadCell>rank</HeadCell>
            <HeadCell>mark</HeadCell>
            <HeadCell>name</HeadCell>
            <HeadCell>resets</HeadCell>
            <HeadCell>score</HeadCell>
            <HeadCell>members</HeadCell>
            <HeadCell>master</HeadCell>
          </HeadRow>
        </Thead>
        <Tbody>
          {state.rank.isLoading ? (
            <Row>
              <Cell colSpan={7}>
                <Loader
                  type='Triangle'
                  color='#00BFFF'
                  height={50}
                  width={50}
                />
              </Cell>
            </Row>
          ) : !state.rank.guilds ? (
            <Row>
              <Cell colSpan={7}>Looks like the server is down...</Cell>
            </Row>
          ) : !state.rank.guilds.count ? (
            <Row>
              <Cell colSpan={7}>No guilds found</Cell>
            </Row>
          ) : (
            state.rank.guilds.rows.map((guild, index) => (
              <Row key={uuid()}>
                <Cell>{(page - 1) * perPage + (index + 1)}</Cell>
                <Cell>
                  <MarkWrapper>
                    <GuildMark mark={guild.G_Mark} size={25} />
                  </MarkWrapper>
                </Cell>
                <Cell>
                  <Link href={`guild/${guild.G_Name}`}>
                    <a>{guild.G_Name}</a>
                  </Link>
                </Cell>
                <Cell>{guild.TotalResets}</Cell>
                <Cell>{guild.G_Score}</Cell>
                <Cell>{guild.TotalMembers}</Cell>
                <Cell>
                  <Link href={`char/${guild.G_Master}`}>
                    <a>{guild.G_Master}</a>
                  </Link>
                </Cell>
              </Row>
            ))
          )}
        </Tbody>
      </Table>
      <Pagination
        page={page}
        perPage={perPage}
        setPage={setPage}
        setPerPage={setPerPage}
        totalCount={
          state.rank.isLoading || !state.rank.guilds
            ? 0
            : state.rank.guilds.count
        }
      />
    </Container>
  );
};

export default Guilds;

/** STYLES */

const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const MarkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
