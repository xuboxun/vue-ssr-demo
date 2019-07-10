import { requestBlogList } from '@/service/api';

// ! module也要工厂函数，每次返回一个新的
export function createBlogModule() {
    return {
        namespaced: true,
        state: {
            blogList: []
        },
        mutations: {
            setBlogList(state, payload) {
                state.blogList = payload.blogList;
            }
        },
        actions: {
            reqBlogList(context) {
                // ! 注意，一定要返回promise
                return requestBlogList().then(items => {
                    context.commit('setBlogList', {
                        blogList: items,
                    });
                })
            }
        }
    }
}
