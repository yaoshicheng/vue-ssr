'use strict'
import fetch from '../plugins/axios';

export default{
    //热点新闻列表
    GetNews(PageIndex,PageSize,Position){
        return fetch({
            url: '/HotNews/HotNewsInfo',
            method: 'POST',
            data:{
                PageIndex:PageIndex,
                PageSize:PageSize,
                Position:Position
            },
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
    //新闻详情
    GetNewDetail(newsId){
        return fetch({
            url: '/HotNews/HotNewsDetails?newsId=' + newsId,
            method: 'GET',
            data:{

            },
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