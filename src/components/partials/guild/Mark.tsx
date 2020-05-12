import { FC } from 'react';
import styled from 'styled-components';
import { colorDecode } from 'utils/guild';

interface Props {
  mark: any;
  size?: number;
}

const Mark: FC<Props> = ({ mark, size = 30 }) => {
  return (
    <GuildMark style={{ width: size, height: size }}>
      {new Buffer(mark, 'hex')
        .toString('hex')
        .split('')
        .map((symbol: string, i: number) => (
          <MarkCell
            key={i}
            style={{
              width: size / 8,
              height: size / 8,
              background: colorDecode(symbol),
            }}
          />
        ))}
    </GuildMark>
  );
};

export default Mark;

/** STYLES */

const GuildMark = styled.div`
  display: inline-block;
`;

const MarkCell = styled.div`
  float: left;
`;
