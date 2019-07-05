import Vue from 'vue';
import Vuex from 'vuex';

import blogModule from './modules/blog';
import tagModule from './modules/tag';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        blog: blogModule,
        tag: tagModule
    }
});

export default store;
