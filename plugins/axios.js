'use strict';

import axios from 'axios';

// 创建axios实例
const service = axios.create({
    // baseURL: process.env.BASE_API, // api的base_url
    baseURL: "https://www.deepblueai.com/api/", // api的base_url
    timeout: 12000                 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
    // Do something before request is sent
    const token = localStorage.token ? localStorage.token : null;
    if (token) {
        config.headers['token'] = token;
    }
    return config;
}, error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        let originalRequest = error.response;
        if (originalRequest && originalRequest.status === 401){
            localStorage.removeItem('token');
            router.push('/login');
        }
        console.log('err' + error);// for debug
        return Promise.reject(error);
    }
);

export default service;
