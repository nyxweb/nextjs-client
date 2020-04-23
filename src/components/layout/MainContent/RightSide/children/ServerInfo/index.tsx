import Link from 'next/link';

import { Container } from './styles';

const ServerInfo = () => {
  return (
    <Container>
      <div className='container'>
        <div className='server'>
          <div className='name'>NyxWeb</div>
          <div className='online'>( 232 )</div>
        </div>
        <div className='progress'>
          <div className='fill' style={{ width: '66%' }} />
        </div>
        <Link href='/info'>
          <a>Server Information</a>
        </Link>
      </div>
    </Container>
  );
};

export default ServerInfo;
