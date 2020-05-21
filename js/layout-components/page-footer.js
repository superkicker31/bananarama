Vue.component('page-footer', { 
template: 
    `<footer class="bg-gray-800 text-gray-200 py-12">
        <div class="content-container lg:mx-auto mx-2">
            <div class="flex">
                <div class="w-1/3">
                    <p class="uppercase text-gray-500 tracking-wide">
                        Unsere Ligen
                    </p>
                    <div class="mt-4 flex">
                        <span class="hover:text-secondary">
                            <a target="_blank" href="https://sleeper.app/leagues/464902912561115136">Dynasty</a>
                        </span>
                        <span class="mx-2">|</span>
                        <span class="hover:text-secondary">
                            <a target="_blank" href="https://fantasy.nfl.com/league/3074665">Redraft</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </footer>`
});