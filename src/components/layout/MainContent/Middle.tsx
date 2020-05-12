import { FC } from 'react';
import styled from 'styled-components';
import LastHOF from 'components/widgets/others/LastHOF';

const Middle: FC = ({ children }) => {
  return (
    <Container>
      <CornerIcons />
      <LastHOF />
      {children}
    </Container>
  );
};

export default Middle;

/** STYLES */

const Container = styled.main`
  position: relative;
  width: 660px;
  background: url('/images/layout/block-bg.jpg');

  &:before {
    content: '';
    position: absolute;
    width: 143px;
    height: 74px;
    background: url('/images/layout/top-content-icon.png');
    top: -42px;
    left: calc(50% - 71px);
    pointer-events: none;
  }

  &:after {
    content: '';
    position: absolute;
    pointer-events: none;
    width: 668px;
    height: 25px;
    background: url('/images/layout/corner-icon-small-left.png') no-repeat
        center left,
      url('/images/layout/corner-icon-small-right.png') no-repeat center right;
    bottom: -4px;
    left: -4px;
  }
`;

const CornerIcons = styled.div`
  position: absolute;
  pointer-events: none;
  width: 732px;
  height: 73px;
  background: url('/images/layout/corner-icon-big-left.png') no-repeat center
      left,
    url('/images/layout/corner-icon-big-right.png') no-repeat center right;
  top: -36px;
  left: -36px;
`;
