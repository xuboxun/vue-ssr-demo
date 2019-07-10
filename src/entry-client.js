import { createApp } from './main';

const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
    // 添加路由钩子函数，用于处理 asyncData，在初始路由 resolve 后执行，
    router.beforeResolve((to, from, next) => {
        const matched = router.getMatchedComponents(to);
        const prevMatched = router.getMatchedComponents(from);

        // 对比非预渲染的组件, 找出两个匹配列表的差异组件
        let diffed = false;
        const activated = matched.filter((c, i) => {
            return diffed || (diffed = (prevMatched[i] !== c));
        });

        if (!activated.length) {
            return next();
        }

        Promise.all(activated.map(c => {
            if (c.asyncData) {
                return c.asyncData({
                    store,
                    route: to
                });
            }
        })).then(() => {
            next()
        }).catch(next)
    });

    app.$mount('#root');
});
