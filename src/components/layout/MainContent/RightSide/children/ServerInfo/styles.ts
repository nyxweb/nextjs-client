import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90px;
  background-image: url('/images/partials/info.jpg');
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .container {
    margin: 0 20px;
    width: 155px;

    .server {
      display: flex;
      width: 100%;

      .name {
        flex: 1;
        color: white;
      }

      .online {
        flex: 1;
        text-align: right;
        color: rgb(14, 122, 14);
      }
    }

    .progress {
      margin: 8px 0;
      height: 6px;
      background: rgb(22, 22, 22);
      display: flex;
      align-items: center;
      border-radius: 2px;

      .fill {
        height: 10px;
        background: rgb(15, 170, 106);
        box-shadow: 0 0 3px rgb(18, 151, 73);
        border-radius: 2px;
      }
    }
  }
`;
