import { OnInitialize } from 'brains';

export const onInitialize: OnInitialize = ({ effects }) => {
  effects.gql.initialize(
    {
      endpoint: process.env.API_URL as string,
      // This runs on every request
      headers: () => ({
        authorization: `Bearer 1337`,
      }),
      // The options are the options passed to GRAPHQL-REQUEST
      // options: {
      //   credentials: 'include',
      //   mode: 'cors',
      // },
    },
    // {
    // endpoint: 'ws://some-endpoint.dev',
    // This runs on every connect
    // params: () => ({
    //   token: state.loading.toString(),
    // }),
    // },
  );
};
