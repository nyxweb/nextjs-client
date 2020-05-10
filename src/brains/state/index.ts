import { IAppState } from 'brains/types/state';

import { AppState } from './app';
import { RankState } from './rank';

export const state: IAppState = {
  isLoading: true,
  app: AppState,
  rank: RankState,
};
