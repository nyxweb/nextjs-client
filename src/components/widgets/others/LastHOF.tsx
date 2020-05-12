import { FC, useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

import Name from 'components/partials/character/Name';
import { getClassImage } from 'utils/character';
import { useOvermind } from 'brains';
import DropDown from 'components/ui/DropDown';

const LastHOF = () => {
  const [selected, setSelected] = useState('2020-05-15');
  const { state, actions } = useOvermind();

  useEffect(() => {
    actions.rank.getWidgetTopHof();
  }, []);

  if (!state.rank.widgets.topHof.isLoading && !state.rank.widgets.topHof.data) {
    return null;
  }

  return (
    <Container>
      <CharactersWrapper>
        {state.rank.widgets.topHof.isLoading ? (
          <Loader type='Triangle' color='#00BFFF' height={50} width={50} />
        ) : !state.rank.widgets.topHof.data ? (
          'Looks like the server is down...'
        ) : (
          state.rank.widgets.topHof.data.map((char) => (
            <Card char={char} key={uuid()} />
          ))
        )}
      </CharactersWrapper>
      <DateContainer>
        HOF Winners{' '}
        <DropDown
          width={130}
          options={[
            { value: '2020-05-15' },
            { value: '2020-05-08' },
            { value: '2020-05-01' },
            { value: '2020-04-24' },
            { value: '2020-04-17' },
            { value: '2020-04-10' },
            { value: '2020-04-03' },
            { value: '2020-04-27' },
            { value: '2020-04-20' },
            { value: '2020-04-13' },
          ]}
          selected={selected}
          setSelected={setSelected}
        />
      </DateContainer>
    </Container>
  );
};

const Card: FC<{ char: any }> = ({ char }) => {
  if (!char) return null;

  return (
    <CharacterCard>
      <img
        className='ClassImage'
        src={getClassImage(char.Class)}
        alt={char.Name}
      />
      <Name char={char} />
    </CharacterCard>
  );
};

export default LastHOF;

/** STYLES */

const Container = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 15px 0 0 0;
  z-index: 1;
`;

const CharactersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const CharacterCard = styled.div`
  width: 110px;
  height: 90px;
  transition: 0.2s ease-in-out;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: rgba(0, 0, 0, 0.3);

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  .ClassImage {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
`;

const DateContainer = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 5px;
  margin-top: 15px;
  font-size: 16px;
  text-align: center;
`;
