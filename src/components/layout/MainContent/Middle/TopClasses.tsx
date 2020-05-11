import { FC, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { v4 as uuid } from 'uuid';

import { CharactersWrapper, CharacterCard } from './styles';
import Name from 'components/partials/character/Name';
import { getClassImage } from 'utils/character';
import { useOvermind } from 'brains';

const TopClasses = () => {
  const { state, actions } = useOvermind();

  useEffect(() => {
    actions.rank.getWidgetTopHof();
  }, []);

  if (!state.rank.widgets.topHof.isLoading && !state.rank.widgets.topHof.data) {
    return null;
  }

  return (
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

export default TopClasses;
