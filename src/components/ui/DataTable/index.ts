import styled from 'styled-components';

export const Table = styled.div`
  display: table;
  border-collapse: collapse;
  width: 100%;
`;

export const Thead = styled.div`
  display: table-header-group;
`;

export const HeadRow = styled.div`
  display: table-row;
  background: rgba(0, 0, 0, 0.2);
`;

export const HeadCell = styled.div`
  display: table-cell;
  padding: 10px;
  text-align: center;
  font-weight: bold;
`;

export const Tbody = styled.div`
  display: table-row-group;
`;

export const Row = styled.div`
  display: table-row;
  background: rgba(0, 0, 0, 0.15);
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  &:nth-of-type(odd) {
    background: rgba(0, 0, 0, 0.1);
  }

  &:hover {
    background: rgba(0, 0, 0, 0.25);
  }
`;

export const Cell = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  height: 35px;

  sup {
    color: #e25555;
  }
`;
