Vue.component('podcast-episode', { 
    props: ['text', 'link'],
    template: `<div class="lg:flex">
                <div class="lg:w-2/3">
                    <iframe :src="link" allowfullscreen="true" allow="autoplay; fullscreen" style="width: 100%; height: 208px;"></iframe>
                </div>
                <div class="lg:pl-4 lg:w-1/3">
                    <p>
                        {{ text }}
                    </p>
                </div>
              </div>`
   })
  