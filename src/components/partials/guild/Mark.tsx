import { FC } from 'react';
import { colorDecode } from 'utils/guild';
import { GuildMark, MarkCell } from './styles';

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
