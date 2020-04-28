import { FC } from 'react';
import { v4 as uuid } from 'uuid';

import { Table, Row, Thead, Cell, Tbody, HeadRow, HeadCell } from './styles';
// import { ArrowUp, ArrowDown, Remove } from 'components/ui/icons';

export type Cell = {
  name: string;
  key?: string;
  page?: number;
  perPage?: number;
  func?: (param: any) => any;
};

interface Props {
  data: any;
  cells: Array<Cell>;
}

const DataTable: FC<Props> = ({ data, cells }) => {
  const dataRows = () => {
    const rows: Array<JSX.Element> = [];
    for (let [index, dataRow] of data.entries()) {
      const row: Array<JSX.Element> = [];

      cells.forEach((cell) => {
        row.push(
          <Cell key={uuid()}>
            {cell.page && cell.perPage
              ? (cell.page - 1) * cell.perPage + (index + 1)
              : cell.key
              ? cell.func
                ? cell.func(dataRow[cell.key])
                : dataRow[cell.key]
              : null}
          </Cell>,
        );
      });

      rows.push(<Row key={uuid()}>{row}</Row>);
    }

    return rows;
  };

  return (
    <Table>
      <Thead>
        <HeadRow>
          {cells.map((cell) => (
            <HeadCell key={uuid()}>{cell.name}</HeadCell>
          ))}
        </HeadRow>
      </Thead>
      <Tbody>{dataRows()}</Tbody>
    </Table>
  );
};

export default DataTable;
