import { FC } from 'react';
import { useQuery, gql } from '@apollo/client';
import Loader from 'react-loader-spinner';
import { v4 as uuid } from 'uuid';

import { CharactersWrapper, CharacterCard } from './styles';
import Name from 'components/partials/character/Name';
import { getClassImage } from 'utils/character';
import { ICharacter } from 'types/Character';

const GET_HOF_CHARS = gql`
  query topHof {
    topHof {
      Name
      Class
      cLevel
      Resets
      HOFWins
      status {
        ConnectStat
      }
    }
  }
`;

const TopClasses = () => {
  const { loading, error, data } = useQuery(GET_HOF_CHARS);

  if (!loading && !error && !data) {
    return null;
  }

  return (
    <CharactersWrapper>
      {loading ? (
        <Loader type='Triangle' color='#00BFFF' height={50} width={50} />
      ) : error ? (
        'Looks like the server is down...'
      ) : (
        data.topHof.map((char: ICharacter) => <Card char={char} key={uuid()} />)
      )}
    </CharactersWrapper>
  );
};

const Card: FC<{ char: ICharacter | null }> = ({ char }) => {
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
