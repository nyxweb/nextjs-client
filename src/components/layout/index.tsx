import { FC } from 'react';
import styled from 'styled-components';

// Components
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

const Layout: FC = ({ children }) => {
  return (
    <Container>
      <Wrapper>
        <Navbar />
        <Header />
        <MainContent children={children} />
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Layout;

/** STYLES */

const Container = styled.div`
  margin: 0 auto;
  min-width: 1280px;
  max-width: 1920px;
  background: url('/images/layout/top-bg.jpg') no-repeat top -100px center,
    url('/images/layout/bottom-bg.jpg') no-repeat bottom center;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
`;
