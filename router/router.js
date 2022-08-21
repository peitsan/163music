import Vue from 'vue';

import VueRouter from "vue-router";

Vue.use(VueRouter)
// 路由权限
 const router = new VueRouter ({
    mode:'history',
	scrollBehavior (to, from, savedPosition) {
	    return savedPosition || { x: 0, y: 0 }
	  },
    routes: [
        {
            path: '/',
            redirect:'home',
        },
		{
		    path: '/home',
		    component: () => import('@/page/home/home'),
		    meta: {title: '首页'},
				 
		},
		{
		    path: '/search',
		    component: () => import('@/page/search/search'),
		    meta: {title: '搜索'},
				 
		},
		{
		    path: '/recommend',
		    component: () => import('@/page/recommend/recommend'),
		    meta: {title: '推荐'},
				 
		},
		{
		    path: '/tracks',
		    component: () => import('@/page/tracks/tracks'),
		    meta: {title: '推荐'},
				 
		},
		{
		    path: '/player',
		    component: () => import('@/page/player/player'),
		    meta: {title: '播放'},
				 
		},
		
    ]
})

// function addRe(naviData){
//     // 动态数据追加
//     naviData.forEach(v=>{    
//         router.push({
//             path:v.path,
//             // name:v.name,
//             // meta:{title:v-title},
//             component:()=>import('../pages/'+v.component)
//         })
//     })
//     return router
// }
export default router