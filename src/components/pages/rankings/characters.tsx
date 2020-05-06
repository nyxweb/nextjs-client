import { useState } from 'react';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import Loader from 'react-loader-spinner';
import { v4 as uuid } from 'uuid';

import { GET_CHARACTERS } from './queries';
import { Container, GuildWrapper } from './styles';
import { getClassName, getMapName } from 'utils/character';

import Name from 'components/partials/character/Name';
import GuildMark from 'components/partials/guild/Mark';
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
    <Container>
      <Table>
        <Thead>
          <HeadRow>
            <HeadCell>rank</HeadCell>
            <HeadCell>name</HeadCell>
            <HeadCell>class</HeadCell>
            <HeadCell>level</HeadCell>
            <HeadCell>location</HeadCell>
            <HeadCell>guild</HeadCell>
          </HeadRow>
        </Thead>
        <Tbody>
          {loading ? (
            <Row>
              <Cell colSpan={5}>
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
              <Cell colSpan={5}>Looks like the server is down...</Cell>
            </Row>
          ) : !data.characters.rows.length ? (
            <Row>
              <Cell colSpan={5}>No characters found</Cell>
            </Row>
          ) : (
            data.characters.rows.map((char: ICharacter, index: number) => (
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
                <Cell
                  dangerouslySetInnerHTML={{
                    __html: getMapName(char.MapNumber),
                  }}
                />
                <Cell>
                  <GuildWrapper>
                    {char.guild_member ? (
                      <>
                        <Link href={`guild/${char.guild_member.guild.G_Name}`}>
                          <a>{char.guild_member.guild.G_Name}</a>
                        </Link>
                        <GuildMark
                          mark={char.guild_member.guild.G_Mark}
                          size={20}
                        />
                      </>
                    ) : (
                      `-`
                    )}
                  </GuildWrapper>
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
        totalCount={loading || !data ? 0 : data.characters.count}
      />
    </Container>
  );
};

export default Characters;
