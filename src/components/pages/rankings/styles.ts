import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

export const GuildWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5px;

  a {
    margin-right: 5px;
  }
`;

export const MarkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  background: rgba(63, 85, 114, 0.1);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);

  a {
    padding: 5px;

    &.selected {
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;
