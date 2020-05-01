import React, { FC } from 'react';
import { Container, Loader } from './styles';

interface Props {
  loading?: boolean;
  type?: 'green' | 'blue';
  onClick?: () => void;
  width?: string | number;
  height?: string | number;
  fontSize?: string | number;
}

const Button: FC<Props> = ({
  children,
  loading,
  type = 'blue',
  onClick,
  width = 100,
  height = 35,
  fontSize = 15,
}) => {
  return (
    <Container
      className={type}
      onClick={onClick}
      style={{ width, height, fontSize }}
    >
      {loading && (
        <Loader>
          <span />
          <span />
          <span />
          <span />
        </Loader>
      )}
      {children}
    </Container>
  );
};

export default Button;
