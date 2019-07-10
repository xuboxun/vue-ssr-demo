import { requestTagList } from '@/service/api';

// ! module也要工厂函数，每次返回一个新的
export function createTagModule() {
    return {
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
                // ! 注意，一定要返回promise
                return requestTagList().then(items => {
                    context.commit('setTagList', {
                        tagList: items,
                    });
                })
            }
        }
    }
}
