// import { rehydrate } from 'overmind';
import { Action } from 'brains';

import * as rank from './rank';

export { rank };

export const toggleLoading: Action = ({ state }) => {
  state.isLoading = !state.isLoading;
};
