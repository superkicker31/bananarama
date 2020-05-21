var app = new Vue({
  el: '#app',
  data: {
   
    mobileMenuDisplayed: false,
    sleeperLeague: null,
    nflPlayers: null,
    sleeperLeagueUsers: null,
    sleeperTransactions: null,
    
  },
  mounted () {
    axios
    .get('https://api.sleeper.app/v1/league/518116516514529280/rosters')
    .then(response => (this.sleeperLeague = response))
    axios
      .get('https://superkicker31.github.io/bananarama/js/nfl_players.json')
      .then(response => (this.nflPlayers = response))
    axios
      .get('https://api.sleeper.app/v1/league/518116516514529280/users')
      .then(response => (this.sleeperLeagueUsers = response))
    axios
      .get('https://api.sleeper.app/v1/league/518116516514529280/transactions/1')
      .then(response => (this.sleeperTransactions = response))
  },
  methods: {
    reviewCounterUp: function () {
      this.reviewCounter = this.reviewCounter++;
    },
  },
})

window.onscroll = function() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 50) {
    document.getElementById("header-title").style.height = "0";
    document.getElementById("header").style.minHeight = "60px";
    document.getElementById("header-title-text").style.display = "none";
    document.getElementById("mobile-header-logo").style.height = "120px";
    document.getElementById("mobile-header-logo").style.width = "120px";
  } else {
    document.getElementById("header-title-text").style.display = "flex";
    document.getElementById("header-title").style.height = "320px";
    document.getElementById("header-bg-overlay").style.display = "block";
    document.getElementById("mobile-header-logo").style.height = "60px";
    document.getElementById("mobile-header-logo").style.width = "60px";
  }
};

// Loader
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
      document.getElementById('app').style.visibility="hidden";
  } else if (state == 'complete') {
      document.getElementById('load').style.visibility="hidden";
      document.getElementById('app').style.visibility="visible";
  }
}
