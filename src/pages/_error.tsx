import { NextPageContext } from 'next/dist/next-server/lib/utils';

const statusCodes: { [code: number]: string } = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error',
};

interface Props {
  statusCode: number | null;
}

const Error = ({ statusCode }: Props) => {
  return (
    <div>
      {statusCode
        ? statusCodes[statusCode] || `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </div>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
