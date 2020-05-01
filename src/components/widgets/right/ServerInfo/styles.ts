import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  height: 90px;
  background-image: url('/images/partials/info.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20px 0 95px;

  a {
    width: 100%;
  }
`;

export const ServerName = styled.div`
  display: flex;
  width: 100%;
`;

export const Name = styled.div`
  flex: 1;
  color: white;
`;

export const OnlineCount = styled.div`
  flex: 1;
  text-align: right;
  color: rgb(14, 122, 14);
`;

export const Progress = styled.div`
  margin: 8px 0;
  height: 6px;
  width: 100%;
  background: rgb(22, 22, 22);
  display: flex;
  align-items: center;
  border-radius: 2px;
`;

export const Fill = styled.div`
  height: 10px;
  background: #1a8ec5;
  box-shadow: 0 0 5px 0 #00aeff;
  border-radius: 2px;
`;

export const Statistics = styled.div`
  display: flex;
  background: rgba(50, 76, 125, 0.2);
`;

export const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 10px 10px;
  padding: 10px;
  width: 76.5px;
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 3px;
  cursor: pointer;
  transition: 0.1s ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const Icon = styled.div`
  width: 25px;
  height: 25px;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const Title = styled.div`
  margin-top: 5px;
`;

export const Count = styled.div``;
