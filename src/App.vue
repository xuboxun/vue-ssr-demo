<template>
    <div class="app">
        <div class="nav">
            <h1>Nav</h1>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/tag">Tag</router-link></li>
                <li><router-link to="/blog">Blog</router-link></li>
            </ul>
        </div>
        <div class="body">
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    };
</script>

<style lang="scss">
    .app {
        width: 100%;
        height: 100%;

        .nav {
            width: 150px;
            height: 100%;
            border-right: 1px solid #8c8c8c;
            position: fixed;
            top: 0;
            h1 {
                text-align: center;
                line-height: 80px;
            }
            ul {
                width: 100%;
                padding: 0;
                li {
                    a {
                        display: inline-block;
                        width: 100%;
                        text-align: center;
                        line-height: 30px;
                        color: #1890ff;
                    }
                }
            }
        }
        .body {
            width: 100%;
            padding-left: 150px;
            .content {
                padding: 0 20px;
                h1 {
                    line-height: 80px;
                }
            }
        }
    }
</style>
