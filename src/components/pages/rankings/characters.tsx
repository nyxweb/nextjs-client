import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from './queries';
import DataTable from 'components/ui/DataTable';
import Pagination from 'components/ui/Pagination';
import { Container } from './styles';

const Characters = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const { loading, data } = useQuery(GET_CHARACTERS, {
    variables: { page, perPage },
  });

  const cells = [
    { name: 'rank', page, perPage },
    { name: 'name', key: 'Name' },
    { name: 'class', key: 'Class' },
    { name: 'level', key: 'cLevel' },
    { name: 'resets', key: 'Resets' },
  ];

  return (
    <>
      <Container>
        {loading ? (
          `Loading...`
        ) : (
          <DataTable data={data.characters.rows} cells={cells} />
        )}
      </Container>
      <Pagination
        page={page}
        perPage={perPage}
        setPage={setPage}
        setPerPage={setPerPage}
        totalCount={loading ? 0 : data.characters.count}
      />
    </>
  );
};

export default Characters;
