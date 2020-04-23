import { FC } from 'react';
import { Container, Wrapper } from './styles';

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
