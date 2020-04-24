import { useQuery } from '@apollo/react-hooks';
import { GET_CHARACTERS } from './queries';

const Characters = () => {
  const { loading, data } = useQuery(GET_CHARACTERS, {
    variables: { page: 1, perPage: 10 },
    notifyOnNetworkStatusChange: true,
  });

  return (
    <div>
      <div>Characters:</div>
      {loading
        ? `Loading...`
        : data.characters.map((char: any, i: number) => <div key={i}>{char.Name}</div>)}
    </div>
  );
};

export default Characters;
