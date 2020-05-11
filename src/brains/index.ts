// import { rehydrate } from 'overmind';
import { createHook } from 'overmind-react';
import { IConfig, IAction, IOnInitialize } from 'overmind';

/** INTERNAL */
import { onInitialize } from './onInitialize';
import { state } from './state';
import * as actions from './actions';
import { gql } from './effects/gql';

export const config = {
  onInitialize,
  state,
  actions,
  effects: { gql },
};

export interface Config extends IConfig<typeof config> {}

export interface OnInitialize extends IOnInitialize<Config> {}

export interface Action<Input = void, Output = void>
  extends IAction<Config, Input, Output> {}

export interface AsyncAction<Input = void, Output = void>
  extends IAction<Config, Input, Promise<Output>> {}

export const useOvermind = createHook<typeof config>();
