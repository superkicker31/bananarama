Vue.component('podcast-content', { 
    template: 
    `<section id="podcast-section" class="pt-32">
        <div class="pt-64 pb-24 lg:mx-auto mx-2 content-container ">
            <div>
                <p class="text-xl uppercase font-semibold text-gray-500 tracking-wide lg:-ml-4"><a href="#podcast-section" class="text-gray-700 hover:text-primary flex"><span class="w-4 text-gray-400">#</span> <span>Podcast</span></a></p>
                <p class="mt-4">
                    {{ introText }}
                </p>
            </div>
            <podcast-list :dynasty-episodes="dynastyEpisodes" :redraft-episodes="redraftEpisodes"></podcast-list>
        </div>
        <div class="bg-gray-200">
            <div>
                <review-block v-for="review in reviews"
                    :name="review.name"
                    :image="review.image"
                    :text="review.text"
                    v-bind:key="review.name">
                </review-block>
            </div>
        </div>
    </section>`,
    data() {
        return {
            introText: "Im Bananarama Podcast begleitet der Host und allseits geliebte Comissioner Frank zusammen mit seinem treuen Helfer Alex die Bananarama Fantasy Football Ligen, getreu dem Motto: Sag was, egal was ... BANANARAMA!",
            reviews: [
                {
                  text: 'Zwei Flachzangen reden über die tollste Beschäftigung für Footballfans. Yes, please.',
                  image: 'img/marvin.jpg',
                  name: 'Marvin E., langjähriger Bananarama-Hörer'
                }
              ],
              dynastyEpisodes: [
                {
                  link: "https://www.podomatic.com/embed/html5/episode/9724814?style=normal&amp;autoplay=false",
                  text: "Die neue Saison startet bald, mit neuen Gesichtern sowohl in der NFL als auch der Banarama Dynasty Liga. Frank und Alex geben eine kurze Einführung für die neuen und bereiten die Liga auf das neue Jahr vor."
                }
              ],
              redraftEpisodes: [
                {
                  link: "",
                  text: "Keine Aktuelle Episode. Come back soon"
                }
              ],
        }
    }
});