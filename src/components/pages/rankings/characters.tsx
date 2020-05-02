import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { v4 as uuid } from 'uuid';
import Loader from 'react-loader-spinner';

import { GET_CHARACTERS } from './queries';
import { Container } from './styles';
import { getClassName } from 'utils/character';

import Name from 'components/partials/character/Name';
import Pagination from 'components/ui/Pagination';
import {
  Row,
  HeadCell,
  Cell,
  Table,
  Thead,
  HeadRow,
  Tbody,
} from 'components/ui/DataTable';
import { ICharacter } from 'types/Character';

const Characters = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page, perPage },
  });

  return (
    <div>
      <Container>
        {loading ? (
          <Loader type='Triangle' color='#00BFFF' height={50} width={50} />
        ) : error || !data ? (
          'Looks like the server is down...'
        ) : (
          <Table>
            <Thead>
              <HeadRow>
                <HeadCell>rank</HeadCell>
                <HeadCell>name</HeadCell>
                <HeadCell>class</HeadCell>
                <HeadCell>level</HeadCell>
              </HeadRow>
            </Thead>
            <Tbody>
              {data.characters.rows.map((char: ICharacter, index: number) => (
                <Row key={uuid()}>
                  <Cell>{(page - 1) * perPage + (index + 1)}</Cell>
                  <Cell>
                    <Name char={char} />
                  </Cell>
                  <Cell
                    dangerouslySetInnerHTML={{
                      __html: getClassName(char.Class),
                    }}
                  />
                  <Cell>
                    {char.cLevel}
                    <sup>{char.Resets}</sup>
                  </Cell>
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
        totalCount={loading || !data ? 0 : data.characters.count}
      />
    </div>
  );
};

export default Characters;
