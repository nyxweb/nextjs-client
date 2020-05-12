import { IAppState } from 'brains/types/state';

import { AppState } from './app';
import { RankState } from './rank';
import { ConfigState } from './config';

export const state: IAppState = {
  isLoading: true,
  app: AppState,
  rank: RankState,
  config: ConfigState,
};
