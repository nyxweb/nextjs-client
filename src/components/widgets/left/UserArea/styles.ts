import styled from 'styled-components';

export const Container = styled.div`
  background: url('/images/layout/login-block-bg.jpg');
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const Title = styled.div``;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInput = styled.input`
  background: #131f2d url('/images/partials/input-user.png') no-repeat left
    center;
  height: 36px;
  padding: 7px 7px 7px 50px;
  margin: 0 20px 10px 20px;
`;

export const PassInput = styled.input`
  background: #131f2d url('/images/partials/input-pass.png') no-repeat left
    center;
  height: 36px;
  padding: 7px 7px 7px 50px;
  margin: 0 20px 0 20px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 20px 20px;
`;
