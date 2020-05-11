import { gql, Query } from 'overmind-graphql';
import {
  CharactersResult,
  CharactersPayload,
  GuildsResult,
  GuildsPayload,
  WidgetCharacters,
} from 'brains/types/rank';

export const getCharacters: Query<
  { characters: CharactersResult },
  CharactersPayload
> = gql`
  query characters($page: Int, $perPage: Int, $classes: [Int]) {
    characters(page: $page, perPage: $perPage, classes: $classes) {
      count
      rows {
        Name
        Class
        cLevel
        Resets
        HOFWins
        MapNumber
        status {
          ConnectStat
        }
        guild_member {
          guild {
            G_Name
            G_Mark
          }
        }
      }
    }
  }
`;

export const getGuilds: Query<{ guilds: GuildsResult }, GuildsPayload> = gql`
  query guilds($page: Int, $perPage: Int) {
    guilds(page: $page, perPage: $perPage) {
      count
      rows {
        G_Name
        G_Score
        G_Master
        G_Mark
        TotalResets
        TotalMembers
      }
    }
  }
`;

export const getWidgetCharacters: Query<{
  topHof: WidgetCharacters;
}> = gql`
  query topHof {
    topHof {
      Name
      Class
      cLevel
      Resets
      HOFWins
      status {
        ConnectStat
      }
    }
  }
`;

export const getWidgetGuilds: Query<{ guilds: GuildsResult }> = gql`
  query guilds {
    guilds(perPage: 5) {
      rows {
        G_Name
        G_Mark
        TotalResets
        TotalMembers
      }
    }
  }
`;
