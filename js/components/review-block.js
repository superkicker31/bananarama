Vue.component('review-block', { 
    template: 
    `<div class="content-container mt-4 lg:px-4 py-24 lg:mx-auto mx-2">
        <div class="flex md:flex-row justify-center items-center">
            <div class="w-4/5 pr-8">
                <div class="flex items-center justify-start">
                    <h6 class="text-12xl md:-mt-16 -mt-12 block leading-none text-gray-400">„</h6>
                    <div class="md:px-4 md:-ml-12 -ml-8 italic">
                        <h6>{{ text }}</h6>
                    </div>
                </div>
            </div>
            <div class="w-1/5">
                <img :src="image" alt="" class="rounded-full lg:w-32 w-24 shadow-primary my-4">
            </div>
        </div>
        <div class="text-xs text-gray-500 font-light mx-auto md:mt-0 md:w-4/5">
            {{ name }}
        </div>
    </div>`,
    props: ['name','image','text']
});
  