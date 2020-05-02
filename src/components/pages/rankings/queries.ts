import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query characters($page: Int, $perPage: Int) {
    characters(page: $page, perPage: $perPage) {
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

export const GET_GUILDS = gql`
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
