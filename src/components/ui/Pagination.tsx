import { FC } from 'react';
import styled from 'styled-components';

import DropDown from './DropDown';
import { ArrowLeft, ArrowRight } from 'components/ui/icons';

interface Props {
  page: number;
  perPage: number;
  totalCount: number;
  setPage: (page: number) => void;
  setPerPage: (perPage: number) => void;
}

const Pagination: FC<Props> = ({
  page,
  perPage,
  totalCount,
  setPage,
  setPerPage,
}) => {
  if (!totalCount) return null;

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page * perPage < totalCount) {
      setPage(page + 1);
    }
  };

  return (
    <Container>
      <ChangePerPage>
        <DropDown
          options={[{ value: 10 }, { value: 20 }, { value: 50 }]}
          selected={perPage}
          setSelected={setPerPage}
          unSelect={false}
          width={70}
        />
      </ChangePerPage>
      <ChangePage>
        <Text>
          {page * perPage - perPage}-
          {totalCount < page * perPage ? totalCount : page * perPage} of{' '}
          {totalCount.toLocaleString() + ' '}
        </Text>
        <Arrow onClick={prevPage} style={{ opacity: page > 1 ? 1 : 0.4 }}>
          <ArrowLeft />
        </Arrow>
        <Arrow
          onClick={nextPage}
          style={{ opacity: page * perPage < totalCount ? 1 : 0.4 }}
        >
          <ArrowRight />
        </Arrow>
      </ChangePage>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: rgba(63, 85, 114, 0.1);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
`;

const ChangePerPage = styled.div``;

const ChangePage = styled.div`
  display: flex;
`;

const Arrow = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 5px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Text = styled.span`
  display: flex;
  align-items: center;
`;
