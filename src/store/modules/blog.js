import { requestBlogList } from '@/service/api';

const blogModule = {
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
            requestBlogList().then(items => {
                context.commit('setBlogList', {
                    blogList: items,
                });
            })
        }
    }
};

export default blogModule;
