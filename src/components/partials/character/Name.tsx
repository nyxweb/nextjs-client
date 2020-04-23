import { FC } from 'react';

import { StyledName } from './styles';
import { ICharacter } from 'types/Character';

const Name: FC<{ char: ICharacter }> = ({ char: { Name, HOFWins } }) => {
  return (
    <StyledName>
      <span>{Name}</span>
      <span className='status online' />
      {getRankImage(HOFWins)}
    </StyledName>
  );
};

const getRankImage = (rank: number | null) => {
  if (!rank) return null;

  return <img src={`/images/ranks/${rank > 5 ? 5 : rank}.png`} alt='rank' />;
};

export default Name;
