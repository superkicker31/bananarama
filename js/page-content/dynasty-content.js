Vue.component('dynasty-content', { 
    template: 
    `<div class="pt-64">
        <section id="dynasty-section" class="pb-24 pt-32 content-container lg:mx-auto mx-2">
            <div>
                <p class="text-xl uppercase font-semibold text-gray-500 tracking-wide lg:-ml-4"><a href="#dynasty-section" class="flex text-gray-700 hover:text-primary">
                    <span class="w-4 text-gray-400">#</span>
                    <span>Dynasty</span></a>
                </p>
                <p class="mt-4">
                    Wenn es um die Bananarama Dynasty Liga auf sleeper.app geht, findest du es hier
                </p>
            </div>
            <div>
                <div class="py-12 w-full">
                    <h2>Tabelle</h2>
                    <dynasty-table></dynasty-table>
                </div>
            </div>
            <div>
                <div class="py-12 w-full">
                    <h2>Tradeblock</h2>
                    <trade-block></trade-block>
                </div>
            </div>
            <div>
                <div class="py-12 w-full">
                    <h2>Geschichte</h2>
                    <div>
                        <h3>2019</h3>
                        <p>
                            <span>Sieger:</span>
                            <span>Running Blacks (Manager: BenjajBlack)</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div> `
});