import { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { useOvermind } from 'brains';
import styled from 'styled-components';

import Name from 'components/partials/character/Name';

import Wrapper from './Wrapper';
import {
  Table,
  Thead,
  HeadRow,
  HeadCell,
  Tbody,
  Row,
  Cell,
} from 'components/ui/DataTable';

const TopCharacters = () => {
  const { state, actions } = useOvermind();

  useEffect(() => {
    actions.rank.getWidgetCharacters();
  }, []);

  return (
    <Wrapper title='Characters' subTitle='top 5 strongest characters'>
      <Container>
        <Table>
          <Thead>
            <HeadRow>
              <HeadCell>#</HeadCell>
              <HeadCell>name</HeadCell>
              <HeadCell>level</HeadCell>
              <HeadCell>hof</HeadCell>
            </HeadRow>
          </Thead>
          <Tbody>
            {state.rank.widgets.characters.isLoading ? (
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
            ) : !state.rank.widgets.characters.data ? (
              <Row>
                <Cell colSpan={5}>Server issue</Cell>
              </Row>
            ) : !state.rank.widgets.characters.data.length ? (
              <Row>
                <Cell colSpan={5}>No characters</Cell>
              </Row>
            ) : (
              state.rank.widgets.characters.data.map((char, i) => (
                <Row key={i}>
                  <Cell>{i + 1}</Cell>
                  <Cell>
                    <Name char={char} />
                  </Cell>
                  <Cell>
                    {char.cLevel}
                    <sup>{char.Resets}</sup>
                  </Cell>
                  <Cell>{char.HOFWins}</Cell>
                </Row>
              ))
            )}
          </Tbody>
        </Table>
      </Container>
    </Wrapper>
  );
};

export default TopCharacters;

/** STYLES */

const Container = styled.div`
  padding: 10px;
`;
