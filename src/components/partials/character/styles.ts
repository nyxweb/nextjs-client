import styled from 'styled-components';

export const StyledName = styled.div`
  display: inline-flex;
  align-items: center;
  height: 17px;
  color: goldenrod;

  img {
    margin-left: 3px;
    max-height: 8px;
    max-width: 8px;
  }

  .status {
    margin-left: 3px;
    height: 5px;
    width: 5px;
    background-color: red;
    border-radius: 3px;

    &.online {
      background-color: green;
    }

    &.offline {
      background-color: red;
    }
  }
`;
