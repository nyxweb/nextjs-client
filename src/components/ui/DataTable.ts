import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Thead = styled.thead``;

export const HeadRow = styled.tr`
  background: rgba(0, 0, 0, 0.2);
`;

export const HeadCell = styled.th`
  padding: 10px;
  text-align: center;
  font-weight: bold;
`;

export const Tbody = styled.tbody``;

export const Row = styled.tr`
  background: rgba(0, 0, 0, 0.15);
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  &:nth-of-type(odd) {
    background: rgba(0, 0, 0, 0.1);
  }

  &:hover {
    background: rgba(0, 0, 0, 0.25);
  }
`;

export const Cell = styled.td`
  text-align: center;
  vertical-align: middle;
  height: 35px;

  sup {
    color: #e25555;
  }
`;

export const CenterCell = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
