Vue.component('podcast-list', { 
    props: ['dynastyEpisodes', 'redraftEpisodes'],
    template: ` <div class="podcast-list">
                    <div class="">
                        <div class="bg-white mt-4 px-8 py-6 border-l-4 border-primary shadow-lg">
                            <h3 class="text-primary">Dynasty</h3>
                            <podcast-episode v-for="episode in dynastyEpisodes" :link="episode.link" :text="episode.text"></podcast-episode>
                        </div>
                        <div class="bg-white mt-4 px-8 py-6 border-l-4 border-secondary shadow-lg">
                            <h3 class="text-primary">Redraft</h3>
                            <podcast-episode v-for="episode in redraftEpisodes" :link="episode.link" :text="episode.text"></podcast-episode>
                        </div>
                    </div>
                </div>`
   })
  