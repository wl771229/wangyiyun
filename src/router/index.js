import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/components/index');
const Ranking = () => import('@/components/list/Ranking');
const Catlist = () => import('@/components/list/Catlist');
const CatDetail = () => import('@/components/list/CatDetail');
const Player = () => import('@/components/Player');
const Singer = () => import('@/components/singer/Singers');

Vue.use(Router);

export default new Router({

  // mode: 'history',  // 去掉路由地址的#
  routes: [
    {
      path: '/player',
      name: 'Player',
      component: Player,
      meta: {
        keepAlive: false // 需要被缓存
      }

    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },


    {
      path: '/ranking',
      name: '排行榜',
      component: Ranking,

    },
    {
      path: '/catlist',
      name: '歌单',
      component: Catlist,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: '/singer',
      name: '歌单',
      component: Singer,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: '/catdetail',
      name: 'catdetail',
      component: CatDetail,
      meta: {
        keepAlive: false // 需要被缓存
      }
    }
  ]
})
