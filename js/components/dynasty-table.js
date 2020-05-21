Vue.component('dynasty-table', { 
    template: 
    `<div class="bg-white mt-4 shadow-md inline-block rounded-md w-full">
        <div class="pb-2 w-full text-sm">
            <div class="text-primary bg-gray-200 md:text-xl flex justify-between rounded-t-md lg:px-12 px-2">
                <div class="w-8 md:w-12 py-4 font-semibold">#</div>
                <div class="flex-1 py-4 font-semibold">User</div>
                <div class="w-8 md:w-12 py-4 font-semibold">W</div>
                <div class="w-8 md:w-12 py-4 font-semibold">L</div>
                <div class="w-8 md:w-12 py-4 font-semibold">PF</div>
                <div class="w-12 py-4 font-semibold hidden md:block">Waiver</div>
            </div>
            <div v-for="(team, index) in sleeperLeague.data" class="flex justify-between lg:px-12 px-2 py-2">
                <div class="w-8 md:w-12 text-gray-500 font-semibold">{{ index+1 }}</div>
                <div class="flex-1">{{ getSleeperName(team.owner_id)}}</div>
                <div class="w-8 md:w-12">{{ 0 +  team.settings.wins }}</div>
                <div class="w-8 md:w-12">{{ 0 + team.settings.losses }}</div>
                <div class="w-8 md:w-12">{{ 0 + team.settings.fpts }}</div>
                <div class="w-12 hidden md:block">{{ getWaiverBudget(team.settings.waiver_budget_used)}}</div>
            </div>
        </div>
    </div>`,
    data() {
        return {
            sleeperLeague: [],
            sleeperLeagueUsers: []
        }
    },
    methods: {
        getWaiverBudget(spent) {
            return 1000 - spent
        },
        getSleeperName: function (ownerId) {
            if (ownerId !== null) {
                for (var user in this.sleeperLeagueUsers.data) {
                    if (this.sleeperLeagueUsers.data[user].user_id === ownerId) {
                        return this.sleeperLeagueUsers.data[user].display_name
                    }
                }
            }
        },
    },
    mounted() {
        axios.get('https://api.sleeper.app/v1/league/518116516514529280/rosters')
            .then(response => (this.sleeperLeague = response))

        axios.get('https://api.sleeper.app/v1/league/518116516514529280/users')
            .then(response => (this.sleeperLeagueUsers = response))

    }
   })
  