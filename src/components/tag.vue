<template>
    <div>
        <h1>Tag List</h1>
        <ul>
            <li v-for="(tag, index) in tagList" :key="index">{{tag.title}}</li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        asyncData({ store, route }) {
            return store.dispatch('tag/reqTagList')
        },
        computed: {
            ...mapState('tag', {
                tagList: state => state.tagList
            })
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
