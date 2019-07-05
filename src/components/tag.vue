<template>
    <div>
        <h1>Tag List</h1>
        <ul>
            <li v-for="(tag, index) in tagList" :key="index">{{tag.title}}</li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                tagList: []
            }
        },
        created() {
            axios.get('https://www.xuboxun.site/api/tag/list').then(({ status, data}) => {
                if (status === 200 && data.code === 200) {
                    this.tagList = data.result.items;
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
    ul {
        display: flex;
        flex-wrap: wrap;
    }
    li {
        border-radius: 4px;
        padding: 5px 15px;
        margin: 10px;
        color: #666;
        background: #e8e8e8;
    }
</style>
