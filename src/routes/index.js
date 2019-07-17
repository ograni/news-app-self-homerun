import Vue from "vue";
// vue와 연결시켜주기 위해 vue를 import

import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import NotFound from "../views/NotFound.vue";
//생성한 컴포넌트를 연결하기

import VueRouter from 'vue-router'
// 설치한 라우터를 import

Vue.use(VueRouter)
//플러그인을 사용할때 Vue.use 를 사용

//각각의 라우터의 정보들을 담아준다.
export let router = new VueRouter({
    mode:'history',
    routes: [
        {
            path: "/",
            redirect: "/news",
        },
        {
            //페이지의 url
            path: "/news",
            //해당 url에서 표시된 페이지 컴포넌트
            component: NewsView,
        }, {
            path: "/ask",
            component: AskView,
        }, {
            path: "/jobs",
            component: JobsView,
        },
        {
            path: "*",
            component: NotFound,
        },
    ]
})