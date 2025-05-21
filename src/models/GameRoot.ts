// GameRoot.ts

export interface GameRoot {
  copyright: string;
  totalItems: number;
  totalEvents: number;
  totalGames: number;
  totalGamesInProgress: number;
  dates: DateInfo[];
}

export interface DateInfo {
  date: string;
  totalItems: number;
  totalEvents: number;
  totalGames: number;
  totalGamesInProgress: number;
  games: Game[];
  events: any[]; // Adjust if event objects have a known shape
}

export interface Game {
  gamePk: number;
  gameGuid: string;
  link: string;
  gameType: string;
  season: string;
  gameDate: string; // ISO string preferred in JS
  officialDate: string;
  status: Status;
  teams: Teams;
  venue: Venue;
  content: Content;
  isTie: boolean;
  gameNumber: number;
  publicFacing: boolean;
  doubleHeader: string;
  gamedayType: string;
  tiebreaker: string;
  calendarEventID: string;
  seasonDisplay: string;
  dayNight: string;
  scheduledInnings: number;
  reverseHomeAwayStatus: boolean;
  inningBreakLength: number;
  gamesInSeries: number;
  seriesGameNumber: number;
  seriesDescription: string;
  recordSource: string;
  ifNecessary: string;
  ifNecessaryDescription: string;
}

export interface Status {
  abstractGameState: string;
  codedGameState: string;
  detailedState: string;
  statusCode: string;
  startTimeTBD: boolean;
  abstractGameCode: string;
}

export interface Teams {
  away: TeamInfo;
  home: TeamInfo;
}

export interface TeamInfo {
  leagueRecord: LeagueRecord;
  score: number;
  team: Team;
  isWinner: boolean;
  splitSquad: boolean;
  seriesNumber: number;
}

export interface LeagueRecord {
  wins: number;
  losses: number;
  pct: string;
}

export interface Team {
  id: number;
  name: string;
  link: string;
}

export interface Venue {
  id: number;
  name: string;
  link: string;
}

export interface Content {
  link: string;
}
