import Link from 'next/link';
import { Container, NavLinks } from './styles';

const Navbar = () => {
  return (
    <Container>
      <NavLinks>
        <Link href='/'>
          <a>
            News
            <span />
          </a>
        </Link>
        <Link href='/register'>
          <a>
            Register
            <span />
          </a>
        </Link>
        <Link href='/download'>
          <a>
            Download
            <span />
          </a>
        </Link>
        <Link href='/rankings'>
          <a>
            Rankings
            <span />
          </a>
        </Link>
        <Link href='/stats'>
          <a>
            Statistics
            <span />
          </a>
        </Link>
        <a href='http://darksteam.net' target='_blank'>
          Forum
          <span />
        </a>
      </NavLinks>
    </Container>
  );
};

export default Navbar;
