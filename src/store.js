/**
 * Created by Administrator on 2019/3/6.
 */

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);



const state = {

  index:'',  //当前的索引
  playStatus:'',  // 当前的播放状态
  songList:'',  // 当前的播放列表
  time:'', // 当前的播放时间
  playTime:0, // 当前的播放的时长

};
const getters = {
  //当前的索引
  index(state){
    return state.index
  },
  // 当前的播放列表
  songList(state){
    return state.songList
  },
  // 当前的播放状态
  Status(state){
    return state.playStatus
  },
  // 当前的播放的时长
  Time(state){
    return state.playTime
  }



};

const mutations = {
  //当前的索引
  newIndex(state,value){
      state.index = value
  },
  // 当前的播放列表
  newSong(state,value){
    state.songList = value
  },
  // 当前的播放状态
  newStatus(state,value){
    if(value === 'stop'){
      state.playStatus = false
    }else {
      state.playStatus = true
    }
  },
  // 当前的播放的时长
  newTime(state,value){
    state.playTime = value
  }
};

const actions = {
  //当前的索引
  Index(context,value) {


    context.commit('newIndex',value)
  },
// 当前的播放列表
  SongList(context,value) {

    context.commit('newSong',value)
  },
  // 当前的播放列表
  PlayStatus(context,value) {

    context.commit('newStatus',value)
  },
  // 当前的播放列表
  playTime(context,value) {

    context.commit('newTime',value)
  }
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
