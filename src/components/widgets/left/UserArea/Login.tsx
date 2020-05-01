import { useState } from 'react';
import Link from 'next/link';
import {
  Container,
  Header,
  Title,
  Fields,
  Footer,
  UserInput,
  PassInput,
} from './styles';
import Button from 'components/ui/Button';

const Login = () => {
  const [loading, setLoading] = useState(false);

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
        <Button
          type='green'
          loading={loading}
          onClick={() => setLoading(!loading)}
        >
          Login
        </Button>
      </Footer>
    </Container>
  );
};

export default Login;
