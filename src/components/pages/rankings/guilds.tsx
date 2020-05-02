import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { v4 as uuid } from 'uuid';
import Loader from 'react-loader-spinner';

import { GET_GUILDS } from './queries';
import { Container, MarkWrapper } from './styles';

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
import { IGuild } from 'types/Guild';
import Link from 'next/link';
import GuildMark from 'components/partials/guild/Mark';

const Guilds = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const { loading, error, data } = useQuery(GET_GUILDS, {
    variables: { page, perPage },
  });

  return (
    <div>
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
            {loading ? (
              <Row>
                <Cell colSpan={6}>
                  <Loader
                    type='Triangle'
                    color='#00BFFF'
                    height={50}
                    width={50}
                  />
                </Cell>
              </Row>
            ) : error ? (
              <Row>
                <Cell colSpan={6}>Looks like the server is down...</Cell>
              </Row>
            ) : !data.guilds.rows.length ? (
              <Row>
                <Cell colSpan={6}>No guilds found</Cell>
              </Row>
            ) : (
              data.guilds.rows.map((guild: IGuild, index: number) => (
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
      </Container>
      <Pagination
        page={page}
        perPage={perPage}
        setPage={setPage}
        setPerPage={setPerPage}
        totalCount={loading || !data ? 0 : data.guilds.count}
      />
    </div>
  );
};

export default Guilds;
