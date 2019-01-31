'use strict';
import fetch from '../plugins/axios';

export default {
    // 产品优势
    productAdvantages(){
        return fetch({
            url: '/ProjectAdvantage/GetList',
            method: 'Get',
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