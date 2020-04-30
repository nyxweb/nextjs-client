import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { v4 as uuid } from 'uuid';

import { GET_GUILDS } from './queries';
import { Container } from './styles';

import Pagination from 'components/ui/Pagination';
import {
  Table,
  Thead,
  HeadRow,
  HeadCell,
  Tbody,
  Row,
  Cell,
} from 'components/ui/DataTable/styles';

type Guild = any;

const Guilds = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const { loading, data } = useQuery(GET_GUILDS, {
    variables: { page, perPage },
  });

  return (
    <div>
      <Container>
        {loading ? (
          `Loading...`
        ) : !data ? (
          'Looks like the server is down...'
        ) : (
          <Table>
            <Thead>
              <HeadRow>
                <HeadCell>rank</HeadCell>
                <HeadCell>name</HeadCell>
                <HeadCell>master</HeadCell>
                <HeadCell>score</HeadCell>
                <HeadCell>members</HeadCell>
              </HeadRow>
            </Thead>
            <Tbody>
              {data.guilds.rows.map((guild: Guild, index: number) => (
                <Row key={uuid()}>
                  <Cell>{(page - 1) * perPage + (index + 1)}</Cell>
                  <Cell>{guild.G_Name}</Cell>
                  <Cell>{guild.G_Master}</Cell>
                  <Cell>{guild.G_Score}</Cell>
                  <Cell>{guild.members.length}</Cell>
                </Row>
              ))}
            </Tbody>
          </Table>
        )}
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
