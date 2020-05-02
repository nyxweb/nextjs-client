import { MEMB_STAT } from './User';
import { GuildMember } from './Guild';

export interface ICharacter {
  Name: string;
  cLevel: number;
  LevelUpPoint: number;
  Class: number;
  Experience: number;
  Strength: number;
  Dexterity: number;
  Vitality: number;
  Energy: number;
  Leadership: number;
  Inventory: string;
  Money: number;
  MapNumber: number;
  MapPosX: number;
  MapPosY: number;
  PkCount: number;
  CtlCode: number;
  Resets: number;
  BanPost: number;
  IsMarried: number;
  MarryName: string;
  QuestNumber: number;
  QuestMonsters: number;
  QuestInCurse: number;
  QuestInProgress: number;
  SkyEventWins: number;
  IsVip: number;
  VipExpirationTime: number;
  HOFWins: number;
  status: MEMB_STAT;
  guild_member: GuildMember;
}
