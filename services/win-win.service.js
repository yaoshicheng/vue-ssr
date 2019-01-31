'use strict';
import fetch from '../plugins/axios';
export  default {
    //深兰集团及全球战略合作企业
    getGetCompanyLink(){
        return fetch({
            url: '/AboutUs/GetCompanyLink',
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
    getRemark(data){
        return fetch({
            url: '/AboutUs/LeaveMessage',
            method: 'POST',
            data:{
                UserName:data.UserName,
                UserTel:data.UserTel,
                UserEmail:data.UserEmail,
                MessageContent:data.MessageContent,
                MessageType:data.MessageType,
                ProductId:data.ProductId,
            },
            transformRequest: [function (result) {
                let ret = '';
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