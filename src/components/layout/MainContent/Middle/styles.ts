import styled from 'styled-components';

export const Container = styled.main`
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

export const CornerIcons = styled.div`
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

export const CharactersWrapper = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 15px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.7);
  position: relative;
  z-index: 1;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;

export const CharacterCard = styled.a`
  width: 110px;
  height: 120px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: rgba(0, 0, 0, 0.3);

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  .ClassImage {
    width: 80px;
    height: 80px;
    border-radius: 5px;
  }
`;
