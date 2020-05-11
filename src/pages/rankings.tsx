import { useState } from 'react';
import { useOvermind } from 'brains';

import Characters from 'components/pages/rankings/characters';
import Guilds from 'components/pages/rankings/guilds';
import DropDown from 'components/ui/DropDown';
import Button from 'components/ui/Button';

const Rankings = () => {
  const [selected, setSelected] = useState('');

  const options = [
    { name: 'Characters', value: 'characters' },
    { name: 'Guilds', value: 'guilds' },
  ];

  const { state, actions } = useOvermind();

  return (
    <div>
      <Button onClick={actions.toggleLoading} loading={state.isLoading}>
        {state.isLoading ? 'loading' : 'not loading'}
      </Button>
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
