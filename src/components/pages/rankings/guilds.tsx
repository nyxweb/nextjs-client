import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_GUILDS } from './queries';
import DataTable from 'components/ui/DataTable';
import { Container } from './styles';
import Pagination from 'components/ui/Pagination';

const Guilds = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const { loading, data } = useQuery(GET_GUILDS, {
    variables: { page, perPage },
    notifyOnNetworkStatusChange: true,
  });

  const cells = [
    { name: 'rank', page, perPage },
    { name: 'name', key: 'G_Name' },
    { name: 'master', key: 'G_Master' },
    { name: 'score', key: 'G_Score' },
    { name: 'members', key: 'members', func: (arr: []) => arr.length },
  ];

  return (
    <>
      <Container>
        {loading ? (
          `Loading...`
        ) : (
          <DataTable data={data.guilds.rows} cells={cells} />
        )}
      </Container>
      <Pagination
        page={page}
        perPage={perPage}
        setPage={setPage}
        setPerPage={setPerPage}
        totalCount={loading ? 0 : data.guilds.count}
      />
    </>
  );
};

export default Guilds;
