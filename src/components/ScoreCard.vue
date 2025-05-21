<template>
  <div>
    <div class="schedule-container">
      <div class="schedule-scroll">
        <div
          v-for="(gameDate) in gameSchedule"
          class="schedule-card"
          @click="changeCurrentGame(gameDate.games[0]) "
        >
          <div class="date">{{ formatDateToYYYYMMDD(new Date(gameDate.date)) }}</div>
          <div class="games">
            <p>{{ gameDate.games[0].teams.away.team.name }} @ {{ gameDate.games[0].teams.home.team.name }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="game-info-container">
    <!-- Today's Game Section (Left Aligned) -->
    <div class="game-header-left">
      <h1 v-if="currentGameDate?.getDay() === new Date().getDay()">Today's Game</h1>
      <h1 v-else-if="currentGameDate < new Date()">
        Game from {{ formatDateToYYYYMMDD(currentGameDate) }}
      </h1>
      <h1 v-else>Next Game is on {{ currentGameDate?.getDay() }}</h1>
      <h3>{{ currentGame?.teams.away.team.name }} @ {{ currentGame?.teams.home.team.name }} at {{ formatGameTime(currentGameDate) }}</h3>
    </div>

    <!-- Scoreboard (Center Aligned) -->
      <div class="scoreboard">
        <div class="team">
          <span class="label">Home:</span>
          <span class="name">{{ currentGame?.teams.home.team.name }}</span>
          <span class="score">{{ currentGame?.teams.home.score ?? 0 }}</span>
        </div>
        <div class="team">
          <span class="label">Away:</span>
          <span class="name">{{ currentGame?.teams.away.team.name }}</span>
          <span class="score">{{ currentGame?.teams.away.score ?? 0 }}</span>
        </div>
      </div>
    </div>

    <!-- Play by Play scores -->
    <div class="play-list">
      <h2 class="title">Play-by-Play</h2>
      <ul>
        <li v-for="play in currentGameDetails?.plays.allPlays">
          <span class="inning">Inning {{ play.about.inning }}:</span>
          <span class="description">{{ play.result.description }}</span>
          <span v-if="play.result.rbi > 0" class="runs">Score updated</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref } from 'vue'
import axios from 'axios'
import type { Game, GameRoot, DateInfo } from '@/models/GameRoot.ts'
import type { LiveData, Plays, AllPlay, About, Result, GameDetails } from '@/models/GameDetails.ts'

const loading = ref(true)
const currentGame = ref<Game | null>(null)
const gameSchedule = ref<DateInfo[] | null>(null)
const currentGameDetails = ref<LiveData | null>(null)
let homeTeamName = ref('')
let awayTeamName = ref('')
let currentGameDate = ref<Date | null>(null)

async function changeCurrentGame(game: Game) {
  console.log(gameSchedule)
  console.log("currentGame is", currentGame.value)
  console.log("changing current game", game)
  currentGame.value = game;
  console.log("currentGame is", currentGame.value)
  currentGameDate.value = new Date(game.gameDate)

  await nextTick()

  // get game details..
  const currentGameDetailsResponse = await axios.get<GameDetails>(
    `https://statsapi.mlb.com/api/v1.1/game/${game.gamePk}/feed/live`,
  )

  currentGameDetails.value = currentGameDetailsResponse.data.liveData
}

// helper methods
function formatGameTime(gameDate: Date | null): string {
  if (!gameDate) return ''
  const date = new Date(gameDate)
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
}

function formatDateToYYYYMMDD(date: Date | null): string {
  if (date == null) return ''
  const year = date.getUTCFullYear()
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const day = String(date.getUTCDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

onMounted(async () => {
  const today = new Date()
  const teamId = '143' // Phillies
  var currentGameID = 0

  try {
    const currentGameResponse = await axios.get<GameRoot>(
      `https://statsapi.mlb.com/api/v1/schedule?&sportId=1&startDate=2025-05-15&endDate=2025-07-20&teamId=${teamId}`,
    )

    if (currentGameResponse.data.dates.length === 0) {
      console.log('No games found from API response.');
    } else {
      const foundDate = currentGameResponse.data.dates.find(value => value.date == formatDateToYYYYMMDD(new Date()));
      if (foundDate) {
        console.log("Todays Game is on", foundDate);
        // if value is not undefined
        currentGame.value = foundDate.games[0];
      }


      // find
      homeTeamName.value = currentGame.value?.teams.home.team.name ?? '';
      awayTeamName.value = currentGame.value?.teams.away.team.name ?? '';
      currentGameDate.value = new Date((currentGame.value?.gameDate ?? today));

      console.log('Home team:', currentGame.value?.teams.home.team.name)
      console.log('Away team:', currentGame.value?.teams.away.team.name)
      console.log('Home Score', currentGame.value?.teams.home.score)
      console.log('Away Score', currentGame.value?.teams.away.score)

    //const currentGameResponse = await axios.get<GameRoot>(
    //  `https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=${teamId}&date=2025-05-18`,
    //)

    const games = currentGameResponse.data.dates[0]?.games ?? []
    gameSchedule.value = currentGameResponse.data.dates
    currentGameID = currentGame.value?.gamePk ?? 0;

    const currentGameDetailsResponse = await axios.get<GameDetails>(
      `https://statsapi.mlb.com/api/v1.1/game/${currentGameID}/feed/live`,
    )

    console.log("Response from API", currentGameDetailsResponse.status);
    currentGameDetails.value = currentGameDetailsResponse.data.liveData



    }
  } catch (error) {
    console.error('Error fetching MLB game:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.play-list {
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
  font-family: sans-serif;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
}

li.highlight {
  background-color: #fff3cd; /* light yellow */
  border-left: 5px solid #f0ad4e; /* orange highlight */
}

.inning {
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.runs {
  color: #c0392b;
  font-weight: bold;
}
.scoreboard {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  max-width: 400px;
  margin: 1rem auto;
  padding: 1rem;
  border: 2px solid #ccc;
  border-radius: 12px;
  background-color: #f9f9f9;
  font-family: sans-serif;
}

.team {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
}

.label {
  font-weight: bold;
  margin-right: 0.5rem;
}

.name {
  flex: 1;
  text-align: left;
}

.score {
  font-weight: bold;
  font-size: 1.4rem;
}
.schedule-container {
  overflow-x: auto;
  padding: 1rem;
}

.schedule-scroll {
  display: flex;
  gap: 1rem;
  scroll-behavior: smooth;
}

.schedule-card {
  flex: 0 0 auto;
  width: 150px;
  padding: 1rem;
  border-radius: 10px;
  background: #f5f5f5;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.schedule-card.today {
  background-color: #d1e7dd;
  border: 2px solid #0f5132;
}

.date {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.games p {
  margin: 0.25rem 0;
}


</style>
