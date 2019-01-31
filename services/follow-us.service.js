'use strict';
import fetch from '../plugins/axios';

export default {
    // 公司奖项列表
    GetAwardList(){
        return fetch({
            url: '/AboutUs/GetAwardList',
            method: 'GET',
        });
    },

    //公司基本详情
    GetBaseInfo(){
        return fetch({
            url: '/AboutUs/GetBaseInfo',
            method: 'GET',
        });
    },

    //公司发展历史
    GetHistoryList(){
        return fetch({
            url: '/AboutUs/GetHistoryList',
            method: 'GET',

        });
    },

    //人才招聘岗位信息
    GetTalentRecruitList(PageIndex,PageSize){
        return fetch({
            url: '/Recruitment/RecruitmentInfo',
            method: 'POST',
            data:{
                PageIndex:PageIndex,
                PageSize:PageSize,
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
    }
};

