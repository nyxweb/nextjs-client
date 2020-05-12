import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

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

/** STYLES */

const StyledName = styled.div`
  display: inline-flex;
  align-items: center;
  height: 17px;
  color: goldenrod;

  img {
    margin-left: 3px;
    max-height: 8px;
    max-width: 8px;
  }

  .status {
    margin-left: 3px;
    height: 5px;
    width: 5px;
    background-color: red;
    border-radius: 3px;

    &.online {
      background-color: green;
    }

    &.offline {
      background-color: red;
    }
  }
`;
