'use strict';
import fetch from '../plugins/axios';

export default {
    // 解决方案
    solutionList(){
        return fetch({
            url: '/Solution/GetList',
            method: 'GET',
        });
    },
    //应用系统平台
    getSystemLink(){
        return fetch({
            url: '/AboutUs/GetSystemLink',
            method: 'GET',
            transformRequest: [function (result) {
                let ret = ''
                for (let it in result) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(result[it]) + '&';
                }
                return ret;
            }],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
    },
};