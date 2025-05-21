export interface GameDetails {
  copyright: string
  gamePk: number
  link: string
  metaData: MetaData
  gameData: GameData
  liveData: LiveData
}

export interface MetaData {
  wait: number
  timeStamp: string
  gameEvents: string[]
  logicalEvents: string[]
}

export interface GameData {
  game: Game
  datetime: Datetime
  status: Status
  teams: Teams
  players: Players
  venue: Venue3
  officialVenue: OfficialVenue
  weather: Weather
  gameInfo: GameInfo
  review: Review
  flags: Flags
  alerts: any[]
  probablePitchers: ProbablePitchers
  officialScorer: OfficialScorer
  primaryDatacaster: PrimaryDatacaster
  moundVisits: MoundVisits
}

export interface Game {
  pk: number
  type: string
  doubleHeader: string
  id: string
  gamedayType: string
  tiebreaker: string
  gameNumber: number
  calendarEventID: string
  season: string
  seasonDisplay: string
}

export interface Datetime {
  dateTime: string
  originalDate: string
  officialDate: string
  dayNight: string
  time: string
  ampm: string
}

export interface Status {
  abstractGameState: string
  codedGameState: string
  detailedState: string
  statusCode: string
  startTimeTBD: boolean
  abstractGameCode: string
}

export interface Teams {
  away: Away
  home: Home
}

export interface Away {
  springLeague: SpringLeague
  allStarStatus: string
  id: number
  name: string
  link: string
  season: number
  venue: Venue
  springVenue: SpringVenue
  teamCode: string
  fileCode: string
  abbreviation: string
  teamName: string
  locationName: string
  firstYearOfPlay: string
  league: League
  division: Division
  sport: Sport
  shortName: string
  record: Record
  franchiseName: string
  clubName: string
  active: boolean
}

export interface SpringLeague {
  id: number
  name: string
  link: string
  abbreviation: string
}

export interface Venue {
  id: number
  name: string
  link: string
}

export interface SpringVenue {
  id: number
  link: string
}

export interface League {
  id: number
  name: string
  link: string
}

export interface Division {
  id: number
  name: string
  link: string
}

export interface Sport {
  id: number
  link: string
  name: string
}

export interface Record {
  gamesPlayed: number
  wildCardGamesBack: string
  leagueGamesBack: string
  springLeagueGamesBack: string
  sportGamesBack: string
  divisionGamesBack: string
  conferenceGamesBack: string
  leagueRecord: LeagueRecord
  records: Records
  divisionLeader: boolean
  wins: number
  losses: number
  winningPercentage: string
}

export interface LeagueRecord {
  wins: number
  losses: number
  ties: number
  pct: string
}

export interface Records {}

export interface Home {
  springLeague: SpringLeague2
  allStarStatus: string
  id: number
  name: string
  link: string
  season: number
  venue: Venue2
  springVenue: SpringVenue2
  teamCode: string
  fileCode: string
  abbreviation: string
  teamName: string
  locationName: string
  firstYearOfPlay: string
  league: League2
  division: Division2
  sport: Sport2
  shortName: string
  record: Record2
  franchiseName: string
  clubName: string
  active: boolean
}

export interface SpringLeague2 {
  id: number
  name: string
  link: string
  abbreviation: string
}

export interface Venue2 {
  id: number
  name: string
  link: string
}

export interface SpringVenue2 {
  id: number
  link: string
}

export interface League2 {
  id: number
  name: string
  link: string
}

export interface Division2 {
  id: number
  name: string
  link: string
}

export interface Sport2 {
  id: number
  link: string
  name: string
}

export interface Record2 {
  gamesPlayed: number
  wildCardGamesBack: string
  leagueGamesBack: string
  springLeagueGamesBack: string
  sportGamesBack: string
  divisionGamesBack: string
  conferenceGamesBack: string
  leagueRecord: LeagueRecord2
  records: Records2
  divisionLeader: boolean
  wins: number
  losses: number
  winningPercentage: string
}

export interface LeagueRecord2 {
  wins: number
  losses: number
  ties: number
  pct: string
}

export interface Records2 {}

export interface Players {
  ID672744: Id672744
  ID624428: Id624428
  ID694973: Id694973
  ID669016: Id669016
  ID669256: Id669256
  ID650911: Id650911
  ID547180: Id547180
  ID668804: Id668804
  ID592663: Id592663
  ID554430: Id554430
  ID642215: Id642215
  ID689147: Id689147
  ID664761: Id664761
  ID663432: Id663432
  ID656941: Id656941
  ID672578: Id672578
  ID592836: Id592836
  ID669387: Id669387
  ID621366: Id621366
  ID571760: Id571760
  ID663559: Id663559
  ID670280: Id670280
  ID605447: Id605447
  ID690953: Id690953
  ID666200: Id666200
  ID687462: Id687462
  ID663698: Id663698
  ID624641: Id624641
  ID665833: Id665833
  ID592206: Id592206
  ID605452: Id605452
  ID663767: Id663767
  ID663647: Id663647
  ID657571: Id657571
  ID669707: Id669707
  ID656605: Id656605
  ID502054: Id502054
  ID681082: Id681082
  ID457705: Id457705
  ID670059: Id670059
  ID643396: Id643396
  ID665561: Id665561
  ID642701: Id642701
  ID621381: Id621381
  ID624133: Id624133
  ID680779: Id680779
  ID621383: Id621383
  ID666214: Id666214
  ID679032: Id679032
  ID596146: Id596146
  ID607208: Id607208
  ID614179: Id614179
}

export interface Id672744 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition
  useName: string
  useLastName: string
  boxscoreName: string
  gender: string
  nameMatrilineal: string
  isPlayer: boolean
  isVerified: boolean
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide
  pitchHand: PitchHand
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide {
  code: string
  description: string
}

export interface PitchHand {
  code: string
  description: string
}

export interface Id624428 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition2
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  nickName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  mlbDebutDate: string
  batSide: BatSide2
  pitchHand: PitchHand2
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition2 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide2 {
  code: string
  description: string
}

export interface PitchHand2 {
  code: string
  description: string
}

export interface Id694973 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition3
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  mlbDebutDate: string
  batSide: BatSide3
  pitchHand: PitchHand3
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition3 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide3 {
  code: string
  description: string
}

export interface PitchHand3 {
  code: string
  description: string
}

export interface Id669016 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition4
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  mlbDebutDate: string
  batSide: BatSide4
  pitchHand: PitchHand4
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition4 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide4 {
  code: string
  description: string
}

export interface PitchHand4 {
  code: string
  description: string
}

export interface Id669256 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition5
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide5
  pitchHand: PitchHand5
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition5 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide5 {
  code: string
  description: string
}

export interface PitchHand5 {
  code: string
  description: string
}

export interface Id650911 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition6
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  nameMatrilineal: string
  isPlayer: boolean
  isVerified: boolean
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide6
  pitchHand: PitchHand6
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition6 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide6 {
  code: string
  description: string
}

export interface PitchHand6 {
  code: string
  description: string
}

export interface Id547180 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition7
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  nickName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide7
  pitchHand: PitchHand7
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition7 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide7 {
  code: string
  description: string
}

export interface PitchHand7 {
  code: string
  description: string
}

export interface Id668804 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition8
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  nickName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  mlbDebutDate: string
  batSide: BatSide8
  pitchHand: PitchHand8
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition8 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide8 {
  code: string
  description: string
}

export interface PitchHand8 {
  code: string
  description: string
}

export interface Id592663 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition9
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  nickName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide9
  pitchHand: PitchHand9
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition9 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide9 {
  code: string
  description: string
}

export interface PitchHand9 {
  code: string
  description: string
}

export interface Id554430 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition10
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  nickName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide10
  pitchHand: PitchHand10
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition10 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide10 {
  code: string
  description: string
}

export interface PitchHand10 {
  code: string
  description: string
}

export interface Id642215 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition11
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  mlbDebutDate: string
  batSide: BatSide11
  pitchHand: PitchHand11
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition11 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide11 {
  code: string
  description: string
}

export interface PitchHand11 {
  code: string
  description: string
}

export interface Id689147 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition12
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide12
  pitchHand: PitchHand12
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition12 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide12 {
  code: string
  description: string
}

export interface PitchHand12 {
  code: string
  description: string
}

export interface Id664761 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition13
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide13
  pitchHand: PitchHand13
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition13 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide13 {
  code: string
  description: string
}

export interface PitchHand13 {
  code: string
  description: string
}

export interface Id663432 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition14
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  nickName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  mlbDebutDate: string
  batSide: BatSide14
  pitchHand: PitchHand14
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition14 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide14 {
  code: string
  description: string
}

export interface PitchHand14 {
  code: string
  description: string
}

export interface Id656941 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition15
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  nickName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide15
  pitchHand: PitchHand15
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition15 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide15 {
  code: string
  description: string
}

export interface PitchHand15 {
  code: string
  description: string
}

export interface Id672578 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition16
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  nameMatrilineal: string
  isPlayer: boolean
  isVerified: boolean
  mlbDebutDate: string
  batSide: BatSide16
  pitchHand: PitchHand16
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition16 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide16 {
  code: string
  description: string
}

export interface PitchHand16 {
  code: string
  description: string
}

export interface Id592836 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition17
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  nickName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide17
  pitchHand: PitchHand17
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition17 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide17 {
  code: string
  description: string
}

export interface PitchHand17 {
  code: string
  description: string
}

export interface Id669387 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition18
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide18
  pitchHand: PitchHand18
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition18 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide18 {
  code: string
  description: string
}

export interface PitchHand18 {
  code: string
  description: string
}

export interface Id621366 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition19
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide19
  pitchHand: PitchHand19
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition19 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide19 {
  code: string
  description: string
}

export interface PitchHand19 {
  code: string
  description: string
}

export interface Id571760 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition20
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  nickName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide20
  pitchHand: PitchHand20
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition20 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide20 {
  code: string
  description: string
}

export interface PitchHand20 {
  code: string
  description: string
}

export interface Id663559 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition21
  useName: string
  useLastName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide21
  pitchHand: PitchHand21
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition21 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide21 {
  code: string
  description: string
}

export interface PitchHand21 {
  code: string
  description: string
}

export interface Id670280 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition22
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide22
  pitchHand: PitchHand22
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition22 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide22 {
  code: string
  description: string
}

export interface PitchHand22 {
  code: string
  description: string
}

export interface Id605447 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition23
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide23
  pitchHand: PitchHand23
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition23 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide23 {
  code: string
  description: string
}

export interface PitchHand23 {
  code: string
  description: string
}

export interface Id690953 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition24
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide24
  pitchHand: PitchHand24
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition24 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide24 {
  code: string
  description: string
}

export interface PitchHand24 {
  code: string
  description: string
}

export interface Id666200 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition25
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  mlbDebutDate: string
  batSide: BatSide25
  pitchHand: PitchHand25
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition25 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide25 {
  code: string
  description: string
}

export interface PitchHand25 {
  code: string
  description: string
}

export interface Id687462 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition26
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  mlbDebutDate: string
  batSide: BatSide26
  pitchHand: PitchHand26
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition26 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide26 {
  code: string
  description: string
}

export interface PitchHand26 {
  code: string
  description: string
}

export interface Id663698 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition27
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  mlbDebutDate: string
  batSide: BatSide27
  pitchHand: PitchHand27
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition27 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide27 {
  code: string
  description: string
}

export interface PitchHand27 {
  code: string
  description: string
}

export interface Id624641 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition28
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide28
  pitchHand: PitchHand28
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition28 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide28 {
  code: string
  description: string
}

export interface PitchHand28 {
  code: string
  description: string
}

export interface Id665833 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition29
  useName: string
  useLastName: string
  boxscoreName: string
  gender: string
  nameMatrilineal: string
  isPlayer: boolean
  isVerified: boolean
  mlbDebutDate: string
  batSide: BatSide29
  pitchHand: PitchHand29
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition29 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide29 {
  code: string
  description: string
}

export interface PitchHand29 {
  code: string
  description: string
}

export interface Id592206 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition30
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  nickName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide30
  pitchHand: PitchHand30
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition30 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide30 {
  code: string
  description: string
}

export interface PitchHand30 {
  code: string
  description: string
}

export interface Id605452 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition31
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  nickName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  mlbDebutDate: string
  batSide: BatSide31
  pitchHand: PitchHand31
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition31 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide31 {
  code: string
  description: string
}

export interface PitchHand31 {
  code: string
  description: string
}

export interface Id663767 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition32
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  mlbDebutDate: string
  batSide: BatSide32
  pitchHand: PitchHand32
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition32 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide32 {
  code: string
  description: string
}

export interface PitchHand32 {
  code: string
  description: string
}

export interface Id663647 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition33
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide33
  pitchHand: PitchHand33
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition33 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide33 {
  code: string
  description: string
}

export interface PitchHand33 {
  code: string
  description: string
}

export interface Id657571 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition34
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  mlbDebutDate: string
  batSide: BatSide34
  pitchHand: PitchHand34
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition34 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide34 {
  code: string
  description: string
}

export interface PitchHand34 {
  code: string
  description: string
}

export interface Id669707 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition35
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide35
  pitchHand: PitchHand35
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition35 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide35 {
  code: string
  description: string
}

export interface PitchHand35 {
  code: string
  description: string
}

export interface Id656605 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition36
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  mlbDebutDate: string
  batSide: BatSide36
  pitchHand: PitchHand36
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition36 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide36 {
  code: string
  description: string
}

export interface PitchHand36 {
  code: string
  description: string
}

export interface Id502054 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition37
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  nickName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide37
  pitchHand: PitchHand37
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition37 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide37 {
  code: string
  description: string
}

export interface PitchHand37 {
  code: string
  description: string
}

export interface Id681082 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition38
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide38
  pitchHand: PitchHand38
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition38 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide38 {
  code: string
  description: string
}

export interface PitchHand38 {
  code: string
  description: string
}

export interface Id457705 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition39
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  nickName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide39
  pitchHand: PitchHand39
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition39 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide39 {
  code: string
  description: string
}

export interface PitchHand39 {
  code: string
  description: string
}

export interface Id670059 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition40
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  mlbDebutDate: string
  batSide: BatSide40
  pitchHand: PitchHand40
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition40 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide40 {
  code: string
  description: string
}

export interface PitchHand40 {
  code: string
  description: string
}

export interface Id643396 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition41
  useName: string
  useLastName: string
  boxscoreName: string
  nickName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide41
  pitchHand: PitchHand41
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition41 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide41 {
  code: string
  description: string
}

export interface PitchHand41 {
  code: string
  description: string
}

export interface Id665561 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition42
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  nameMatrilineal: string
  isPlayer: boolean
  isVerified: boolean
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide42
  pitchHand: PitchHand42
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition42 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide42 {
  code: string
  description: string
}

export interface PitchHand42 {
  code: string
  description: string
}

export interface Id642701 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition43
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  nickName: string
  gender: string
  nameMatrilineal: string
  isPlayer: boolean
  isVerified: boolean
  mlbDebutDate: string
  batSide: BatSide43
  pitchHand: PitchHand43
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition43 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide43 {
  code: string
  description: string
}

export interface PitchHand43 {
  code: string
  description: string
}

export interface Id621381 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition44
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  nickName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide44
  pitchHand: PitchHand44
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition44 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide44 {
  code: string
  description: string
}

export interface PitchHand44 {
  code: string
  description: string
}

export interface Id624133 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition45
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide45
  pitchHand: PitchHand45
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition45 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide45 {
  code: string
  description: string
}

export interface PitchHand45 {
  code: string
  description: string
}

export interface Id680779 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition46
  useName: string
  useLastName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  mlbDebutDate: string
  batSide: BatSide46
  pitchHand: PitchHand46
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition46 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide46 {
  code: string
  description: string
}

export interface PitchHand46 {
  code: string
  description: string
}

export interface Id621383 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition47
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  mlbDebutDate: string
  batSide: BatSide47
  pitchHand: PitchHand47
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition47 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide47 {
  code: string
  description: string
}

export interface PitchHand47 {
  code: string
  description: string
}

export interface Id666214 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition48
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  mlbDebutDate: string
  batSide: BatSide48
  pitchHand: PitchHand48
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition48 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide48 {
  code: string
  description: string
}

export interface PitchHand48 {
  code: string
  description: string
}

export interface Id679032 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition49
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  gender: string
  nameMatrilineal: string
  isPlayer: boolean
  isVerified: boolean
  pronunciation: string
  mlbDebutDate: string
  batSide: BatSide49
  pitchHand: PitchHand49
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition49 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide49 {
  code: string
  description: string
}

export interface PitchHand49 {
  code: string
  description: string
}

export interface Id596146 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition50
  useName: string
  useLastName: string
  boxscoreName: string
  nickName: string
  gender: string
  nameMatrilineal: string
  isPlayer: boolean
  isVerified: boolean
  mlbDebutDate: string
  batSide: BatSide50
  pitchHand: PitchHand50
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition50 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide50 {
  code: string
  description: string
}

export interface PitchHand50 {
  code: string
  description: string
}

export interface Id607208 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthStateProvince: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition51
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  nickName: string
  gender: string
  isPlayer: boolean
  isVerified: boolean
  draftYear: number
  mlbDebutDate: string
  batSide: BatSide51
  pitchHand: PitchHand51
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition51 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide51 {
  code: string
  description: string
}

export interface PitchHand51 {
  code: string
  description: string
}

export interface Id614179 {
  id: number
  fullName: string
  link: string
  firstName: string
  lastName: string
  primaryNumber: string
  birthDate: string
  currentAge: number
  birthCity: string
  birthCountry: string
  height: string
  weight: number
  active: boolean
  primaryPosition: PrimaryPosition52
  useName: string
  useLastName: string
  middleName: string
  boxscoreName: string
  nickName: string
  gender: string
  nameMatrilineal: string
  isPlayer: boolean
  isVerified: boolean
  mlbDebutDate: string
  batSide: BatSide52
  pitchHand: PitchHand52
  nameFirstLast: string
  nameSlug: string
  firstLastName: string
  lastFirstName: string
  lastInitName: string
  initLastName: string
  fullFMLName: string
  fullLFMName: string
  strikeZoneTop: number
  strikeZoneBottom: number
}

export interface PrimaryPosition52 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface BatSide52 {
  code: string
  description: string
}

export interface PitchHand52 {
  code: string
  description: string
}

export interface Venue3 {
  id: number
  name: string
  link: string
  location: Location
  timeZone: TimeZone
  fieldInfo: FieldInfo
  active: boolean
  season: string
}

export interface Location {
  address1: string
  city: string
  state: string
  stateAbbrev: string
  postalCode: string
  defaultCoordinates: DefaultCoordinates
  azimuthAngle: number
  elevation: number
  country: string
  phone: string
}

export interface DefaultCoordinates {
  latitude: number
  longitude: number
}

export interface TimeZone {
  id: string
  offset: number
  offsetAtGameTime: number
  tz: string
}

export interface FieldInfo {
  capacity: number
  turfType: string
  roofType: string
  leftLine: number
  left: number
  leftCenter: number
  center: number
  rightCenter: number
  right: number
  rightLine: number
}

export interface OfficialVenue {
  id: number
  link: string
}

export interface Weather {
  condition: string
  temp: string
  wind: string
}

export interface GameInfo {
  attendance: number
  firstPitch: string
  gameDurationMinutes: number
}

export interface Review {
  hasChallenges: boolean
  away: Away2
  home: Home2
}

export interface Away2 {
  used: number
  remaining: number
}

export interface Home2 {
  used: number
  remaining: number
}

export interface Flags {
  noHitter: boolean
  perfectGame: boolean
  awayTeamNoHitter: boolean
  awayTeamPerfectGame: boolean
  homeTeamNoHitter: boolean
  homeTeamPerfectGame: boolean
}

export interface ProbablePitchers {
  away: Away3
  home: Home3
}

export interface Away3 {
  id: number
  fullName: string
  link: string
}

export interface Home3 {
  id: number
  fullName: string
  link: string
}

export interface OfficialScorer {
  id: number
  fullName: string
  link: string
}

export interface PrimaryDatacaster {
  id: number
  fullName: string
  link: string
}

export interface MoundVisits {
  away: Away4
  home: Home4
}

export interface Away4 {
  used: number
  remaining: number
}

export interface Home4 {
  used: number
  remaining: number
}

export interface LiveData {
  plays: Plays
  linescore: Linescore
  boxscore: Boxscore
  decisions: Decisions
  leaders: Leaders
}

export interface Plays {
  allPlays: AllPlay[]
  currentPlay: CurrentPlay
  scoringPlays: number[]
  playsByInning: PlaysByInning[]
}

export interface AllPlay {
  result: Result
  about: About
  count: Count
  matchup: Matchup
  pitchIndex: number[]
  actionIndex: number[]
  runnerIndex: number[]
  runners: Runner[]
  playEvents: PlayEvent[]
  playEndTime: string
  atBatIndex: number
}

export interface Result {
  type: string
  event: string
  eventType: string
  description: string
  rbi: number
  awayScore: number
  homeScore: number
  isOut: boolean
}

export interface About {
  atBatIndex: number
  halfInning: string
  isTopInning: boolean
  inning: number
  startTime: string
  endTime: string
  isComplete: boolean
  isScoringPlay: boolean
  hasReview: boolean
  hasOut: boolean
  captivatingIndex: number
}

export interface Count {
  balls: number
  strikes: number
  outs: number
}

export interface Matchup {
  batter: Batter
  batSide: BatSide53
  pitcher: Pitcher
  pitchHand: PitchHand53
  batterHotColdZones: BatterHotColdZone[]
  pitcherHotColdZones: any[]
  splits: Splits
  postOnFirst?: PostOnFirst
  postOnSecond?: PostOnSecond
  postOnThird?: PostOnThird
  batterHotColdZoneStats?: BatterHotColdZoneStats
}

export interface Batter {
  id: number
  fullName: string
  link: string
}

export interface BatSide53 {
  code: string
  description: string
}

export interface Pitcher {
  id: number
  fullName: string
  link: string
}

export interface PitchHand53 {
  code: string
  description: string
}

export interface BatterHotColdZone {
  zone: string
  color: string
  temp: string
  value: string
}

export interface Splits {
  batter: string
  pitcher: string
  menOnBase: string
}

export interface PostOnFirst {
  id: number
  fullName: string
  link: string
}

export interface PostOnSecond {
  id: number
  fullName: string
  link: string
}

export interface PostOnThird {
  id: number
  fullName: string
  link: string
}

export interface BatterHotColdZoneStats {
  stats: Stat[]
}

export interface Stat {
  type: Type
  group: Group
  exemptions: any[]
  splits: Split[]
}

export interface Type {
  displayName: string
}

export interface Group {
  displayName: string
}

export interface Split {
  stat: Stat2
}

export interface Stat2 {
  name: string
  zones: Zone[]
}

export interface Zone {
  zone: string
  color: string
  temp: string
  value: string
}

export interface Runner {
  movement: Movement
  details: Details
  credits: Credit[]
}

export interface Movement {
  originBase?: string
  start?: string
  end?: string
  outBase?: string
  isOut: boolean
  outNumber?: number
}

export interface Details {
  event: string
  eventType: string
  movementReason?: string
  runner: Runner2
  responsiblePitcher?: ResponsiblePitcher
  isScoringEvent: boolean
  rbi: boolean
  earned: boolean
  teamUnearned: boolean
  playIndex: number
}

export interface Runner2 {
  id: number
  fullName: string
  link: string
}

export interface ResponsiblePitcher {
  id: number
  link: string
}

export interface Credit {
  player: Player
  position: Position
  credit: string
}

export interface Player {
  id: number
  link: string
}

export interface Position {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface PlayEvent {
  details: Details2
  count: Count2
  index: number
  startTime: string
  endTime: string
  isPitch: boolean
  type: string
  player?: Player2
  pitchData?: PitchData
  playId?: string
  pitchNumber?: number
  hitData?: HitData
  actionPlayId?: string
  isBaseRunningPlay?: boolean
  isSubstitution?: boolean
  position?: Position2
}

export interface Details2 {
  description: string
  event?: string
  eventType?: string
  awayScore?: number
  homeScore?: number
  isScoringPlay?: boolean
  isOut: boolean
  hasReview: boolean
  call?: Call
  code?: string
  ballColor?: string
  trailColor?: string
  isInPlay?: boolean
  isStrike?: boolean
  isBall?: boolean
  type?: Type2
  runnerGoing?: boolean
  fromCatcher?: boolean
  disengagementNum?: number
}

export interface Call {
  code: string
  description: string
}

export interface Type2 {
  code: string
  description: string
}

export interface Count2 {
  balls: number
  strikes: number
  outs: number
}

export interface Player2 {
  id: number
  link: string
}

export interface PitchData {
  startSpeed: number
  endSpeed: number
  strikeZoneTop: number
  strikeZoneBottom: number
  coordinates: Coordinates
  breaks: Breaks
  zone: number
  typeConfidence: number
  plateTime: number
  extension: number
}

export interface Coordinates {
  aY: number
  aZ: number
  pfxX: number
  pfxZ: number
  pX: number
  pZ: number
  vX0: number
  vY0: number
  vZ0: number
  x: number
  y: number
  x0: number
  y0: number
  z0: number
  aX: number
}

export interface Breaks {
  breakAngle: number
  breakLength: number
  breakY: number
  breakVertical: number
  breakVerticalInduced: number
  breakHorizontal: number
  spinRate: number
  spinDirection: number
}

export interface HitData {
  launchSpeed?: number
  launchAngle?: number
  totalDistance?: number
  trajectory: string
  hardness: string
  location: string
  coordinates: Coordinates2
}

export interface Coordinates2 {
  coordX: number
  coordY: number
}

export interface Position2 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface CurrentPlay {
  result: Result2
  about: About2
  count: Count3
  matchup: Matchup2
  pitchIndex: number[]
  actionIndex: any[]
  runnerIndex: number[]
  runners: Runner3[]
  playEvents: PlayEvent2[]
  playEndTime: string
  atBatIndex: number
}

export interface Result2 {
  type: string
  event: string
  eventType: string
  description: string
  rbi: number
  awayScore: number
  homeScore: number
  isOut: boolean
}

export interface About2 {
  atBatIndex: number
  halfInning: string
  isTopInning: boolean
  inning: number
  startTime: string
  endTime: string
  isComplete: boolean
  isScoringPlay: boolean
  hasReview: boolean
  hasOut: boolean
  captivatingIndex: number
}

export interface Count3 {
  balls: number
  strikes: number
  outs: number
}

export interface Matchup2 {
  batter: Batter2
  batSide: BatSide54
  pitcher: Pitcher2
  pitchHand: PitchHand54
  batterHotColdZoneStats: BatterHotColdZoneStats2
  batterHotColdZones: BatterHotColdZone2[]
  pitcherHotColdZones: any[]
  splits: Splits2
}

export interface Batter2 {
  id: number
  fullName: string
  link: string
}

export interface BatSide54 {
  code: string
  description: string
}

export interface Pitcher2 {
  id: number
  fullName: string
  link: string
}

export interface PitchHand54 {
  code: string
  description: string
}

export interface BatterHotColdZoneStats2 {
  stats: Stat3[]
}

export interface Stat3 {
  type: Type3
  group: Group2
  exemptions: any[]
  splits: Split2[]
}

export interface Type3 {
  displayName: string
}

export interface Group2 {
  displayName: string
}

export interface Split2 {
  stat: Stat4
}

export interface Stat4 {
  name: string
  zones: Zone2[]
}

export interface Zone2 {
  zone: string
  color: string
  temp: string
  value: string
}

export interface BatterHotColdZone2 {
  zone: string
  color: string
  temp: string
  value: string
}

export interface Splits2 {
  batter: string
  pitcher: string
  menOnBase: string
}

export interface Runner3 {
  movement: Movement2
  details: Details3
  credits: Credit2[]
}

export interface Movement2 {
  originBase: any
  start: any
  end: any
  outBase: string
  isOut: boolean
  outNumber: number
}

export interface Details3 {
  event: string
  eventType: string
  movementReason: any
  runner: Runner4
  responsiblePitcher: any
  isScoringEvent: boolean
  rbi: boolean
  earned: boolean
  teamUnearned: boolean
  playIndex: number
}

export interface Runner4 {
  id: number
  fullName: string
  link: string
}

export interface Credit2 {
  player: Player3
  position: Position3
  credit: string
}

export interface Player3 {
  id: number
  link: string
}

export interface Position3 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface PlayEvent2 {
  details: Details4
  count: Count4
  pitchData?: PitchData2
  index: number
  playId?: string
  pitchNumber?: number
  startTime: string
  endTime: string
  isPitch: boolean
  type: string
  player?: Player4
}

export interface Details4 {
  call?: Call2
  description: string
  code?: string
  ballColor?: string
  trailColor?: string
  isInPlay?: boolean
  isStrike?: boolean
  isBall?: boolean
  type?: Type4
  isOut: boolean
  hasReview: boolean
  event?: string
  eventType?: string
  awayScore?: number
  homeScore?: number
  isScoringPlay?: boolean
}

export interface Call2 {
  code: string
  description: string
}

export interface Type4 {
  code: string
  description: string
}

export interface Count4 {
  balls: number
  strikes: number
  outs: number
}

export interface PitchData2 {
  startSpeed: number
  endSpeed: number
  strikeZoneTop: number
  strikeZoneBottom: number
  coordinates: Coordinates3
  breaks: Breaks2
  zone: number
  typeConfidence: number
  plateTime: number
  extension: number
}

export interface Coordinates3 {
  aY: number
  aZ: number
  pfxX: number
  pfxZ: number
  pX: number
  pZ: number
  vX0: number
  vY0: number
  vZ0: number
  x: number
  y: number
  x0: number
  y0: number
  z0: number
  aX: number
}

export interface Breaks2 {
  breakAngle: number
  breakLength: number
  breakY: number
  breakVertical: number
  breakVerticalInduced: number
  breakHorizontal: number
  spinRate: number
  spinDirection: number
}

export interface Player4 {
  id: number
  link: string
}

export interface PlaysByInning {
  startIndex: number
  endIndex: number
  top: number[]
  bottom: number[]
  hits: Hits
}

export interface Hits {
  away: Away5[]
  home: Home5[]
}

export interface Away5 {
  team: Team
  inning: number
  pitcher: Pitcher3
  batter: Batter3
  coordinates: Coordinates4
  type: string
  description: string
}

export interface Team {
  springLeague: SpringLeague3
  allStarStatus: string
  id: number
  name: string
  link: string
}

export interface SpringLeague3 {
  id: number
  name: string
  link: string
  abbreviation: string
}

export interface Pitcher3 {
  id: number
  fullName: string
  link: string
}

export interface Batter3 {
  id: number
  fullName: string
  link: string
}

export interface Coordinates4 {
  x: number
  y: number
}

export interface Home5 {
  team: Team2
  inning: number
  pitcher: Pitcher4
  batter: Batter4
  coordinates: Coordinates5
  type: string
  description: string
}

export interface Team2 {
  springLeague: SpringLeague4
  allStarStatus: string
  id: number
  name: string
  link: string
}

export interface SpringLeague4 {
  id: number
  name: string
  link: string
  abbreviation: string
}

export interface Pitcher4 {
  id: number
  fullName: string
  link: string
}

export interface Batter4 {
  id: number
  fullName: string
  link: string
}

export interface Coordinates5 {
  x: number
  y: number
}

export interface Linescore {
  currentInning: number
  currentInningOrdinal: string
  inningState: string
  inningHalf: string
  isTopInning: boolean
  scheduledInnings: number
  innings: Inning[]
  teams: Teams2
  defense: Defense
  offense: Offense
  balls: number
  strikes: number
  outs: number
}

export interface Inning {
  num: number
  ordinalNum: string
  home: Home6
  away: Away6
}

export interface Home6 {
  runs?: number
  hits: number
  errors: number
  leftOnBase: number
}

export interface Away6 {
  runs: number
  hits: number
  errors: number
  leftOnBase: number
}

export interface Teams2 {
  home: Home7
  away: Away7
}

export interface Home7 {
  runs: number
  hits: number
  errors: number
  leftOnBase: number
}

export interface Away7 {
  runs: number
  hits: number
  errors: number
  leftOnBase: number
}

export interface Defense {
  pitcher: Pitcher5
  catcher: Catcher
  first: First
  second: Second
  third: Third
  shortstop: Shortstop
  left: Left
  center: Center
  right: Right
  batter: Batter5
  onDeck: OnDeck
  inHole: InHole
  battingOrder: number
  team: Team3
}

export interface Pitcher5 {
  id: number
  fullName: string
  link: string
}

export interface Catcher {
  id: number
  fullName: string
  link: string
}

export interface First {
  id: number
  fullName: string
  link: string
}

export interface Second {
  id: number
  fullName: string
  link: string
}

export interface Third {
  id: number
  fullName: string
  link: string
}

export interface Shortstop {
  id: number
  fullName: string
  link: string
}

export interface Left {
  id: number
  fullName: string
  link: string
}

export interface Center {
  id: number
  fullName: string
  link: string
}

export interface Right {
  id: number
  fullName: string
  link: string
}

export interface Batter5 {
  id: number
  fullName: string
  link: string
}

export interface OnDeck {
  id: number
  fullName: string
  link: string
}

export interface InHole {
  id: number
  fullName: string
  link: string
}

export interface Team3 {
  id: number
  name: string
  link: string
}

export interface Offense {
  batter: Batter6
  onDeck: OnDeck2
  inHole: InHole2
  pitcher: Pitcher6
  battingOrder: number
  team: Team4
}

export interface Batter6 {
  id: number
  fullName: string
  link: string
}

export interface OnDeck2 {
  id: number
  fullName: string
  link: string
}

export interface InHole2 {
  id: number
  fullName: string
  link: string
}

export interface Pitcher6 {
  id: number
  fullName: string
  link: string
}

export interface Team4 {
  id: number
  name: string
  link: string
}

export interface Boxscore {
  teams: Teams3
  officials: Official[]
  info: Info3[]
  pitchingNotes: any[]
  topPerformers: TopPerformer[]
}

export interface Teams3 {
  away: Away8
  home: Home8
}

export interface Away8 {
  team: Team5
  teamStats: TeamStats
  players: Players2
  batters: number[]
  pitchers: number[]
  bench: number[]
  bullpen: number[]
  battingOrder: number[]
  info: Info[]
  note: any[]
}

export interface Team5 {
  springLeague: SpringLeague5
  allStarStatus: string
  id: number
  name: string
  link: string
}

export interface SpringLeague5 {
  id: number
  name: string
  link: string
  abbreviation: string
}

export interface TeamStats {
  batting: Batting
  pitching: Pitching
  fielding: Fielding
}

export interface Batting {
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching {
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  saveOpportunities: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  pitchesPerInning: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  passedBall: number
  pickoffs: number
}

export interface Players2 {
  ID672744: Id6727442
  ID624428: Id6244282
  ID694973: Id6949732
  ID669256: Id6692562
  ID687462: Id6874622
  ID663698: Id6636982
  ID668804: Id6688042
  ID665833: Id6658332
  ID663432: Id6634322
  ID663767: Id6637672
  ID657571: Id6575712
  ID663647: Id6636472
  ID669707: Id6697072
  ID656605: Id6566052
  ID502054: Id5020542
  ID457705: Id4577052
  ID670059: Id6700592
  ID643396: Id6433962
  ID669387: Id6693872
  ID621366: Id6213662
  ID642701: Id6427012
  ID680779: Id6807792
  ID666214: Id6662142
  ID571760: Id5717602
  ID663559: Id6635592
  ID670280: Id6702802
}

export interface Id6727442 {
  person: Person
  jerseyNumber: string
  position: Position4
  status: Status2
  parentTeamId: number
  battingOrder: string
  stats: Stats
  seasonStats: SeasonStats
  gameStatus: GameStatus
  allPositions: AllPosition[]
}

export interface Person {
  id: number
  fullName: string
  link: string
}

export interface Position4 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status2 {
  code: string
  description: string
}

export interface Stats {
  batting: Batting2
  pitching: Pitching2
  fielding: Fielding2
}

export interface Batting2 {
  summary: string
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching2 {}

export interface Fielding2 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats {
  batting: Batting3
  pitching: Pitching3
  fielding: Fielding3
}

export interface Batting3 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching3 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding3 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id6244282 {
  person: Person2
  jerseyNumber: string
  position: Position5
  status: Status3
  parentTeamId: number
  battingOrder: string
  stats: Stats2
  seasonStats: SeasonStats2
  gameStatus: GameStatus2
  allPositions: AllPosition2[]
}

export interface Person2 {
  id: number
  fullName: string
  link: string
}

export interface Position5 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status3 {
  code: string
  description: string
}

export interface Stats2 {
  batting: Batting4
  pitching: Pitching4
  fielding: Fielding4
}

export interface Batting4 {
  summary: string
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching4 {}

export interface Fielding4 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats2 {
  batting: Batting5
  pitching: Pitching5
  fielding: Fielding5
}

export interface Batting5 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching5 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding5 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus2 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition2 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id6949732 {
  person: Person3
  jerseyNumber: string
  position: Position6
  status: Status4
  parentTeamId: number
  stats: Stats3
  seasonStats: SeasonStats3
  gameStatus: GameStatus3
  allPositions: AllPosition3[]
}

export interface Person3 {
  id: number
  fullName: string
  link: string
}

export interface Position6 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status4 {
  code: string
  description: string
}

export interface Stats3 {
  batting: Batting6
  pitching: Pitching6
  fielding: Fielding6
}

export interface Batting6 {}

export interface Pitching6 {
  note: string
  summary: string
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  rbi: number
  gamesFinished: number
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding6 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats3 {
  batting: Batting7
  pitching: Pitching7
  fielding: Fielding7
}

export interface Batting7 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching7 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding7 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus3 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition3 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id6692562 {
  person: Person4
  jerseyNumber: string
  position: Position7
  status: Status5
  parentTeamId: number
  stats: Stats4
  seasonStats: SeasonStats4
  gameStatus: GameStatus4
}

export interface Person4 {
  id: number
  fullName: string
  link: string
}

export interface Position7 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status5 {
  code: string
  description: string
}

export interface Stats4 {
  batting: Batting8
  pitching: Pitching8
  fielding: Fielding8
}

export interface Batting8 {}

export interface Pitching8 {}

export interface Fielding8 {}

export interface SeasonStats4 {
  batting: Batting9
  pitching: Pitching9
  fielding: Fielding9
}

export interface Batting9 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching9 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding9 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus4 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id6874622 {
  person: Person5
  jerseyNumber: string
  position: Position8
  status: Status6
  parentTeamId: number
  battingOrder: string
  stats: Stats5
  seasonStats: SeasonStats5
  gameStatus: GameStatus5
  allPositions: AllPosition4[]
}

export interface Person5 {
  id: number
  fullName: string
  link: string
}

export interface Position8 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status6 {
  code: string
  description: string
}

export interface Stats5 {
  batting: Batting10
  pitching: Pitching10
  fielding: Fielding10
}

export interface Batting10 {
  summary: string
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching10 {}

export interface Fielding10 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats5 {
  batting: Batting11
  pitching: Pitching11
  fielding: Fielding11
}

export interface Batting11 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching11 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding11 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus5 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition4 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id6636982 {
  person: Person6
  jerseyNumber: string
  position: Position9
  status: Status7
  parentTeamId: number
  stats: Stats6
  seasonStats: SeasonStats6
  gameStatus: GameStatus6
}

export interface Person6 {
  id: number
  fullName: string
  link: string
}

export interface Position9 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status7 {
  code: string
  description: string
}

export interface Stats6 {
  batting: Batting12
  pitching: Pitching12
  fielding: Fielding12
}

export interface Batting12 {}

export interface Pitching12 {}

export interface Fielding12 {}

export interface SeasonStats6 {
  batting: Batting13
  pitching: Pitching13
  fielding: Fielding13
}

export interface Batting13 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching13 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding13 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus6 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id6688042 {
  person: Person7
  jerseyNumber: string
  position: Position10
  status: Status8
  parentTeamId: number
  battingOrder: string
  stats: Stats7
  seasonStats: SeasonStats7
  gameStatus: GameStatus7
  allPositions: AllPosition5[]
}

export interface Person7 {
  id: number
  fullName: string
  link: string
}

export interface Position10 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status8 {
  code: string
  description: string
}

export interface Stats7 {
  batting: Batting14
  pitching: Pitching14
  fielding: Fielding14
}

export interface Batting14 {
  summary: string
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching14 {}

export interface Fielding14 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats7 {
  batting: Batting15
  pitching: Pitching15
  fielding: Fielding15
}

export interface Batting15 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching15 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding15 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus7 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition5 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id6658332 {
  person: Person8
  jerseyNumber: string
  position: Position11
  status: Status9
  parentTeamId: number
  battingOrder: string
  stats: Stats8
  seasonStats: SeasonStats8
  gameStatus: GameStatus8
  allPositions: AllPosition6[]
}

export interface Person8 {
  id: number
  fullName: string
  link: string
}

export interface Position11 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status9 {
  code: string
  description: string
}

export interface Stats8 {
  batting: Batting16
  pitching: Pitching16
  fielding: Fielding16
}

export interface Batting16 {
  summary: string
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching16 {}

export interface Fielding16 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats8 {
  batting: Batting17
  pitching: Pitching17
  fielding: Fielding17
}

export interface Batting17 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching17 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding17 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus8 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition6 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id6634322 {
  person: Person9
  jerseyNumber: string
  position: Position12
  status: Status10
  parentTeamId: number
  stats: Stats9
  seasonStats: SeasonStats9
  gameStatus: GameStatus9
}

export interface Person9 {
  id: number
  fullName: string
  link: string
}

export interface Position12 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status10 {
  code: string
  description: string
}

export interface Stats9 {
  batting: Batting18
  pitching: Pitching18
  fielding: Fielding18
}

export interface Batting18 {}

export interface Pitching18 {}

export interface Fielding18 {}

export interface SeasonStats9 {
  batting: Batting19
  pitching: Pitching19
  fielding: Fielding19
}

export interface Batting19 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching19 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding19 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus9 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id6637672 {
  person: Person10
  jerseyNumber: string
  position: Position13
  status: Status11
  parentTeamId: number
  stats: Stats10
  seasonStats: SeasonStats10
  gameStatus: GameStatus10
}

export interface Person10 {
  id: number
  fullName: string
  link: string
}

export interface Position13 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status11 {
  code: string
  description: string
}

export interface Stats10 {
  batting: Batting20
  pitching: Pitching20
  fielding: Fielding20
}

export interface Batting20 {}

export interface Pitching20 {}

export interface Fielding20 {}

export interface SeasonStats10 {
  batting: Batting21
  pitching: Pitching21
  fielding: Fielding21
}

export interface Batting21 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching21 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding21 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus10 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id6575712 {
  person: Person11
  jerseyNumber: string
  position: Position14
  status: Status12
  parentTeamId: number
  stats: Stats11
  seasonStats: SeasonStats11
  gameStatus: GameStatus11
}

export interface Person11 {
  id: number
  fullName: string
  link: string
}

export interface Position14 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status12 {
  code: string
  description: string
}

export interface Stats11 {
  batting: Batting22
  pitching: Pitching22
  fielding: Fielding22
}

export interface Batting22 {}

export interface Pitching22 {}

export interface Fielding22 {}

export interface SeasonStats11 {
  batting: Batting23
  pitching: Pitching23
  fielding: Fielding23
}

export interface Batting23 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching23 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding23 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus11 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id6636472 {
  person: Person12
  jerseyNumber: string
  position: Position15
  status: Status13
  parentTeamId: number
  battingOrder: string
  stats: Stats12
  seasonStats: SeasonStats12
  gameStatus: GameStatus12
  allPositions: AllPosition7[]
}

export interface Person12 {
  id: number
  fullName: string
  link: string
}

export interface Position15 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status13 {
  code: string
  description: string
}

export interface Stats12 {
  batting: Batting24
  pitching: Pitching24
  fielding: Fielding24
}

export interface Batting24 {
  summary: string
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching24 {}

export interface Fielding24 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats12 {
  batting: Batting25
  pitching: Pitching25
  fielding: Fielding25
}

export interface Batting25 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching25 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding25 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus12 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition7 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id6697072 {
  person: Person13
  jerseyNumber: string
  position: Position16
  status: Status14
  parentTeamId: number
  stats: Stats13
  seasonStats: SeasonStats13
  gameStatus: GameStatus13
}

export interface Person13 {
  id: number
  fullName: string
  link: string
}

export interface Position16 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status14 {
  code: string
  description: string
}

export interface Stats13 {
  batting: Batting26
  pitching: Pitching26
  fielding: Fielding26
}

export interface Batting26 {}

export interface Pitching26 {}

export interface Fielding26 {}

export interface SeasonStats13 {
  batting: Batting27
  pitching: Pitching27
  fielding: Fielding27
}

export interface Batting27 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching27 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding27 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus13 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id6566052 {
  person: Person14
  jerseyNumber: string
  position: Position17
  status: Status15
  parentTeamId: number
  stats: Stats14
  seasonStats: SeasonStats14
  gameStatus: GameStatus14
}

export interface Person14 {
  id: number
  fullName: string
  link: string
}

export interface Position17 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status15 {
  code: string
  description: string
}

export interface Stats14 {
  batting: Batting28
  pitching: Pitching28
  fielding: Fielding28
}

export interface Batting28 {}

export interface Pitching28 {}

export interface Fielding28 {}

export interface SeasonStats14 {
  batting: Batting29
  pitching: Pitching29
  fielding: Fielding29
}

export interface Batting29 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching29 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding29 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus14 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id5020542 {
  person: Person15
  jerseyNumber: string
  position: Position18
  status: Status16
  parentTeamId: number
  stats: Stats15
  seasonStats: SeasonStats15
  gameStatus: GameStatus15
}

export interface Person15 {
  id: number
  fullName: string
  link: string
}

export interface Position18 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status16 {
  code: string
  description: string
}

export interface Stats15 {
  batting: Batting30
  pitching: Pitching30
  fielding: Fielding30
}

export interface Batting30 {}

export interface Pitching30 {}

export interface Fielding30 {}

export interface SeasonStats15 {
  batting: Batting31
  pitching: Pitching31
  fielding: Fielding31
}

export interface Batting31 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching31 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding31 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus15 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id4577052 {
  person: Person16
  jerseyNumber: string
  position: Position19
  status: Status17
  parentTeamId: number
  battingOrder: string
  stats: Stats16
  seasonStats: SeasonStats16
  gameStatus: GameStatus16
  allPositions: AllPosition8[]
}

export interface Person16 {
  id: number
  fullName: string
  link: string
}

export interface Position19 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status17 {
  code: string
  description: string
}

export interface Stats16 {
  batting: Batting32
  pitching: Pitching32
  fielding: Fielding32
}

export interface Batting32 {
  summary: string
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching32 {}

export interface Fielding32 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats16 {
  batting: Batting33
  pitching: Pitching33
  fielding: Fielding33
}

export interface Batting33 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching33 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding33 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus16 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition8 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id6700592 {
  person: Person17
  jerseyNumber: string
  position: Position20
  status: Status18
  parentTeamId: number
  stats: Stats17
  seasonStats: SeasonStats17
  gameStatus: GameStatus17
}

export interface Person17 {
  id: number
  fullName: string
  link: string
}

export interface Position20 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status18 {
  code: string
  description: string
}

export interface Stats17 {
  batting: Batting34
  pitching: Pitching34
  fielding: Fielding34
}

export interface Batting34 {}

export interface Pitching34 {}

export interface Fielding34 {}

export interface SeasonStats17 {
  batting: Batting35
  pitching: Pitching35
  fielding: Fielding35
}

export interface Batting35 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching35 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding35 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus17 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id6433962 {
  person: Person18
  jerseyNumber: string
  position: Position21
  status: Status19
  parentTeamId: number
  battingOrder: string
  stats: Stats18
  seasonStats: SeasonStats18
  gameStatus: GameStatus18
  allPositions: AllPosition9[]
}

export interface Person18 {
  id: number
  fullName: string
  link: string
}

export interface Position21 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status19 {
  code: string
  description: string
}

export interface Stats18 {
  batting: Batting36
  pitching: Pitching36
  fielding: Fielding36
}

export interface Batting36 {
  summary: string
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching36 {}

export interface Fielding36 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats18 {
  batting: Batting37
  pitching: Pitching37
  fielding: Fielding37
}

export interface Batting37 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching37 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding37 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus18 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition9 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id6693872 {
  person: Person19
  jerseyNumber: string
  position: Position22
  status: Status20
  parentTeamId: number
  stats: Stats19
  seasonStats: SeasonStats19
  gameStatus: GameStatus19
}

export interface Person19 {
  id: number
  fullName: string
  link: string
}

export interface Position22 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status20 {
  code: string
  description: string
}

export interface Stats19 {
  batting: Batting38
  pitching: Pitching38
  fielding: Fielding38
}

export interface Batting38 {}

export interface Pitching38 {}

export interface Fielding38 {}

export interface SeasonStats19 {
  batting: Batting39
  pitching: Pitching39
  fielding: Fielding39
}

export interface Batting39 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching39 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding39 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus19 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id6213662 {
  person: Person20
  jerseyNumber: string
  position: Position23
  status: Status21
  parentTeamId: number
  stats: Stats20
  seasonStats: SeasonStats20
  gameStatus: GameStatus20
}

export interface Person20 {
  id: number
  fullName: string
  link: string
}

export interface Position23 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status21 {
  code: string
  description: string
}

export interface Stats20 {
  batting: Batting40
  pitching: Pitching40
  fielding: Fielding40
}

export interface Batting40 {}

export interface Pitching40 {}

export interface Fielding40 {}

export interface SeasonStats20 {
  batting: Batting41
  pitching: Pitching41
  fielding: Fielding41
}

export interface Batting41 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching41 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding41 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus20 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id6427012 {
  person: Person21
  jerseyNumber: string
  position: Position24
  status: Status22
  parentTeamId: number
  stats: Stats21
  seasonStats: SeasonStats21
  gameStatus: GameStatus21
}

export interface Person21 {
  id: number
  fullName: string
  link: string
}

export interface Position24 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status22 {
  code: string
  description: string
}

export interface Stats21 {
  batting: Batting42
  pitching: Pitching42
  fielding: Fielding42
}

export interface Batting42 {}

export interface Pitching42 {}

export interface Fielding42 {}

export interface SeasonStats21 {
  batting: Batting43
  pitching: Pitching43
  fielding: Fielding43
}

export interface Batting43 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching43 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding43 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus21 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id6807792 {
  person: Person22
  jerseyNumber: string
  position: Position25
  status: Status23
  parentTeamId: number
  battingOrder: string
  stats: Stats22
  seasonStats: SeasonStats22
  gameStatus: GameStatus22
  allPositions: AllPosition10[]
}

export interface Person22 {
  id: number
  fullName: string
  link: string
}

export interface Position25 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status23 {
  code: string
  description: string
}

export interface Stats22 {
  batting: Batting44
  pitching: Pitching44
  fielding: Fielding44
}

export interface Batting44 {
  summary: string
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching44 {}

export interface Fielding44 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats22 {
  batting: Batting45
  pitching: Pitching45
  fielding: Fielding45
}

export interface Batting45 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching45 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding45 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus22 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition10 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id6662142 {
  person: Person23
  jerseyNumber: string
  position: Position26
  status: Status24
  parentTeamId: number
  stats: Stats23
  seasonStats: SeasonStats23
  gameStatus: GameStatus23
}

export interface Person23 {
  id: number
  fullName: string
  link: string
}

export interface Position26 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status24 {
  code: string
  description: string
}

export interface Stats23 {
  batting: Batting46
  pitching: Pitching46
  fielding: Fielding46
}

export interface Batting46 {}

export interface Pitching46 {}

export interface Fielding46 {}

export interface SeasonStats23 {
  batting: Batting47
  pitching: Pitching47
  fielding: Fielding47
}

export interface Batting47 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching47 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding47 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus23 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id5717602 {
  person: Person24
  jerseyNumber: string
  position: Position27
  status: Status25
  parentTeamId: number
  stats: Stats24
  seasonStats: SeasonStats24
  gameStatus: GameStatus24
}

export interface Person24 {
  id: number
  fullName: string
  link: string
}

export interface Position27 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status25 {
  code: string
  description: string
}

export interface Stats24 {
  batting: Batting48
  pitching: Pitching48
  fielding: Fielding48
}

export interface Batting48 {}

export interface Pitching48 {}

export interface Fielding48 {}

export interface SeasonStats24 {
  batting: Batting49
  pitching: Pitching49
  fielding: Fielding49
}

export interface Batting49 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching49 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding49 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus24 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id6635592 {
  person: Person25
  jerseyNumber: string
  position: Position28
  status: Status26
  parentTeamId: number
  stats: Stats25
  seasonStats: SeasonStats25
  gameStatus: GameStatus25
}

export interface Person25 {
  id: number
  fullName: string
  link: string
}

export interface Position28 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status26 {
  code: string
  description: string
}

export interface Stats25 {
  batting: Batting50
  pitching: Pitching50
  fielding: Fielding50
}

export interface Batting50 {}

export interface Pitching50 {}

export interface Fielding50 {}

export interface SeasonStats25 {
  batting: Batting51
  pitching: Pitching51
  fielding: Fielding51
}

export interface Batting51 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching51 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding51 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus25 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id6702802 {
  person: Person26
  jerseyNumber: string
  position: Position29
  status: Status27
  parentTeamId: number
  stats: Stats26
  seasonStats: SeasonStats26
  gameStatus: GameStatus26
}

export interface Person26 {
  id: number
  fullName: string
  link: string
}

export interface Position29 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status27 {
  code: string
  description: string
}

export interface Stats26 {
  batting: Batting52
  pitching: Pitching52
  fielding: Fielding52
}

export interface Batting52 {}

export interface Pitching52 {}

export interface Fielding52 {}

export interface SeasonStats26 {
  batting: Batting53
  pitching: Pitching53
  fielding: Fielding53
}

export interface Batting53 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching53 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding53 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus26 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Info {
  title: string
  fieldList: FieldList[]
}

export interface FieldList {
  label: string
  value: string
}

export interface Home8 {
  team: Team6
  teamStats: TeamStats2
  players: Players3
  batters: number[]
  pitchers: number[]
  bench: number[]
  bullpen: number[]
  battingOrder: number[]
  info: Info2[]
  note: any[]
}

export interface Team6 {
  springLeague: SpringLeague6
  allStarStatus: string
  id: number
  name: string
  link: string
}

export interface SpringLeague6 {
  id: number
  name: string
  link: string
  abbreviation: string
}

export interface TeamStats2 {
  batting: Batting54
  pitching: Pitching54
  fielding: Fielding54
}

export interface Batting54 {
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching54 {
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  saveOpportunities: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  pitchesPerInning: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding54 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  passedBall: number
  pickoffs: number
}

export interface Players3 {
  ID669016: Id6690162
  ID666200: Id6662002
  ID650911: Id6509112
  ID547180: Id5471802
  ID592663: Id5926632
  ID554430: Id5544302
  ID624641: Id6246412
  ID642215: Id6422152
  ID689147: Id6891472
  ID592206: Id5922062
  ID664761: Id6647612
  ID605452: Id6054522
  ID681082: Id6810822
  ID656941: Id6569412
  ID672578: Id6725782
  ID592836: Id5928362
  ID665561: Id6655612
  ID621381: Id6213812
  ID624133: Id6241332
  ID621383: Id6213832
  ID596146: Id5961462
  ID679032: Id6790322
  ID605447: Id6054472
  ID690953: Id6909532
  ID607208: Id6072082
  ID614179: Id6141792
}

export interface Id6690162 {
  person: Person27
  jerseyNumber: string
  position: Position30
  status: Status28
  parentTeamId: number
  battingOrder: string
  stats: Stats27
  seasonStats: SeasonStats27
  gameStatus: GameStatus27
  allPositions: AllPosition11[]
}

export interface Person27 {
  id: number
  fullName: string
  link: string
}

export interface Position30 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status28 {
  code: string
  description: string
}

export interface Stats27 {
  batting: Batting55
  pitching: Pitching55
  fielding: Fielding55
}

export interface Batting55 {
  summary: string
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching55 {}

export interface Fielding55 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats27 {
  batting: Batting56
  pitching: Pitching56
  fielding: Fielding56
}

export interface Batting56 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching56 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding56 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus27 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition11 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id6662002 {
  person: Person28
  jerseyNumber: string
  position: Position31
  status: Status29
  parentTeamId: number
  stats: Stats28
  seasonStats: SeasonStats28
  gameStatus: GameStatus28
}

export interface Person28 {
  id: number
  fullName: string
  link: string
}

export interface Position31 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status29 {
  code: string
  description: string
}

export interface Stats28 {
  batting: Batting57
  pitching: Pitching57
  fielding: Fielding57
}

export interface Batting57 {}

export interface Pitching57 {}

export interface Fielding57 {}

export interface SeasonStats28 {
  batting: Batting58
  pitching: Pitching58
  fielding: Fielding58
}

export interface Batting58 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching58 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding58 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus28 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id6509112 {
  person: Person29
  jerseyNumber: string
  position: Position32
  status: Status30
  parentTeamId: number
  stats: Stats29
  seasonStats: SeasonStats29
  gameStatus: GameStatus29
}

export interface Person29 {
  id: number
  fullName: string
  link: string
}

export interface Position32 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status30 {
  code: string
  description: string
}

export interface Stats29 {
  batting: Batting59
  pitching: Pitching59
  fielding: Fielding59
}

export interface Batting59 {}

export interface Pitching59 {}

export interface Fielding59 {}

export interface SeasonStats29 {
  batting: Batting60
  pitching: Pitching60
  fielding: Fielding60
}

export interface Batting60 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching60 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding60 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus29 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id5471802 {
  person: Person30
  jerseyNumber: string
  position: Position33
  status: Status31
  parentTeamId: number
  battingOrder: string
  stats: Stats30
  seasonStats: SeasonStats30
  gameStatus: GameStatus30
  allPositions: AllPosition12[]
}

export interface Person30 {
  id: number
  fullName: string
  link: string
}

export interface Position33 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status31 {
  code: string
  description: string
}

export interface Stats30 {
  batting: Batting61
  pitching: Pitching61
  fielding: Fielding61
}

export interface Batting61 {
  summary: string
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching61 {}

export interface Fielding61 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats30 {
  batting: Batting62
  pitching: Pitching62
  fielding: Fielding62
}

export interface Batting62 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching62 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding62 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus30 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition12 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id5926632 {
  person: Person31
  jerseyNumber: string
  position: Position34
  status: Status32
  parentTeamId: number
  stats: Stats31
  seasonStats: SeasonStats31
  gameStatus: GameStatus31
}

export interface Person31 {
  id: number
  fullName: string
  link: string
}

export interface Position34 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status32 {
  code: string
  description: string
}

export interface Stats31 {
  batting: Batting63
  pitching: Pitching63
  fielding: Fielding63
}

export interface Batting63 {}

export interface Pitching63 {}

export interface Fielding63 {}

export interface SeasonStats31 {
  batting: Batting64
  pitching: Pitching64
  fielding: Fielding64
}

export interface Batting64 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching64 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding64 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus31 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id5544302 {
  person: Person32
  jerseyNumber: string
  position: Position35
  status: Status33
  parentTeamId: number
  stats: Stats32
  seasonStats: SeasonStats32
  gameStatus: GameStatus32
}

export interface Person32 {
  id: number
  fullName: string
  link: string
}

export interface Position35 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status33 {
  code: string
  description: string
}

export interface Stats32 {
  batting: Batting65
  pitching: Pitching65
  fielding: Fielding65
}

export interface Batting65 {}

export interface Pitching65 {}

export interface Fielding65 {}

export interface SeasonStats32 {
  batting: Batting66
  pitching: Pitching66
  fielding: Fielding66
}

export interface Batting66 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching66 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding66 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus32 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id6246412 {
  person: Person33
  jerseyNumber: string
  position: Position36
  status: Status34
  parentTeamId: number
  stats: Stats33
  seasonStats: SeasonStats33
  gameStatus: GameStatus33
}

export interface Person33 {
  id: number
  fullName: string
  link: string
}

export interface Position36 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status34 {
  code: string
  description: string
}

export interface Stats33 {
  batting: Batting67
  pitching: Pitching67
  fielding: Fielding67
}

export interface Batting67 {}

export interface Pitching67 {}

export interface Fielding67 {}

export interface SeasonStats33 {
  batting: Batting68
  pitching: Pitching68
  fielding: Fielding68
}

export interface Batting68 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching68 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding68 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus33 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id6422152 {
  person: Person34
  jerseyNumber: string
  position: Position37
  status: Status35
  parentTeamId: number
  stats: Stats34
  seasonStats: SeasonStats34
  gameStatus: GameStatus34
}

export interface Person34 {
  id: number
  fullName: string
  link: string
}

export interface Position37 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status35 {
  code: string
  description: string
}

export interface Stats34 {
  batting: Batting69
  pitching: Pitching69
  fielding: Fielding69
}

export interface Batting69 {}

export interface Pitching69 {}

export interface Fielding69 {}

export interface SeasonStats34 {
  batting: Batting70
  pitching: Pitching70
  fielding: Fielding70
}

export interface Batting70 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching70 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding70 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus34 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id6891472 {
  person: Person35
  jerseyNumber: string
  position: Position38
  status: Status36
  parentTeamId: number
  stats: Stats35
  seasonStats: SeasonStats35
  gameStatus: GameStatus35
  allPositions: AllPosition13[]
}

export interface Person35 {
  id: number
  fullName: string
  link: string
}

export interface Position38 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status36 {
  code: string
  description: string
}

export interface Stats35 {
  batting: Batting71
  pitching: Pitching71
  fielding: Fielding71
}

export interface Batting71 {}

export interface Pitching71 {
  note: string
  summary: string
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  rbi: number
  gamesFinished: number
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding71 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats35 {
  batting: Batting72
  pitching: Pitching72
  fielding: Fielding72
}

export interface Batting72 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching72 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding72 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus35 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition13 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id5922062 {
  person: Person36
  jerseyNumber: string
  position: Position39
  status: Status37
  parentTeamId: number
  battingOrder: string
  stats: Stats36
  seasonStats: SeasonStats36
  gameStatus: GameStatus36
  allPositions: AllPosition14[]
}

export interface Person36 {
  id: number
  fullName: string
  link: string
}

export interface Position39 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status37 {
  code: string
  description: string
}

export interface Stats36 {
  batting: Batting73
  pitching: Pitching73
  fielding: Fielding73
}

export interface Batting73 {
  summary: string
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching73 {}

export interface Fielding73 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats36 {
  batting: Batting74
  pitching: Pitching74
  fielding: Fielding74
}

export interface Batting74 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching74 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding74 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus36 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition14 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id6647612 {
  person: Person37
  jerseyNumber: string
  position: Position40
  status: Status38
  parentTeamId: number
  battingOrder: string
  stats: Stats37
  seasonStats: SeasonStats37
  gameStatus: GameStatus37
  allPositions: AllPosition15[]
}

export interface Person37 {
  id: number
  fullName: string
  link: string
}

export interface Position40 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status38 {
  code: string
  description: string
}

export interface Stats37 {
  batting: Batting75
  pitching: Pitching75
  fielding: Fielding75
}

export interface Batting75 {
  summary: string
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching75 {}

export interface Fielding75 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats37 {
  batting: Batting76
  pitching: Pitching76
  fielding: Fielding76
}

export interface Batting76 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching76 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding76 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus37 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition15 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id6054522 {
  person: Person38
  jerseyNumber: string
  position: Position41
  status: Status39
  parentTeamId: number
  stats: Stats38
  seasonStats: SeasonStats38
  gameStatus: GameStatus38
}

export interface Person38 {
  id: number
  fullName: string
  link: string
}

export interface Position41 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status39 {
  code: string
  description: string
}

export interface Stats38 {
  batting: Batting77
  pitching: Pitching77
  fielding: Fielding77
}

export interface Batting77 {}

export interface Pitching77 {}

export interface Fielding77 {}

export interface SeasonStats38 {
  batting: Batting78
  pitching: Pitching78
  fielding: Fielding78
}

export interface Batting78 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching78 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding78 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus38 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id6810822 {
  person: Person39
  jerseyNumber: string
  position: Position42
  status: Status40
  parentTeamId: number
  battingOrder: string
  stats: Stats39
  seasonStats: SeasonStats39
  gameStatus: GameStatus39
  allPositions: AllPosition16[]
}

export interface Person39 {
  id: number
  fullName: string
  link: string
}

export interface Position42 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status40 {
  code: string
  description: string
}

export interface Stats39 {
  batting: Batting79
  pitching: Pitching79
  fielding: Fielding79
}

export interface Batting79 {
  summary: string
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching79 {}

export interface Fielding79 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats39 {
  batting: Batting80
  pitching: Pitching80
  fielding: Fielding80
}

export interface Batting80 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching80 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding80 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus39 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition16 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id6569412 {
  person: Person40
  jerseyNumber: string
  position: Position43
  status: Status41
  parentTeamId: number
  battingOrder: string
  stats: Stats40
  seasonStats: SeasonStats40
  gameStatus: GameStatus40
  allPositions: AllPosition17[]
}

export interface Person40 {
  id: number
  fullName: string
  link: string
}

export interface Position43 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status41 {
  code: string
  description: string
}

export interface Stats40 {
  batting: Batting81
  pitching: Pitching81
  fielding: Fielding81
}

export interface Batting81 {
  summary: string
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching81 {}

export interface Fielding81 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats40 {
  batting: Batting82
  pitching: Pitching82
  fielding: Fielding82
}

export interface Batting82 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching82 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding82 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus40 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition17 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id6725782 {
  person: Person41
  jerseyNumber: string
  position: Position44
  status: Status42
  parentTeamId: number
  stats: Stats41
  seasonStats: SeasonStats41
  gameStatus: GameStatus41
}

export interface Person41 {
  id: number
  fullName: string
  link: string
}

export interface Position44 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status42 {
  code: string
  description: string
}

export interface Stats41 {
  batting: Batting83
  pitching: Pitching83
  fielding: Fielding83
}

export interface Batting83 {}

export interface Pitching83 {}

export interface Fielding83 {}

export interface SeasonStats41 {
  batting: Batting84
  pitching: Pitching84
  fielding: Fielding84
}

export interface Batting84 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching84 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding84 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus41 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id5928362 {
  person: Person42
  jerseyNumber: string
  position: Position45
  status: Status43
  parentTeamId: number
  stats: Stats42
  seasonStats: SeasonStats42
  gameStatus: GameStatus42
}

export interface Person42 {
  id: number
  fullName: string
  link: string
}

export interface Position45 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status43 {
  code: string
  description: string
}

export interface Stats42 {
  batting: Batting85
  pitching: Pitching85
  fielding: Fielding85
}

export interface Batting85 {}

export interface Pitching85 {}

export interface Fielding85 {}

export interface SeasonStats42 {
  batting: Batting86
  pitching: Pitching86
  fielding: Fielding86
}

export interface Batting86 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching86 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding86 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus42 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id6655612 {
  person: Person43
  jerseyNumber: string
  position: Position46
  status: Status44
  parentTeamId: number
  battingOrder: string
  stats: Stats43
  seasonStats: SeasonStats43
  gameStatus: GameStatus43
  allPositions: AllPosition18[]
}

export interface Person43 {
  id: number
  fullName: string
  link: string
}

export interface Position46 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status44 {
  code: string
  description: string
}

export interface Stats43 {
  batting: Batting87
  pitching: Pitching87
  fielding: Fielding87
}

export interface Batting87 {
  summary: string
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching87 {}

export interface Fielding87 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats43 {
  batting: Batting88
  pitching: Pitching88
  fielding: Fielding88
}

export interface Batting88 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching88 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding88 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus43 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition18 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id6213812 {
  person: Person44
  jerseyNumber: string
  position: Position47
  status: Status45
  parentTeamId: number
  stats: Stats44
  seasonStats: SeasonStats44
  gameStatus: GameStatus44
  allPositions: AllPosition19[]
}

export interface Person44 {
  id: number
  fullName: string
  link: string
}

export interface Position47 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status45 {
  code: string
  description: string
}

export interface Stats44 {
  batting: Batting89
  pitching: Pitching89
  fielding: Fielding89
}

export interface Batting89 {}

export interface Pitching89 {
  note: string
  summary: string
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  rbi: number
  gamesFinished: number
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding89 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats44 {
  batting: Batting90
  pitching: Pitching90
  fielding: Fielding90
}

export interface Batting90 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching90 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding90 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus44 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition19 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id6241332 {
  person: Person45
  jerseyNumber: string
  position: Position48
  status: Status46
  parentTeamId: number
  stats: Stats45
  seasonStats: SeasonStats45
  gameStatus: GameStatus45
}

export interface Person45 {
  id: number
  fullName: string
  link: string
}

export interface Position48 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status46 {
  code: string
  description: string
}

export interface Stats45 {
  batting: Batting91
  pitching: Pitching91
  fielding: Fielding91
}

export interface Batting91 {}

export interface Pitching91 {}

export interface Fielding91 {}

export interface SeasonStats45 {
  batting: Batting92
  pitching: Pitching92
  fielding: Fielding92
}

export interface Batting92 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching92 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding92 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus45 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id6213832 {
  person: Person46
  jerseyNumber: string
  position: Position49
  status: Status47
  parentTeamId: number
  stats: Stats46
  seasonStats: SeasonStats46
  gameStatus: GameStatus46
}

export interface Person46 {
  id: number
  fullName: string
  link: string
}

export interface Position49 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status47 {
  code: string
  description: string
}

export interface Stats46 {
  batting: Batting93
  pitching: Pitching93
  fielding: Fielding93
}

export interface Batting93 {}

export interface Pitching93 {}

export interface Fielding93 {}

export interface SeasonStats46 {
  batting: Batting94
  pitching: Pitching94
  fielding: Fielding94
}

export interface Batting94 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching94 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding94 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus46 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id5961462 {
  person: Person47
  jerseyNumber: string
  position: Position50
  status: Status48
  parentTeamId: number
  battingOrder: string
  stats: Stats47
  seasonStats: SeasonStats47
  gameStatus: GameStatus47
  allPositions: AllPosition20[]
}

export interface Person47 {
  id: number
  fullName: string
  link: string
}

export interface Position50 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status48 {
  code: string
  description: string
}

export interface Stats47 {
  batting: Batting95
  pitching: Pitching95
  fielding: Fielding95
}

export interface Batting95 {
  summary: string
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching95 {}

export interface Fielding95 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats47 {
  batting: Batting96
  pitching: Pitching96
  fielding: Fielding96
}

export interface Batting96 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching96 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding96 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus47 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition20 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id6790322 {
  person: Person48
  jerseyNumber: string
  position: Position51
  status: Status49
  parentTeamId: number
  stats: Stats48
  seasonStats: SeasonStats48
  gameStatus: GameStatus48
}

export interface Person48 {
  id: number
  fullName: string
  link: string
}

export interface Position51 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status49 {
  code: string
  description: string
}

export interface Stats48 {
  batting: Batting97
  pitching: Pitching97
  fielding: Fielding97
}

export interface Batting97 {}

export interface Pitching97 {}

export interface Fielding97 {}

export interface SeasonStats48 {
  batting: Batting98
  pitching: Pitching98
  fielding: Fielding98
}

export interface Batting98 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching98 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding98 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus48 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Id6054472 {
  person: Person49
  jerseyNumber: string
  position: Position52
  status: Status50
  parentTeamId: number
  stats: Stats49
  seasonStats: SeasonStats49
  gameStatus: GameStatus49
  allPositions: AllPosition21[]
}

export interface Person49 {
  id: number
  fullName: string
  link: string
}

export interface Position52 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status50 {
  code: string
  description: string
}

export interface Stats49 {
  batting: Batting99
  pitching: Pitching99
  fielding: Fielding99
}

export interface Batting99 {}

export interface Pitching99 {
  note: string
  summary: string
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  rbi: number
  gamesFinished: number
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding99 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats49 {
  batting: Batting100
  pitching: Pitching100
  fielding: Fielding100
}

export interface Batting100 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching100 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding100 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus49 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition21 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id6909532 {
  person: Person50
  jerseyNumber: string
  position: Position53
  status: Status51
  parentTeamId: number
  stats: Stats50
  seasonStats: SeasonStats50
  gameStatus: GameStatus50
  allPositions: AllPosition22[]
}

export interface Person50 {
  id: number
  fullName: string
  link: string
}

export interface Position53 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status51 {
  code: string
  description: string
}

export interface Stats50 {
  batting: Batting101
  pitching: Pitching101
  fielding: Fielding101
}

export interface Batting101 {}

export interface Pitching101 {
  note: string
  summary: string
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  rbi: number
  gamesFinished: number
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding101 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats50 {
  batting: Batting102
  pitching: Pitching102
  fielding: Fielding102
}

export interface Batting102 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching102 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding102 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus50 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition22 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id6072082 {
  person: Person51
  jerseyNumber: string
  position: Position54
  status: Status52
  parentTeamId: number
  battingOrder: string
  stats: Stats51
  seasonStats: SeasonStats51
  gameStatus: GameStatus51
  allPositions: AllPosition23[]
}

export interface Person51 {
  id: number
  fullName: string
  link: string
}

export interface Position54 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status52 {
  code: string
  description: string
}

export interface Stats51 {
  batting: Batting103
  pitching: Pitching103
  fielding: Fielding103
}

export interface Batting103 {
  summary: string
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching103 {}

export interface Fielding103 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats51 {
  batting: Batting104
  pitching: Pitching104
  fielding: Fielding104
}

export interface Batting104 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching104 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding104 {
  gamesStarted: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus51 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition23 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Id6141792 {
  person: Person52
  jerseyNumber: string
  position: Position55
  status: Status53
  parentTeamId: number
  stats: Stats52
  seasonStats: SeasonStats52
  gameStatus: GameStatus52
}

export interface Person52 {
  id: number
  fullName: string
  link: string
}

export interface Position55 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status53 {
  code: string
  description: string
}

export interface Stats52 {
  batting: Batting105
  pitching: Pitching105
  fielding: Fielding105
}

export interface Batting105 {}

export interface Pitching105 {}

export interface Fielding105 {}

export interface SeasonStats52 {
  batting: Batting106
  pitching: Pitching106
  fielding: Fielding106
}

export interface Batting106 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching106 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding106 {
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus52 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface Info2 {
  title: string
  fieldList: FieldList2[]
}

export interface FieldList2 {
  label: string
  value: string
}

export interface Official {
  official: Official2
  officialType: string
}

export interface Official2 {
  id: number
  fullName: string
  link: string
}

export interface Info3 {
  label: string
  value?: string
}

export interface TopPerformer {
  player: Player5
  type: string
  gameScore: number
  pitchingGameScore: number
}

export interface Player5 {
  person: Person53
  jerseyNumber: string
  position: Position56
  status: Status54
  parentTeamId: number
  stats: Stats53
  seasonStats: SeasonStats53
  gameStatus: GameStatus53
  allPositions: AllPosition24[]
}

export interface Person53 {
  id: number
  fullName: string
  link: string
  boxscoreName: string
}

export interface Position56 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Status54 {
  code: string
  description: string
}

export interface Stats53 {
  batting: Batting107
  pitching: Pitching107
  fielding: Fielding107
}

export interface Batting107 {}

export interface Pitching107 {
  note: string
  summary: string
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  rbi: number
  gamesFinished: number
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding107 {
  gamesStarted?: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface SeasonStats53 {
  batting: Batting108
  pitching: Pitching108
  fielding: Fielding108
}

export interface Batting108 {
  gamesPlayed: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  avg: string
  atBats: number
  obp: string
  slg: string
  ops: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  groundIntoDoublePlay: number
  groundIntoTriplePlay: number
  plateAppearances: number
  totalBases: number
  rbi: number
  leftOnBase: number
  sacBunts: number
  sacFlies: number
  babip: string
  groundOutsToAirouts: string
  catchersInterference: number
  pickoffs: number
  atBatsPerHomeRun: string
  popOuts: number
  lineOuts: number
}

export interface Pitching108 {
  gamesPlayed: number
  gamesStarted: number
  flyOuts: number
  groundOuts: number
  airOuts: number
  runs: number
  doubles: number
  triples: number
  homeRuns: number
  strikeOuts: number
  baseOnBalls: number
  intentionalWalks: number
  hits: number
  hitByPitch: number
  atBats: number
  obp: string
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  numberOfPitches: number
  era: string
  inningsPitched: string
  wins: number
  losses: number
  saves: number
  saveOpportunities: number
  holds: number
  blownSaves: number
  earnedRuns: number
  whip: string
  battersFaced: number
  outs: number
  gamesPitched: number
  completeGames: number
  shutouts: number
  pitchesThrown: number
  balls: number
  strikes: number
  strikePercentage: string
  hitBatsmen: number
  balks: number
  wildPitches: number
  pickoffs: number
  groundOutsToAirouts: string
  rbi: number
  winPercentage: string
  pitchesPerInning: string
  gamesFinished: number
  strikeoutWalkRatio: string
  strikeoutsPer9Inn: string
  walksPer9Inn: string
  hitsPer9Inn: string
  runsScoredPer9: string
  homeRunsPer9: string
  inheritedRunners: number
  inheritedRunnersScored: number
  catchersInterference: number
  sacBunts: number
  sacFlies: number
  passedBall: number
  popOuts: number
  lineOuts: number
}

export interface Fielding108 {
  gamesStarted?: number
  caughtStealing: number
  stolenBases: number
  stolenBasePercentage: string
  assists: number
  putOuts: number
  errors: number
  chances: number
  fielding: string
  passedBall: number
  pickoffs: number
}

export interface GameStatus53 {
  isCurrentBatter: boolean
  isCurrentPitcher: boolean
  isOnBench: boolean
  isSubstitute: boolean
}

export interface AllPosition24 {
  code: string
  name: string
  type: string
  abbreviation: string
}

export interface Decisions {
  winner: Winner
  loser: Loser
  save: Save
}

export interface Winner {
  id: number
  fullName: string
  link: string
}

export interface Loser {
  id: number
  fullName: string
  link: string
}

export interface Save {
  id: number
  fullName: string
  link: string
}

export interface Leaders {
  hitDistance: HitDistance
  hitSpeed: HitSpeed
  pitchSpeed: PitchSpeed
}

export interface HitDistance {}

export interface HitSpeed {}

export interface PitchSpeed {}
