# vue-ssr-demo
a demo using vue-ssr

## Branch vue-ssr
基于vue-spa分支逐步改造成ssr

## Install & Run 
``` bash
npm install

# 开发
npm run dev

# 发布
npm run build
```

## Steps

### step-1. 进行vuex改造，Commit Id: [7f3c954](https://github.com/xuboxun/vue-ssr-demo/commit/7f3c95432ff017f0ab27407336c1df68892a4417)  
因为spa中采用比较省事儿的写法，直接在页面组件中发起ajax请求，数据存在组件的data中。  
但是当我们使用服务端渲染时：
- 如果依赖于一些异步的数据，需要在服务端渲染之前就得到这些数据，即数据预取
- 然而这时候vue组件还没有开始渲染，所以需要先把数据存在一个地方
- 当vue组件开始渲染时，需要再将预取的数据拿出来，传入组件
- 当客户端挂载时，可以理解为此时的state是spa中某一个时间点的快照，但是这个快照对于客户端来说是一个初始state，即__INITIAL_STATE__，后续的操作还要基于这个初始状态来进行状态处理。所以我们需要在客户端挂载之前获取到和之前服务端完全一样的状态数据。

为了解决上述问题，ajax请求得到的数据需要独立于视图组件之外，放置在专门的数据存储容器中。所以我们首先对项目改造，使用vuex来保存数据，将数据请求和数据存储独立成service和store。  

以上内容可参考vue ssr指南[数据预取](https://ssr.vuejs.org/zh/guide/data.html#%E6%95%B0%E6%8D%AE%E9%A2%84%E5%8F%96%E5%AD%98%E5%82%A8%E5%AE%B9%E5%99%A8-data-store)部分
