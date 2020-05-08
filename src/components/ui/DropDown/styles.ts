import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-block;
  z-index: 5;
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background: #1a232e;
  border: 1px solid #23344a;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  &.closed {
    border-radius: 4px;
    border: 1px solid #23344a;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopTitle = styled.div`
  font-size: 10px;
`;

export const SelectedTitle = styled.div``;

export const Arrow = styled.div`
  position: absolute;
  right: 10px;
  width: 20px;
  height: 20px;
  pointer-events: none;

  svg {
    width: 20px;
    height: 20px;
    transition: 0.3s;
  }

  &.rotate {
    svg {
      transform: rotate(180deg);
    }
  }
`;

export const OptionsList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  max-height: 130px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border: 1px solid #23344a;
  transition: max-height 0.3s;

  overflow: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  ::-webkit-scrollbar {
    display: none;
  }

  &.closed {
    max-height: 0;
    border: 1px solid transparent;
  }
`;

export const Option = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;
  height: 30px;
  border-bottom: 1px solid #23344a;
  background: #1a232e;
  cursor: pointer;

  &:last-of-type {
    border: none;
  }

  &:hover {
    background: #18212b;
  }
`;

export const Unselect = styled.div`
  position: absolute;
  right: 10px;
  pointer-events: none;

  svg {
    width: 10px;
    height: 10px;
  }
`;
