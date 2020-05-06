import { Container } from './styles';
import Wrapper from '../Wrapper';
// import { useQuery } from '@apollo/client';
// import { GET_EVENTS } from './queries';
// import Loader from 'react-loader-spinner';

const Events = () => {
  // const { loading, error, data } = useQuery(GET_EVENTS);

  return (
    <Wrapper title='Events' subTitle='server events timers'>
      <Container>stuff</Container>
    </Wrapper>
  );
};

export default Events;
