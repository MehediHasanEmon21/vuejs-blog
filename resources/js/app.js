


require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
Vue.use(VueRouter)

//import roures
import {routes} from './routes'


const router = new VueRouter({
	routes,
	mode:'history'
})


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-layout', require('./components/admin/admin_layouts.vue').default);



const app = new Vue({
    el: '#app',
    router
});
