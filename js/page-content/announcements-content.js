Vue.component('announcements-content', { 
    template: 
    `<section class="pt-64">
        <div id="announcements-section" class="pb-24 pt-32 content-container lg:mx-auto mx-2">
            <div>
                <p class="text-xl uppercase font-semibold tracking-wide lg:-ml-4"><a href="#announcements-section" class="flexhover:text-secondary"><span class="w-4 text-gray-500">#</span><span>Announcements</span> </a><p>
                <p class="mt-4">
                    Hier findet Ihr wichtige Ankündigungen für die Bananarama Ligen.
                </p>
                <announcements-filter v-on:set-tag="setActiveTag($event)" :active-tag="activeTag"></announcements-filter>
            </div>
            <div v-if="getAllActiveNewsItems().length !== 0">
                <announcements-item
                    v-for="item in getAllActiveNewsItems().slice(0,announcementsCounter)"
                    v-if="itemHasActiveTag(item.types.join(' '))"
                    :class="item.types.join(' ')"
                    :title="item.title"
                    :text="item.text"
                    :link="item.link"
                    :date="item.date"
                    :types="item.types"
                    :linkText="item.linkText"
                    >
                </announcements-item>
            </div>
            <div v-else class="bg-white text-center font-semibold py-12 shadow-md rounded-md text-primary mt-4">
                Huch, hier gibt es noch keine Benachrichtigungen.... Schnell eine andere Kategorie aussuchen!
            </div>
            <div>
                <p class="my-2 text-sm text-gray-500">
                    <div v-if="showMoreButton()" class="text-center">
                        <a @click="showThreeMoreAnnouncements" class="text-center  text-gray-500 cursor-pointer">
                            <i class="fas fa-angle-double-down"></i> Die nächsten <span class="font-bold text-gray-700"> {{ Math.min(3, getAllActiveNewsItems().length - announcementsCounter) }} </span> anzeigen <i class="fas fa-angle-double-down"></i>
                        </a>
                    </div>
                    <div v-if="!announcementsCollapsed" class="text-center">
                        <a @click="showDefaultAnnouncements" class="text-center text-gray-500 cursor-pointer">
                            <i class="fas fa-angle-double-up"></i> Einklappen <i class="fas fa-angle-double-up"></i>
                        </a>
                    </div>
                </p>
            </div>
        </div>
    </section>`,
    data() {
        return {
            activeTag: 'alle',
            news: [
                {
                  title: 'Neue Website für die Liga',
                  types: [
                    'allgemein'
                  ],
                  text: 'Wenn du das liest, ist diese "Ankündigung" für dich schon ein alter Hut. Die Bananarama Fantasy Football Ligen haben jetzt endlich ein gemeinsames Zuhause! Da die bisherigen Lösungen für alle Beteiligten eher unbefriedigend waren, haben sich die Schöpfer des Podcasts eine Alternative überlegt.',
                  date: '13.05.2020',
                  link: 'https://bananarama.netlify.app',
                  linkText: 'Die neue Bananarama Webseite'
                }
              ],
              announcementsCounter: 3,
              announcementsCollapsed: true
        }
    },
    methods: {
        setActiveTag(tag) {
            this.activeTag = tag;
        },
        getAllActiveNewsItems: function () {
            var activeNews = [];
            for (var i = 0; i < this.news.length; i++) {
             if(this.itemHasActiveTag(this.news[i].types.join(' '))) {
               activeNews.push(this.news[i]);
             }
            }
            return activeNews;
          },
          itemHasActiveTag: function(tags) {
            if (this.activeTag !== null) {
              if (tags.includes(this.activeTag) || this.activeTag === "alle") {
                return true;
              } 
            }
            return false;
          },
          
          showThreeMoreAnnouncements: function () {
            if ( this.news.length > this.announcementsCounter + 3 ) {
              this.announcementsCounter =  this.announcementsCounter + 3;
            } else {
              this.announcementsCounter = this.news.length;
            }
            this.announcementsCollapsed = false;
          },
          showDefaultAnnouncements: function () {
            this.announcementsCounter = 3;
            this.announcementsCollapsed = true;
          },
          showMoreButton: function() {
            var activeNews = this.getAllActiveNewsItems();
            if(this.announcementsCounter < activeNews.length) {
              return true;
            }
            return false;
          },
    }
});