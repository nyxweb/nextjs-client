import Link from 'next/link';
import {
  Container,
  Header,
  Title,
  Fields,
  Footer,
  UserInput,
  PassInput,
  Button,
} from './styles';

const Login = () => {
  return (
    <Container>
      <Header>
        <Title>User Area</Title>
        <Link href='/register'>
          <a>Register</a>
        </Link>
      </Header>
      <Fields>
        <UserInput placeholder='Username' />
        <PassInput placeholder='Password' />
      </Fields>
      <Footer>
        <Link href='/recover-password'>
          <a>Recover Password</a>
        </Link>
        <Button>Login</Button>
      </Footer>
    </Container>
  );
};

export default Login;
