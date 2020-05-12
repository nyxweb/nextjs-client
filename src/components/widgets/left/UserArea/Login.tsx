import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
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

const Container = styled.div`
  background: url('/images/layout/login-block-bg.jpg');
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Title = styled.div``;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInput = styled.input`
  background: #131f2d url('/images/partials/input-user.png') no-repeat left
    center;
  height: 36px;
  padding: 7px 7px 7px 50px;
  margin: 0 20px 10px 20px;
`;

const PassInput = styled.input`
  background: #131f2d url('/images/partials/input-pass.png') no-repeat left
    center;
  height: 36px;
  padding: 7px 7px 7px 50px;
  margin: 0 20px 0 20px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 20px 20px;
`;
