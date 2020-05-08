import { rehydrate } from 'overmind';
import { Action } from 'brains';

export const changePage: Action<Action[]> = ({ state }, mutations) => {
  rehydrate(state, mutations || []);
};

export const setLoading: Action<boolean | undefined> = (
  { state: { loading } },
  isLoading,
) => {
  if (isLoading !== undefined) loading = isLoading;
  else loading = !loading;
};
