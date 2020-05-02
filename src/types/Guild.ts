export interface IGuild {
  G_Name: string;
  G_Mark: Buffer;
  G_Score: number;
  G_Master: string;
  G_Count: number;
  Number: number;
  G_Type: number;
  G_Rival: number;
  G_Union: number;
  TotalResets: number;
  TotalMembers: number;
}

export interface GuildMember {
  Name: string;
  G_Name: string;
  G_Level: string;
  G_Status: string;
  guild: IGuild;
}
