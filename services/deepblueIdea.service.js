'use strict';
import fetch from '../plugins/axios';

export default {
    // 深兰理念
    deepblueIdea(){
        return fetch({
            url: '/CompanyIdea/GetList',
            method: 'GET',
        });
    },
};