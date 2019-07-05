<template>
    <div>
        <h1>Blog</h1>
        <ul>
            <li v-for="(blog, index) in blogList" :key="index">{{blog.title}}</li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                blogList: []
            }
        },
        created() {
            axios.get('https://www.xuboxun.site/api/blog/list?pageSize=10&pageNum=1').then(({ status, data}) => {
                if (status === 200 && data.code === 200) {
                    this.blogList = data.result.items;
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
    li {
        line-height: 35px;
        color: #666;
    }
</style>
