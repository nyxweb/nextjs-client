import { FC } from 'react';
import Link from 'next/link';

import { CharactersWrapper, CharacterCard } from './styles';

import Name from 'components/partials/character/Name';
import { getClassImage } from 'utils/character';

const TopClasses = () => {
  return (
    <CharactersWrapper>
      <Card char={{ Name: 'Dea7h', Class: 1, HOFWins: 3 }} />
      <Card char={{ Name: 'Dea7h', Class: 17, HOFWins: 1 }} />
      <Card char={{ Name: 'Dea7h', Class: 33, HOFWins: 5 }} />
      <Card char={{ Name: 'Dea7h', Class: 48, HOFWins: 4 }} />
      <Card char={{ Name: 'Dea7h', Class: 64, HOFWins: 2 }} />
    </CharactersWrapper>
  );
};

interface Character {
  Name: string;
  Class: number;
  HOFWins: number;
}

const Card: FC<{ char: Character | null }> = ({ char }) => {
  if (!char) return null;

  return (
    <Link href={`/char/${char.Name}`}>
      <CharacterCard>
        <img
          className='ClassImage'
          src={getClassImage(char.Class)}
          alt={char.Name}
        />
        <Name char={char} />
      </CharacterCard>
    </Link>
  );
};

export default TopClasses;
