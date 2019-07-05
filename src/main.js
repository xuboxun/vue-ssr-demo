import '@babel/polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store';
import routes from './routes';
import App from './App';
import './style.css';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});


new Vue({
    el: '#root',
    store,
    router: router,
    render: h => h(App)
});
