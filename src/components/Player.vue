<template>
    <div class="player">

      <!-- 简单元素 -->


      <img class="bg_img" :src="playSong.al.picUrl" alt="">


      <div class=" player_img " :style="trans">
        <img :class=" { rotate:show }"   :src="playSong.al.picUrl" alt="">
      </div>

    </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
    export default {

        data () {
            return {
              show:false,
              trans:{
                transform:'',
                color:''
              },
              timer:null,
             jd:0,
             sin:'',
              cos:'',
              playSong :''
            }
        },
      computed: {
        ...mapGetters(['songList','index','Status']),
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
        }

      },
      mounted(){


        this.rotate()
        console.log(this.index);
        this.playSong = this.songList[this.index]

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
  margin:  30px auto;
  overflow: hidden;
    border:10px #ccc solid;


  }
  .player_img img{
    width: 100%;
    height: 100%;

  }
</style>
