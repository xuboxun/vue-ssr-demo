import axios from 'axios';

export const requestBlogList = () => {
    return axios.get('https://www.xuboxun.site/api/blog/list?pageSize=10&pageNum=1').then(({ status, data}) => {
        if (status === 200 && data.code === 200) {
            return data.result.items;
        } else {
            return [];
        }
    }, () => {
        return [];
    });
};

export const requestTagList = () => {
    return axios.get('https://www.xuboxun.site/api/tag/list').then(({ status, data}) => {
        if (status === 200 && data.code === 200) {
            return data.result.items;
        } else {
            return [];
        }
    }, () => {
        return [];
    });
};
