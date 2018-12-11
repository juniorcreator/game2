import Vue from 'vue';
import App from './App.vue';
import Mycolors from './colors.js';


export const eventEmitter = new Vue();

Vue.filter('upper', (value) => {
	return value.toUpperCase();
});

Vue.directive('color',Mycolors);

new Vue({
  el: '#app',
  render: function(h){
  	return h(App);
  },
})
