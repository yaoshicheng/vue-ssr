'use strict';
import fetch from '../plugins/axios';

export default {
    // banner
    bannerList(){
        return fetch({
            url: '/Banner/BannerImageInfo',
            method: 'GET',
        });
    },
    // video
    videoInfo() {
        return fetch({
            url: '/Video/VideoInfo',
            method: 'GET',
        });
    },
    // 技术展示
    technologyShow() {
        return fetch({
            url: '/TechnologyShow/TechnologyShowInfo',
            method: 'GET',
        });
    },
    // 热点新闻
    hotNews(type){
        return fetch({
            url: '/HotNews/HotNewsInfo',
            method: 'POST',
            data:{
                Position:type
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

    // 地图
    businessRange() {
        return fetch({
            url: '/BusinessRange/BusinessRangeInfo',
            method: 'GET',
        });
    },
};