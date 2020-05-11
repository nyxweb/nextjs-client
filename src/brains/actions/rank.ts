import { AsyncAction } from 'brains';
import { CharactersPayload, GuildsPayload } from '../types/rank';

export const getCharacters: AsyncAction<CharactersPayload> = async (
  { state, effects },
  payload,
) => {
  try {
    state.rank.isLoading = true;
    const { characters } = await effects.gql.queries.getCharacters(payload);
    state.rank.characters = characters;
  } catch (error) {
    state.rank.characters = null;
  } finally {
    state.rank.isLoading = false;
  }
};

export const getGuilds: AsyncAction<GuildsPayload> = async (
  { state, effects },
  payload,
) => {
  try {
    state.rank.isLoading = true;
    const { guilds } = await effects.gql.queries.getGuilds(payload);
    state.rank.guilds = guilds;
  } catch (error) {
    state.rank.guilds = null;
  } finally {
    state.rank.isLoading = false;
  }
};

export const getWidgetTopHof: AsyncAction = async ({ state, effects }) => {
  try {
    state.rank.widgets.topHof.isLoading = true;
    const { topHof } = await effects.gql.queries.getWidgetTopHof();
    state.rank.widgets.topHof.data = topHof;
  } catch (error) {
    state.rank.widgets.topHof.data = null;
  } finally {
    state.rank.widgets.topHof.isLoading = false;
  }
};

export const getWidgetCharacters: AsyncAction = async ({ state, effects }) => {
  try {
    state.rank.widgets.characters.isLoading = true;
    const { characters } = await effects.gql.queries.getWidgetCharacters();
    state.rank.widgets.characters.data = characters.rows;
  } catch (error) {
    state.rank.widgets.characters.data = null;
  } finally {
    state.rank.widgets.characters.isLoading = false;
  }
};

export const getWidgetGuilds: AsyncAction = async ({ state, effects }) => {
  try {
    state.rank.widgets.guilds.isLoading = true;
    const { guilds } = await effects.gql.queries.getWidgetGuilds();
    state.rank.widgets.guilds.data = guilds.rows;
  } catch (error) {
    state.rank.widgets.guilds.data = null;
  } finally {
    state.rank.widgets.guilds.isLoading = false;
  }
};
