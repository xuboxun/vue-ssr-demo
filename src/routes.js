
const Index = () => import(/* webpackChunkName: "Index" */ './components/index');
const Tag = () => import(/* webpackChunkName: "Tag" */ './components/tag');
const Blog = () => import(/* webpackChunkName: "Blog" */ './components/blog');
const Error = () => import(/* webpackChunkName: "Error404" */ './components/error');

const routes = [
    {
        path: '/', name: 'index',
        meta: { title: '首页' },
        component: Index
    },
    {
        path: '/blog', name: 'index',
        meta: { title: '博客列表' },
        component: Blog
    },
    {
        path: '/tag', name: 'tag',
        meta: { title: '标签列表' },
        component: Tag
    },
    {
        path: '/error', name: 'error',
        meta: { title: '错误页' },
        component: Error
    },
    {
        path: '*',
        redirect: '/error'
    }
];

export default routes;
