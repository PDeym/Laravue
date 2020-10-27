/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// import VueRouter from 'vue-router';
// Vue.use(VueRouter);

// import routes from './route';
// const router = new VueRouter({
//     routes
// });

// import App from './App.vue';
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('job-posting-component', require('./components/JobPostingComponent.vue').default);

// new Vue({
//     router, 
//     render: h => h(App)
// }).$mount('#app');

const app = new Vue({
    el: '#app',
});