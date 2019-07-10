import '@babel/polyfill';
import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import { createStore } from './store';
import { createRouter } from './routes';
import App from './App';
import './style.css';

export function createApp() {
    const router = createRouter();
    const store = createStore();

    sync(store, router);

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    });

    return { app, router, store };
}
