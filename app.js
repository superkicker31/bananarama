Vue.component('bananarama-episode', {
  props: ['title', 'filename'],
  template: '<div class="font-mono flex flex-col episode-header"><span class="lg:h-64 bg-red-100 text-gray-200 md:text-3xl text-2xl episode-bg-overlay flex items-end p-4">{{ title }}</span><audio class="audio-player" v-bind:src="filename" preload="none" /></div>'
});

var app = new Vue({
    el: '#app',
    data: {
      menu: [
          {
            link: "#fresh-episodes-section",
            linkText: "Fresh",
            classList: " md:-ml-4"
          },
          {
            link: "#mixed-episodes-section",
            linkText: "Mixed",
            classList: ""
          },
          {
            link: "#redraft-episodes-section",
            linkText: "Redraft",
            classList: ""
          },
          {
            link: "#dynasty-episodes-section",
            linkText: "Dynasty",
            classList: ""
          },
          {
            link: "#announcements-section",
            linkText: "Announcements",
            classList: ""
          }
      ],
      news: [
        {
          title: 'Neue Website für den Podcast',
          text: 'Wenn du das liest, ist diese "Ankündigung" für dich schon ein alter Hut. Der Bananarama Podcast hat jetzt endlich ein eigenes Zuhause! Da die bisherigen Lösungen für alle Beteiligten eher unbefriedigend waren, haben sich die Schöpfer des Podcasts eine Alternative überlegt.',
          date: '29.11.2019',
          link: 'https://superkicker31.github.io/bananarama',
          linkText: "Die neue Bananarama Podcast Webseite"
        }
      ],
      episodes: {
        fresh: [
          {
            title: "2019 Redraft Episode 2",
            date: "01.12.2019",
            file: "media/08_Redraft_Podcast_Episode_2.mp3",
            isActive: true
          },
          {
            title: "2019 Dynasty Episode 4",
            date: "01.12.2019",
            file: "media/09_Dynasty_Podcast_Episode_4.mp3",
            isActive: false
          }
        ],
        mixed: [
          {
            title: "2019 Mixed Episode 1",
            date: "04.09.2019",
            file: "media/03_Bananarama_Podcast_Episode_03_2019.mp3",
            isActive: true
          },
          {
            title: "2019 Mixed Episode 2",
            date: "27.09.2019",
            file: "media/04_Bananarama_Podcast_Episode_04_2019.mp3",
            isActive: false
          },
          {
            title: "2019 Mixed Episode 3",
            date: "06.10.2019",
            file: "media/05_Bananarama_Podcast_Episode_05_2019.mp3",
            isActive: false
          },
          {
            title: "2019 Mixed Episode 4",
            date: "10.10.2019",
            file: "media/06_Bananarama_Podcast_Episode_06.mp3",
            isActive: false
          }
        ],
        redraft: [
          {
            title: "2019 Redraft Episode 1",
            date: "22.11.2019",
            file: "media/07_Redraft_Podcast_Episode_1.mp3",
            isActive: true
          },
          {
            title: "2019 Redraft Episode 2",
            date: "01.12.2019",
            file: "media/08_Redraft_Podcast_Episode_2.mp3",
            isActive: false
          },
        ],
        dynasty: [
          {
            title: "2019 Dynasty Episode 1",
            date: "16.08.2019",
            file: "media/01_Dynasty_Podcast_Episode_01_2019.mp3",
            isActive: true
          },
          {
            title: "2019 Dynasty Episode 2",
            date: "04.09.2019",
            file: "media/02_Dynasty_Podcast_Episode_02_2019.mp3",
            isActive: false
          },
          {
            title: "2019 Dynasty Episode 3",
            date: "22.11.2019",
            file: "media/07_Dynasty_Podcast_Episode_3.mp3",
            isActive: false
          },
          {
            title: "2019 Dynasty Episode 4",
            date: "01.12.2019",
            file: "media/09_Dynasty_Podcast_Episode_4.mp3",
            isActive: false
          },
        ]
      },
      reviews: [
        {
          text: 'Zwei Flachzangen reden über die tollste Beschäftigung für Footballfans. Yes, please.',
          image: 'img/marvin.jpg',
          name: 'Marvin E., langjähriger Bananarama-Hörer'
        }
      ],
      reviewCounter: 0,
      introText: "Im Bananarama Podcast begleitet der Host und allseits geliebte Comissioner Frank zusammen mit seinem treuen Helfer Alex die Bananarama Fantasy Football Ligen, getreu dem Motto: Sag was, egal was ... <span class='uppercase font-semibold text-green-700'>Bananarama</span>!"
    },
    methods: {
      reviewCounterUp: function () {
        this.reviewCounter = this.reviewCounter++;
      }
    }
  })

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 50) {
    if (window.innerWidth > 920) {
      document.getElementById("header-title").style.height = "0";
      document.getElementById("header-title-text").style.display = "none";

    } else {
      document.getElementById("header-title").style.height = "60px";
    }
  } else {
    document.getElementById("header-title-text").style.display = "flex";
    document.getElementById("header-title").style.height = "256px";
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
  const listname = this.dataset.listname;

  const player = document.querySelector('#' + playerid);
  const playerText = player.querySelector('.episode-bg-overlay');
  const audioPlayer = player.querySelector('.audio-player');

  const otherLinks = document.getElementsByClassName(listname + '-episode-link');
  
  for (let i = 0; i< otherLinks.length; i++){
    otherLinks[i].classList.remove('active-episode');
  }
  this.classList.add('active-episode');

  audioPlayer.setAttribute('src', filename);
  playerText.innerHTML = title;
}