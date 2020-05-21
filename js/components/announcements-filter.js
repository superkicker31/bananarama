Vue.component('announcements-filter', { 
    template: 
    `<div class="mt-4" :class="activeTag">
        <div class="content-container lg:mx-auto mx-2 flex items-center justify-between flex-wrap">
            <button class="text-sm rounded-full px-4 py-1 my-4 mr-2 tag allgemein focus:outline-none filter-button border-4 border-transparent shadow-sm" @click="$emit('set-tag', 'allgemein')" id="filter-button-allgemein">allgemein</button>
            <button class="text-sm rounded-full px-4 py-1 my-4 mr-2 tag dynasty focus:outline-none filter-button shadow-sm border-4  border-transparent" @click="$emit('set-tag', 'dynasty')" id="filter-button-dynasty">dynasty</button>
            <button class="text-sm rounded-full px-4 py-1 my-4 mr-2 tag redraft focus:outline-none filter-button shadow-sm border-4 border-transparent"  @click="$emit('set-tag', 'redraft')" id="filter-button-redraft">redraft</button>
            <button class="text-sm rounded-full px-4 py-1 my-4 mr-2 tag podcast focus:outline-none filter-button shadow-sm border-4 border-transparent" @click="$emit('set-tag', 'podcast')" id="filter-button-podcast">podcast</button>
            <button class="text-sm rounded-full px-4 pr-1 py-1 my-4 tag all  focus:outline-none text-gray-900 bg-gray-400 flex items-center filter-button border-4 border-transparent shadow-sm"  @click="$emit('set-tag', 'alle')" id="filter-button-news-item">alle <span class="fas fa-times mx-2 text-gray-700"></span> </button>
        </div>
    </div>`,
    props: ['activeTag']
});
  