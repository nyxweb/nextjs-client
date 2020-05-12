import { FC } from 'react';
import styled from 'styled-components';

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

const Container = styled.div`
  background: url('/images/layout/light-bg.jpg');
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background: rgba(0, 0, 0, 0.15);
  padding: 0 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;

  span:nth-child(1) {
    font-size: 20px;
    color: #fff;
    text-transform: uppercase;
  }

  span:nth-child(2) {
    font-size: 12px;
    color: #737f92;
    text-transform: uppercase;
  }
`;

const Icon = styled.div`
  width: 43px;
  height: 42px;
  border-radius: 25px;
  background: url('/images/layout/bar-title-bg.png') no-repeat;
  box-shadow: 0px 0px 14px 0px rgba(51, 99, 171, 0.5);
`;
