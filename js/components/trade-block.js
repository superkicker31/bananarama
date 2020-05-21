Vue.component('trade-block', {
    template: 
    `<div class="lg:flex mt-4 w-full flex-wrap lg:-mx-2">
        <div v-for="team in sleeperLeague.data" v-if="teamHasPlayersOtb(team)" class="lg:w-1/3 px-2 py-2">
            <div class="bg-white shadow-md rounded h-48 overflow-y-auto">
                <p class="font-semibold px-4 py-2 bg-secondary text-yellow-900">
                    {{ getSleeperName(team.owner_id) }}
                </p>
                <div class="px-4 py-2">
                    <p v-for="(player_nickname, player_id) in team.metadata" v-if="playerIsOnTheTradeBlock(team, player_nickname, player_id)"> 
                        <span class="">{{ getPlayerNameById(player_id) }}</span> <span class="pl-4 text-primary italic"> {{ getPlayerNickWithoutOtb(player_nickname)}}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>`,
    data() {
        return {
            sleeperLeagueUsers: [],
            nflPlayers: [],
            sleeperLeague: []
        }
    },
    methods: {
        teamHasPlayersOtb: function (team) {
            if (team.metadata != null) {
                for (var [playerId, playerNick] of Object.entries(team.metadata)) {
                    if (this.playerIsOnTheTradeBlock(team, playerNick, playerId)) {
                        return true
                    }
                }
            }
            return false;
        },
        getSleeperName: function (ownerId) {
            if (ownerId !== null && this.sleeperLeagueUsers != null) {
                for (var user in this.sleeperLeagueUsers.data) {
                    if (this.sleeperLeagueUsers.data[user].user_id === ownerId) {
                        return this.sleeperLeagueUsers.data[user].display_name
                    }
                }
            }
        },
        playerIsOnTheTradeBlock: function(team, playerNick, playerId) {
            var nick = false;
            if (playerNick.includes("OTB") || playerNick.includes("otb") || playerNick.includes("Otb")) {
                nick = true;
            }

            var convertedId = playerId.replace("p_nick_", "");

            var onTeam = false;
            if (team.players != null) {
                onTeam = Object.values(team.players).includes(convertedId)
            }
            return nick && onTeam;
        },
        getPlayerNameById: function(playerNick) {
            if (this.nflPlayers.data != null) {
                var playerId = parseInt(playerNick.replace("p_nick_", ""), 10);
                return this.nflPlayers.data.data[playerId].first_name + " " + this.nflPlayers.data.data[playerId].last_name;
            }
            return "Name not found"
        },
        getPlayerNickWithoutOtb: function(playerNick) {
            return playerNick.replace("otb", "").replace("OTB", "").replace("Otb", "");
        },
    },
    mounted() {
        axios.get('https://api.sleeper.app/v1/league/518116516514529280/users')
            .then(response => (this.sleeperLeagueUsers = response))

        axios.get('https://superkicker31.github.io/bananarama/js/nfl_players.json')
            .then(response => (this.nflPlayers = response))

        axios.get('https://api.sleeper.app/v1/league/518116516514529280/rosters')
            .then(response => (this.sleeperLeague = response))
    }
})