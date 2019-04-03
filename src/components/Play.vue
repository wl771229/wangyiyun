<template>
  <!--播放组件-->
    <div class="play" v-if="player">
      <div class="singer-img">
        <img :src="newSong.al.picUrl" alt="">
      </div>
      <div class="singer-name ">
        <div>{{newSong.al.name}}</div>
        <div>{{newSong.ar[0].name}}</div>
      </div>
      <div class="play-btn" v-if="Status">

        <img class="bofang"  @click="pause('stop')" src="../../static/img/b.png" alt="">

      </div>
      <div class="play-btn"  v-else>
        <img class="bofang"  @click="play" src="../../static/img/z.png" alt="">

      </div>

      <audio :src="url"  ref="audio"  @pause="onPause"  @play="onPlay">
      </audio>


    </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
    export default {

        data(){
            return{
              url:'',
              newSong:'',
              player:''
            }
        },
      computed: {
        ...mapGetters(['songList','index','Status']),
      },
      methods:{
        ...mapActions(['Index','PlayStatus']),
//     获取url
        songUrl(id){
          this.$axios.get(`/song/url?id=${id}`,
            {
              xhrFields: { withCredentials: true }
            }
          ).then((res) => {
            this.url = res.data.data[0].url;
            this.player = true
//            获取到url地址之后 说明要播放，所以这里要改变播放的状态
              this.PlayStatus().then(() =>{

                this.play()


              })

          })

        },

        // 播放音频
        play (stop) {
          this.PlayStatus();
          this.$refs.audio.play()

        },
        // 暂停音频
        pause (stop) {
          this.PlayStatus(stop);
          this.$refs.audio.pause()
          return
        },
        // 当音频播放
        onPlay () {
          console.log("正在播放")
        },
        // 当音频暂停
        onPause () {
//            怎么判断当前是播放完毕还是点击了暂停

          console.log("正在暂停")
          if(this.Status){
            let index = this.index + 1;
            let id = this.songList[index].id;
            this.Index(index);
            this.songUrl(id)
          }
        },
      },
      watch:{
        index(newVal,oldVal){
//            获取当前的播放的id
          let id = this.songList[newVal].id;
          this.newSong = this.songList[newVal];

          console.log( this.newSong);


          this.songUrl(id)

        },



      },
      mounted(){

      },
      created(){

      }
    }
</script>
<style scoped>
  .play{
    display: flex;
    height: 55px;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  .singer-img img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .singer-name{
    width: 60%;
    padding: 5px;

  }
  .singer-name div{
    font-size:14px;
    line-height: 22px;
  }
  .play-btn{
    position: relative;
  }
  .bofang{
    width: 30px;
    height: 30px;
    position: absolute;
    left: 19px;
    top:15px
  }
  .singer-img{
    width: 55px;
    height: 55px;
    padding: 5px;
    box-sizing: border-box;

  }

</style>
