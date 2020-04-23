import { Container, ScrollUp } from './styles';

const Footer = () => {
  return (
    <Container>
      <ScrollUp
        src='/images/layout/scroll-up.png'
        alt='Scroll Up'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </Container>
  );
};

export default Footer;
