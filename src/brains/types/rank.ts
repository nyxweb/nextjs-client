export interface CharactersResult {
  count: number;
  rows: Array<{
    Name: string;
    Class: number;
    cLevel: number;
    Resets: number;
    HOFWins: number;
    MapNumber: number;
    status: {
      ConnectStat: number;
    };
    guild_member: {
      guild: {
        G_Name: string;
        G_Mark: Buffer;
      };
    };
  }>;
}

export interface CharactersPayload {
  page?: number;
  perPage?: number;
  classes?: Array<0 | 1 | 2 | 16 | 17 | 18 | 32 | 33 | 34 | 48 | 49 | 64 | 65>;
}

export interface GuildsResult {
  count: number;
  rows: Array<{
    G_Name: string;
    G_Score: number;
    G_Master: string;
    G_Mark: Buffer;
    TotalResets: number;
    TotalMembers: number;
  }>;
}

export interface GuildsPayload {
  page?: number;
  perPage?: number;
}

export type WidgetCharacters = Array<{
  Name: string;
  Class: number;
  Resets: number;
  cLevel: number;
  HOFWins: number;
  status: {
    ConnectStat: number;
  };
}>;

export type WidgetGuilds = Array<{
  G_Name: string;
  G_Mark: Buffer;
  TotalResets: number;
  TotalMembers: number;
}>;
