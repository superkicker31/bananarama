Vue.component('page-header', { 
template: 
  `<section class="w-full header text-white fixed shadow-lg z-30" id="header">
    <a class="fixed hidden w-full h-full z-10 mobile-menu-overlay" id="mobile-menu-overlay" v-on:click="toggleMobileMenu"></a>
    <a href="/"><img src="img/bananarama_transparent_logo.png" id="mobile-header-logo" class="lg:hidden w-12 fixed z-100"/></a>
    <a href="/"><img src="img/bananarama_transparent_logo_192.png" class="xl:w-48 lg:w-32 hidden lg:inline-block fixed z-100"/></a>
    <div class="h-full header-bg-overlay block px-4 tracking-wide" id="header-bg-overlay">
        <div class="lg:text-4xl md:text-3xl text-2xl font-semibold h-64" id="header-title">
          <span id="header-title-text" class="block xl:pl-48 lg:pl-24 pl-8 uppercase lg:pt-8 pt-2">Bananarama</span>
        </div>
        <div class="lg:hidden content-container lg:mx-auto font-normal text-xl absolute top-0 right-0 pr-4 z-30">
            <a class="lg:hidden flex justify-end py-4" v-on:click="toggleMobileMenu" id="mobile-menu-link">
              <i class="fas fa-bars text-2xl"></i>
            </a>
            <div class="relative bg-primary">
              <div class="absoute hidden" id="mobile-menu-link-container">
                <div v-for="item in menu" class="menu-link">
                    <a @click="toggleMobileMenu" :href="item.link" class="mx-4 py-4 hover:border-secondary border-b-4 border-transparent block text-right">
                      <span :class="item.classList">{{ item.linkText }}</span>
                    </a>
                </div>
              </div>
            </div>
        </div>
        <div class="lg:flex hidden content-container justify-center mx-auto font-normal text-xl">
            <span v-for="item in menu" class="menu-link">
                <a :href="item.link" class="px-4 py-4 mr-4 hover:border-secondary border-b-4 border-transparent block text-right">
                  <span :class="item.classList">{{ item.linkText }}</span>
                </a>
            </span>
        </div>
    </div>
  </section>`,
  data() {
      return {
          mobileMenuDisplayed: false,
          menu: [
              {
                link: "/",
                linkText: "Home",
                classList: ""
              },
              {
                link: "/redraft.html",
                linkText: "Redraft",
                classfList: ""
              },
              {
                link: "/dynasty.html",
                linkText: "Dynasty",
                classList: ""
              },
              {
                link: "/announcements.html",
                linkText: "Announcements",
                classList: ""
              },
              {
                link: "/podcast.html",
                linkText: "Podcast",
                classList: ""
              }
          ],
      }
  },
  methods: {
      toggleMobileMenu: function () {
          this.mobileMenuDisplayed = !this.mobileMenuDisplayed;
          const btn = document.getElementById('mobile-menu-link'); 
          const overlay = document.getElementById('mobile-menu-overlay'); 
          const links = document.getElementById('mobile-menu-link-container');
          const icon = btn.childNodes[0];
          if (!this.mobileMenuDisplayed) {
            document.getElementById("header-title").style.display = "flex";
          } 
          icon.classList.toggle('fa-times');
          icon.classList.toggle('fa-bars');
          overlay.classList.toggle('hidden');
          links.classList.toggle('hidden')
        }
  },
  mounted() {
    
  }
});