'use strict';
import fetch from '../plugins/axios';
export  default {
    //人才招聘列表
    GetRecruitmentInfo(PageIndex,PageSize){
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
    },
};