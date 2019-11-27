Vue.component('bananarama-episode', {
  props: ['title', 'filename'],
  template: '<div class="flex flex-col episode-header shadow"><span class="lg:h-64 h-32 bg-red-100 text-white episode-bg-overlay flex items-end p-4">{{ title }}</span><audio class="audio-player" v-bind:src="filename" preload="auto" /></div>'
});

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "60px";
  } else {
    document.getElementById("header").style.height = "200px";
  }
}

const episodeLinks = document.getElementsByClassName('episodes-open-link');

for (let i = 0; i < episodeLinks.length; i++) {
  episodeLinks[i].addEventListener('click', setEpisode);
}

function setEpisode() {
  const title = this.dataset.title;
  const filename = this.dataset.filename;
  const playerid = this.dataset.playerid;

  const player = document.querySelector('#' + playerid);
  const playerText = player.querySelector('.episode-bg-overlay');
  const audioPlayer = player.querySelector('.audio-player');

  audioPlayer.setAttribute('src', filename);
  playerText.innerHTML = title;

  console.log(playerText)
}