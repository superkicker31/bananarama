var app = new Vue({
    el: '#app',
    data: {
      menu: [
          {
            link: "#redraft-section",
            linkText: "Redraft",
            classList: ""
          },
          {
            link: "#dynasty-section",
            linkText: "Dynasty",
            classList: ""
          },
          {
            link: "#announcements-section",
            linkText: "Announcements",
            classList: ""
          },
          {
            link: "#podcast-section",
            linkText: "Podcast",
            classList: " md:-ml-4"
          }
      ],
      news: [
        {
          title: 'Neue Website für die Liga',
          types: [
            'allgemein'
          ],
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
      mobileMenuDisplayed: false,
      announcementsCounter: 3,
      introText: "Im Bananarama Podcast begleitet der Host und allseits geliebte Comissioner Frank zusammen mit seinem treuen Helfer Alex die Bananarama Fantasy Football Ligen, getreu dem Motto: Sag was, egal was ... BANANARAMA!"
    },
    methods: {
      showThreeMoreAnnouncements: function () {
        if ( this.news.length > this.announcementsCounter + 3 ) {
          this.announcementsCounter =  this.announcementsCounter + 3;
        } else {
          this.announcementsCounter = this.news.length;
        }
      },
      showDefaultAnnouncements: function () {
        this.announcementsCounter = 3;
      },
      reviewCounterUp: function () {
        this.reviewCounter = this.reviewCounter++;
      },
      filterByTag: function (tag) {
        const articles = document.getElementsByClassName('news-item');
        const buttons = document.getElementsByClassName('filter-button');
        
        for (let button of buttons) {
          if (button.id == 'filter-button-' + tag) {
            button.classList.add('border-2');
          } else {
            button.classList.remove('border-2');
          }
        }

        for (let element of articles) {
          if (element.classList.contains(tag)) {
            element.classList.remove('hidden');
          } else {
            element.classList.add('hidden');
          }
        }
      },
    
      toggleMobileMenu: function () {
        this.mobileMenuDisplayed = !this.mobileMenuDisplayed;
        const btn = document.getElementById('mobile-menu-link'); 
        const overlay = document.getElementById('mobile-menu-overlay'); 
        const links = document.getElementsByClassName('menu-link');
        const icon = btn.childNodes[0];
        if (this.mobileMenuDisplayed) {
        window.scrollTo(0,0);
        } else {
        document.getElementById("header-title").style.display = "flex";
        }
        icon.classList.toggle('fa-times');
        icon.classList.toggle('fa-bars');

        overlay.classList.toggle('hidden');
        for (let link of links) {
          link.classList.toggle('hidden');
        }
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
    document.getElementById("header-bg-overlay").style.display = "block";

  }
}

// Loader
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('app').style.visibility="hidden";
  } else if (state == 'complete') {
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('app').style.visibility="visible";
  }
}