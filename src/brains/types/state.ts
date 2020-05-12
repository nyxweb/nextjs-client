import {
  CharactersResult,
  GuildsResult,
  WidgetCharacters,
  WidgetGuilds,
} from '../types/rank';

export interface IAppState {
  isLoading: boolean;
  app: {
    title: string;
    name: string;
  };
  rank: {
    isLoading: boolean;
    characters: CharactersResult | null;
    guilds: GuildsResult | null;

    widgets: {
      topHof: {
        isLoading: boolean;
        data: WidgetCharacters | null;
      };
      characters: {
        isLoading: boolean;
        data: WidgetCharacters | null;
      };
      guilds: {
        isLoading: boolean;
        data: WidgetGuilds | null;
      };
    };
  };
  config: {
    events: string[];
  };
}
