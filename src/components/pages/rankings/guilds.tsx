import { useQuery } from '@apollo/client';
import { GET_GUILDS } from './queries';

const Guilds = () => {
  const { loading, data } = useQuery(GET_GUILDS, {
    variables: { page: 1, perPage: 10 },
    notifyOnNetworkStatusChange: true,
  });

  return (
    <div>
      <div>Guilds:</div>
      {loading
        ? `Loading...`
        : data.guilds.map((guild: any, i: number) => <div key={i}>{guild.G_Name}</div>)}
    </div>
  );
};

export default Guilds;
