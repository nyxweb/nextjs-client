import React, { FC, useEffect } from 'react';
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
  useEffect(() => {
    if (loading && onClick) {
      setTimeout(() => {
        onClick();
      }, 3000);
    }
  }, [loading]);

  return (
    <Container
      className={`${type} ${loading ? 'loading' : ''}`}
      onClick={!loading ? onClick : () => {}}
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
