import { FC, useState, useRef, useEffect } from 'react';

import {
  Container,
  Title,
  Arrow,
  OptionsList,
  Option,
  Unselect,
  TitleWrapper,
  TopTitle,
  SelectedTitle,
} from './styles';
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
