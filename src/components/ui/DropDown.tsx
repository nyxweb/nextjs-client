import { FC, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowDown, Remove } from 'components/ui/icons';

export type DropDownOption = { name?: string; value: string | number };

interface Props {
  title?: string;
  options: Array<DropDownOption>;
  selected: string | number;
  setSelected: (option: any) => void;
  unSelect?: boolean;
  width?: number | string;
  height?: number | string;
}

const DropDown: FC<Props> = ({
  title,
  options,
  selected,
  setSelected,
  unSelect = true,
  width = 200,
  height,
}) => {
  const [open, setOpen] = useState(false);
  const dropRef = useRef<any>(null);

  const handleClickOutside = (e: Event) => {
    if (dropRef.current && !dropRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleOptionClick = (option: DropDownOption) => {
    if (selected === option.value) {
      if (unSelect) setSelected('');
    } else {
      setSelected(option.value);
      setOpen(false);
    }
  };

  return (
    <Container ref={dropRef}>
      <Title
        onClick={() => setOpen(!open)}
        style={{ width, height: height ? height : !title ? 35 : 45 }}
        className={open ? 'open' : 'closed'}
      >
        {selected !== '' ? (
          title ? (
            <TitleWrapper>
              <TopTitle>{title}</TopTitle>
              <SelectedTitle>
                {options.find((o) => o.value === selected)?.name || selected}
              </SelectedTitle>
            </TitleWrapper>
          ) : (
            options.find((o) => o.value === selected)?.name || selected
          )
        ) : (
          title || 'select option'
        )}
        <Arrow className={open ? 'rotate' : ''}>
          <ArrowDown />
        </Arrow>
      </Title>
      <OptionsList className={open ? 'open' : 'closed'}>
        {options.length ? (
          options.map((option, i) => (
            <Option key={i} onClick={() => handleOptionClick(option)}>
              {option.name || option.value}
              {selected === option.value ? (
                <Unselect>
                  <Remove />
                </Unselect>
              ) : null}
            </Option>
          ))
        ) : (
          <Option>No options</Option>
        )}
      </OptionsList>
    </Container>
  );
};

export default DropDown;

/** STYLES */

const Container = styled.div`
  position: relative;
  display: inline-block;
  z-index: 5;
`;

const Title = styled.div`
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

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopTitle = styled.div`
  font-size: 10px;
`;

const SelectedTitle = styled.div``;

const Arrow = styled.div`
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

const OptionsList = styled.div`
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

const Option = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;
  height: 30px;
  border-bottom: 1px solid #23344a;
  background: #1a232e;
  cursor: pointer;
  font-size: 12px;

  &:last-of-type {
    border: none;
  }

  &:hover {
    background: #18212b;
  }
`;

const Unselect = styled.div`
  position: absolute;
  right: 10px;
  pointer-events: none;

  svg {
    width: 10px;
    height: 10px;
  }
`;
