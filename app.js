Vue.component('bananarama-episode', {
  props: ['title', 'filename'],
  template: '<div class="flex flex-col episode-header"><span class="h-64 bg-red-100 text-white episode-bg-overlay flex items-end p-4">{{ title }}</span><audio v-bind:src="filename" preload="auto" /></div>'
});

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}