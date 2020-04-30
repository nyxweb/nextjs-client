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
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
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
  }
`;

export const OptionsList = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  right: 0;

  max-height: 130px;
  transition: 0.3s;
  background: #1a232e;
  border-radius: 4px;

  overflow: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  ::-webkit-scrollbar {
    display: none;
  }

  &.closed {
    max-height: 0;
  }
`;

export const Option = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;
  height: 30px;
  border-bottom: 1px solid #23344a;
  cursor: pointer;

  &:last-of-type {
    border: none;
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
