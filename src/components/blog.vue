<template>
    <div>
        <h1>Blog</h1>
        <ul>
            <li v-for="(blog, index) in blogList" :key="index">{{blog.title}}</li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        asyncData({ store, route }) {
            return store.dispatch('blog/reqBlogList')
        },
        computed: {
            ...mapState('blog', {
                blogList: state => state.blogList
            })
        }
    }
</script>

<style lang="scss" scoped>
    li {
        line-height: 35px;
        color: #666;
    }
</style>
