import { useState } from 'react';

import Characters from 'components/pages/rankings/characters';
import Guilds from 'components/pages/rankings/guilds';
import DropDown from 'components/ui/DropDown';

const Rankings = () => {
  const [selected, setSelected] = useState('');

  const options = [
    { name: 'Characters', value: 'characters' },
    { name: 'Guilds', value: 'guilds' },
  ];

  return (
    <div>
      <div style={{ padding: 20, display: 'flex', justifyContent: 'center' }}>
        <DropDown
          title='select ranking'
          options={options}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div>
        {selected ? (
          selected === 'characters' ? (
            <Characters />
          ) : selected === 'guilds' ? (
            <Guilds />
          ) : null
        ) : null}
      </div>
    </div>
  );
};

export default Rankings;
