<template>
  <div class="cat">
    <div class="songlist-header">
      <img class="bg-img" :src="jpcat.coverImgUrl" alt="">
      <div class="songlist-header-m">
        <div class="songlist-header-c">
          <div class="songlist-header-c-l">
            <img  :src="jpcat.coverImgUrl" alt="">
          </div>
          <div class="songlist-header-c-r">
            <p >精品歌单</p>
            <p style="margin-top: 10px" class="fz14">{{jpcat.name}}</p>
            <p class="fz12 c99" >{{jpcat.copywriter}}</p>
          </div>
        </div>
      </div>
    </div>
    <!--歌单列表-->
    <div class="catlist">
      <div class="cat_data" v-for="item in catlist" :key="" @click="catDetail(item.id)">
        <div class="cat_img">
          <div class="play_num"><img src="../../../static/img/erji.png" alt=""> <span>{{item.playCount | integer}}</span> </div>
          <div class="cat_name"><img src="../../../static/img/wode.png" alt=""> <span>{{item.creator.nickname }}</span> </div>
          <img v-lazy="item.coverImgUrl" alt="">
        </div>
        <p class="cat_title">{{item.name}}</p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {

    data () {
      return {

        jpcat:'',
        catlist:''
      }
    },
    methods:{
      list(){
        this.$axios.get(`/top/playlist/highquality?limit=1`,
          {
            xhrFields: { withCredentials: true }
          }
        ).then((res) => {
          this.jpcat = res.data.playlists[0]


        })

      },
      topList(){
        this.$axios.get(`/top/playlist`,
          {
            xhrFields: { withCredentials: true }
          }
        ).then((res) => {
          this.catlist = res.data.playlists

        })
      },
//      获取歌单详情
      catDetail(id){


          this.$router.push({
            path:'/catdetail',
            query:{
                id:id
            }
          })

//        this.$axios.get(`/playlist/detail?id=${val}`,
//          {
//            xhrFields: { withCredentials: true }
//          }
//        ).then((res) => {
//
//
//        })
      }
    },
    mounted(){
      this.list();
      this.topList()
    }
  }
</script>

<style scoped>
  .songlist-header{
    width: 100%;
    height: 160px;
    position: relative;
  }
  .bg-img{
    width: 100%;
    height: 100%;
    filter: blur(5px);
  }
  img{
    width: 100%;
    height: 100%;
    border-radius: 3px;

  }
  .songlist-header-m{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top:0;
    background-color: rgba(0,0,0,.5);
  }
  .songlist-header-c {
    height: 90px;
    width: 100%;
    display: flex;
    margin-top: 40px;
    color: #fff;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .songlist-header-c-l{
    width: 90px;
  }
  .songlist-header-c-r{
    display: flex;
    padding-left: 13px;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    line-height: 20px;
  }
  .catlist{
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
    box-sizing: border-box;

  }
  .cat_data{
    width: calc(50% - 7.5px);
    margin-top: 18px;
    margin-left: 5px;
  }
  .cat_img{
    width: 100%;
    height: 170px;
    position: relative;
    font-size:12px;
    color: #fff;

  }
  .play_num img,.cat_name img{
    width: 15px;
    height: 15px;
    margin-right: 5px;

  }
  .play_num, .cat_name{
    position: absolute;
    display: flex;;
    align-items: center;

  }

  .play_num{
    right: 10px;
    top:5px

  }
  .cat_name{
    left: 10px;
    bottom:5px
  }
  .cat_img .img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .cat_title{
    font-size:14px;
    line-height: 20px;
    padding-top: 5px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;

  }



</style>
