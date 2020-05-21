Vue.component('announcements-item', { 
    template: 
    `<div class="p-6 mt-4 bg-white rounded-lg shadow">
        <div class="flex justify-between">
            <div>
                <h3 class="font-semibold sm:flex items-center"><span>{{ title }}</span> <span class="ml-1 text-gray-500 font-light text-sm leading-none"> - {{ date }}</span></h3>
            </div>
            <div class="flex">
                <span v-for="type in types">
                    <span class="text-sm rounded-full md:px-4 px-2 md:py-1 mr-2 tag" :class="type">
                            <span class="md:inline-block hidden">{{ type }}</span>
                    </span>
                </span>
            </div>
        </div>
        <p class="mt-2">{{ text }} <a :href="link" class="text-blue-700 hover:underline">{{ linkText }}</a></p>
    </div>`,
props: ['text', 'link', 'title', 'types', 'date', 'linkText']
});
  