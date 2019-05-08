<template>
    <div>


        <div class="CatDetail_header">
          <!--<img class="CatDetail_header_bg" src="http://p1.music.126.net/lA75qjwoP5bRO9KuDvk-rA==/109951164009528604.jpg" alt="">-->
          <div class="CatDetail_header_data"  :style="{backgroundImage:'url(' + playlist.coverImgUrl + ')'}">


          </div>

          <div class="CatDetail_header_data_t">
            <div>
              <img class="CatDetail_img" :src="playlist.coverImgUrl" alt="">

            </div>



            <div class="CatDetail_title">
              <p class="title">{{playlist.name}}</p>
              <p class="name"><img class="avatarUrl_img" :src="creator.avatarUrl" alt=""><span>{{creator.nickname}}</span></p>
            </div>
          </div>

          <!--<div class="CatDetail_header_data_b">-->
            <!--<div>-->
              <!--<img class="t_img" src="../../../static/img/wode.png" alt="">-->
              <!--<p>308</p>-->
            <!--</div>-->
            <!--<div>-->
              <!--<img class="t_img" src="../../../static/img/wode.png" alt="">-->
              <!--<p>308</p>-->
            <!--</div>-->
          <!--</div>-->
        </div>



      <div class="topList" v-for="(item,index) in playlist.tracks" :key="item.id" @click="songDetail(index)">
        <span>{{index+1}}</span>
        <div class="topList_name">
          <p class="topList_gname">{{item.name}}</p>
          <p>{{item.ar[0].name}}</p>
        </div>
      </div>

    </div>
</template>

<script>
    export default {

        data () {
            return {
              playlist:'',
              creator:''
            }
        },
      computed:{
        id(){
          return this.$route.query.id
        }

      },
    methods:{
      list(id){
        this.$axios.get(`/playlist/detail?id=${id}`,
          {
            xhrFields: { withCredentials: true }
          }
        ).then((res) => {

          this.playlist = res.data.playlist
          this.creator =  this.playlist.creator

        })

      },
    },
      mounted(){

            this.list(this.id)
      }
    }
</script>

<style scoped>

  .CatDetail_header{
    width: 100%;
    height: 220px;
    position: relative;
    overflow: hidden;
    z-index: 1;


  }
  .CatDetail_header_data{
    position: absolute;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    filter: blur(20px);
    z-index: 1;

  }
  .CatDetail_header_data_t{
    display: flex;
    padding: 0 30px;
    box-sizing: border-box;
    padding-top: 50px;
    z-index: 2;
    position: relative;



  }
  .CatDetail_header_bg{
    width: 100%;
    height: 100%;
    filter: blur(11px);
    border-radius: 5px;
  }
  .CatDetail_img{
    width: 120px;
    height: 120px;
  }
  .CatDetail_title{
    box-sizing: border-box;

    color: #fff;
    padding-left: 20px;
    padding-top: 6px;
  }
  .CatDetail_title .title{
    line-height: 25px;
  }
  .CatDetail_title .name{
    font-size:14px;
    color: #f6f6f6;
    display: flex;;
    align-items: center;
    margin-top: 20px;
  }
  .avatarUrl_img{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 3px;
  }

  .CatDetail_header_data_b{
    display: flex;
    position: absolute;;
    left: 0;
    bottom: 0;
    padding-bottom: 30px;
    font-size:14px;
    color: rgba(227, 227, 227, 0.98);
    width: 100%;
    z-index: 2;


  }
  .CatDetail_header_data_b >div{
    flex: 1;
    text-align: center;
  }
  .t_img{
    width: 30px;
    height: 30px;
  }

</style>
