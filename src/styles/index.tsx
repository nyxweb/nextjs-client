import { FC } from 'react';
import GlobalStyle from './global';

const StylesProvider: FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default StylesProvider;
