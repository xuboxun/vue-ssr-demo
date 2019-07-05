import { requestTagList } from '@/service/api';

const tagModule = {
    namespaced: true,
    state: {
        tagList: []
    },
    mutations: {
        setTagList(state, payload) {
            state.tagList = payload.tagList;
        }
    },
    actions: {
        reqTagList(context) {
            requestTagList().then(items => {
                context.commit('setTagList', {
                    tagList: items,
                });
            })
        }
    }
};

export default tagModule;
