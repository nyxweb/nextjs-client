import { FC } from 'react';
import Link from 'next/link';

import { StyledName } from './styles';

const Name: FC<{ char: any }> = ({ char }) => {
  return (
    <Link href={`/char/${char.Name}`}>
      <a>
        <StyledName>
          <span>{char.Name}</span>
          <span
            className={`status ${
              char.status.ConnectStat ? 'online' : 'offline'
            }`}
          />
          {getRankImage(char.HOFWins)}
        </StyledName>
      </a>
    </Link>
  );
};

const getRankImage = (rank: number | null) => {
  if (!rank) return null;

  return <img src={`/images/ranks/${rank > 5 ? 5 : rank}.png`} alt='rank' />;
};

export default Name;
