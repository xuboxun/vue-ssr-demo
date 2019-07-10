import Vue from 'vue';
import Vuex from 'vuex';

import { createBlogModule } from './modules/blog';
import { createTagModule } from './modules/tag';

Vue.use(Vuex);

export function createStore() {
    return new Vuex.Store({
        modules: {
            blog: createBlogModule(),
            tag: createTagModule()
        }
    })
}
