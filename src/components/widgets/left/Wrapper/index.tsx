import { FC } from 'react';
import { Container, Title, Icon, Text } from './styles';

interface Props {
  title: string;
  subTitle: string;
}

const Wrapper: FC<Props> = ({ children, title, subTitle }) => {
  return (
    <Container>
      <Title>
        <Text>
          <span>{title}</span>
          <span>{subTitle}</span>
        </Text>
        <Icon />
      </Title>
      {children}
    </Container>
  );
};

export default Wrapper;
