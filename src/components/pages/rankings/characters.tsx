import { useState, useEffect } from 'react';
import Link from 'next/link';
import Loader from 'react-loader-spinner';
import { v4 as uuid } from 'uuid';
import { useOvermind } from 'brains';
import styled from 'styled-components';

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

type AllowedClasses =
  | 0
  | 1
  | 2
  | 16
  | 17
  | 18
  | 32
  | 33
  | 34
  | 48
  | 49
  | 64
  | 65;

const Characters = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [classes, setClasses] = useState<Array<AllowedClasses> | undefined>();
  const { state, actions } = useOvermind();

  useEffect(() => {
    actions.rank.getCharacters({ page, perPage, classes });
  }, [page, perPage, classes]);

  const toggleClass = (cls: AllowedClasses) => {
    if (!classes) {
      return setClasses([cls]);
    }

    let copy = [...classes];
    const index = classes.findIndex((c) => c === cls);
    if (index >= 0) {
      copy.splice(index, 1);
    } else {
      copy.push(cls);
    }

    setClasses(!copy.length ? undefined : copy);
  };

  return (
    <Container>
      <SortContainer>
        <a
          onClick={() => toggleClass(0)}
          className={classes?.includes(0) ? 'selected' : ''}
        >
          DW
        </a>
        <a
          onClick={() => toggleClass(1)}
          className={classes?.includes(1) ? 'selected' : ''}
        >
          SM
        </a>
        <a
          onClick={() => toggleClass(16)}
          className={classes?.includes(16) ? 'selected' : ''}
        >
          DK
        </a>
        <a
          onClick={() => toggleClass(17)}
          className={classes?.includes(17) ? 'selected' : ''}
        >
          BK
        </a>
        <a
          onClick={() => toggleClass(32)}
          className={classes?.includes(32) ? 'selected' : ''}
        >
          ELF
        </a>
        <a
          onClick={() => toggleClass(33)}
          className={classes?.includes(33) ? 'selected' : ''}
        >
          ME
        </a>
        <a
          onClick={() => toggleClass(48)}
          className={classes?.includes(48) ? 'selected' : ''}
        >
          MG
        </a>
        <a
          onClick={() => toggleClass(64)}
          className={classes?.includes(64) ? 'selected' : ''}
        >
          DL
        </a>
      </SortContainer>
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
          {state.rank.isLoading ? (
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
          ) : !state.rank.characters ? (
            <Row>
              <Cell colSpan={6}>Looks like the server is down...</Cell>
            </Row>
          ) : !state.rank.characters.count ? (
            <Row>
              <Cell colSpan={6}>No characters found</Cell>
            </Row>
          ) : (
            state.rank.characters?.rows.map((char: any, index) => (
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
        totalCount={
          state.rank.isLoading || !state.rank.characters
            ? 0
            : state.rank.characters.count
        }
      />
    </Container>
  );
};

export default Characters;

/** STYLES */

const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const GuildWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5px;

  a {
    margin-right: 5px;
  }
`;

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  background: rgba(63, 85, 114, 0.1);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);

  a {
    padding: 5px;

    &.selected {
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;
