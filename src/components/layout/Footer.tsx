import styled from 'styled-components';

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

/** STYLES */

const Container = styled.footer`
  position: relative;
  height: 300px;
`;

const ScrollUp = styled.img`
  position: absolute;
  top: -25px;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 0 7px #005495;
  transition: 0.2s ease-in-out;
  opacity: 0.7;

  &:hover {
    box-shadow: 0 0 11px #005495;
    opacity: 1;
  }
`;
