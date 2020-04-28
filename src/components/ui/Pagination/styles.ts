import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  background: rgba(63, 85, 114, 0.1);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
`;

export const ChangePerPage = styled.div``;

export const ChangePage = styled.div`
  display: flex;
`;

export const Arrow = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 5px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
`;
