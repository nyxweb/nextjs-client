import { useState, ChangeEvent } from 'react';

import Characters from '../components/pages/rankings/characters';
import Guilds from '../components/pages/rankings/guilds';

const Rankings = () => {
  const [selected, setSelected] = useState<string>();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value=''>-</option>
        <option value='characters'>Characters</option>
        <option value='guilds'>Guilds</option>
      </select>
      <br />
      <br />
      <div>{!selected || selected === 'characters' ? <Characters /> : <Guilds />}</div>
    </div>
  );
};

export default Rankings;
