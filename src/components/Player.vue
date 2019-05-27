<template>
    <div class="player">

      <!-- 简单元素 -->

<div class="player_bg">
  <img class="bg_img" :src="playSongImg" alt="">

</div>


      <div class=" player_img " :style="trans">
        <img :class=" { rotate:show }"   :src="playSongImg" alt="">
      </div>


        <div class="player_zj">

          <div class="player_zj_pro">
            <span>{{Time | time}}</span>
            <div class="player_progress">
              <mt-progress :value="Time/(endTime/100)" :bar-height="1"></mt-progress>

            </div>
            <span>{{endTime | time}}</span>
          </div>


          <div class="player_zj_btn">


            <img src="../../static/img/shangyishou.png" alt="">
            <img class="zorb" src="../../static/img/zanting.png" alt="">
            <img src="../../static/img/shangyishou_1.png" alt="">
          </div>


        </div>
    </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {

        data () {
            return {
              show:true,
              trans:{
                transform:'',
                color:''
              },
              timer:null,
             jd:0,
             sin:'',
              cos:'',
              playSong :'',
              playSongImg:'',
              ci:'',
              endTime:'',


            }
        },
      computed: {
        ...mapGetters(['songList','index','Status','Time']),

      },

      methods:{
        btnshow(){
          this.trans.transform = `matrix(${this.cos}, ${this.sin}, -${this.sin}, ${this.cos}, 0, 0)`;

          this.show = false
          clearInterval(this.timer)

        },
        goshow(){

            this.rotate()
          this.show = true

        },
        rotate(){
          this.timer = setInterval(() =>{
            this.jd+=12;
            var radian = Math.PI / 180 *  this.jd // 算出弧度
            this.sin = Math.sin(radian) // 计算 sinθ
            this.cos = Math.cos(radian) // 计算 cosθ

          },908)
        },

//歌词
        songCi(){
            let id =  this.songList[this.index].id
          this.$axios.get(`/lyric?id=${id}`,
            {
              xhrFields: { withCredentials: true }
            }
          ).then((res) => {



            this.ci = res.data.lrc //歌词数据

          })
        },

//秒转分
      s_to_hs(s){

          var h;
          h  =   Math.floor(s/60);
          s  =   s%60;
          h    +=    '';
          s    +=    '';
          h  =   (h.length==1)?'0'+h:h;
          s  =   (s.length==1)?'0'+s:s;

        return h+':'+Math.floor(Number(s));
  }

      },

      mounted(){


        this.rotate();
        this.songCi();
        this.playSong = this.songList[this.index];

        this.playSongImg =  this.playSong.al.picUrl;

        this.endTime = this.playSong.dt / 1000

        console.log( Math.floor(Number(this.endTime)))





      }
    }
</script>

<style scoped>

  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s
  }
  .fade-enter, .fade-leave-to  {
    opacity: 0
  }



  @keyframes changDeg{
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
.rotate{
  animation: changDeg 30s linear 0s infinite;

}
.player{
  position: relative;
  padding-top: 30px;

}

.bg_img{
  position: absolute;
  left: 0;
  top:0;
  width: 100%;
  height: 100vh;
  filter: blur(50px);
  z-index: -1;
}
  .player_img{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin:  0px auto;
  overflow: hidden;
    border:10px #ccc solid;



  }
  .player_img img{
    width: 100%;
    height: 100%;

  }
  .player_zj{
    position: fixed;
    left: 0;
    bottom: 40px;
    width: 100%;
  }
  .player_zj_pro{
    display: flex;;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  .player_zj_pro span{
    margin: 0 10px;
    font-size:12px;
    color: #fff;
  }
  .player_progress{
    width: 60%;
  }
  .player_zj_btn{
    width: 55%;
    display: flex;;
    align-items: center;
    justify-content: space-between;
    margin:  0 auto;
  }
  .player_zj_btn img{

    width: 25px;
    height: 25px;


  }
  .zorb{
    width: 40px !important;
    height: 40px !important;
  }
</style>
