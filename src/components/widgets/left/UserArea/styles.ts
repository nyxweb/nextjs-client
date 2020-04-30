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

export const Button = styled.button`
  height: 30px;
  width: 80px;
  background: url('/images/partials/green-button.jpg') no-repeat center
    center/cover;
  border: none;
  outline: none;
  color: #c3eaee;
  text-transform: uppercase;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    filter: brightness(1.2);
    border: none;
    outline: none;
  }
`;
