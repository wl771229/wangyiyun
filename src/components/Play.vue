<template>
  <!--播放组件-->
    <div class="play" v-if="player"  @click="goplayer">

      <div class="kj"></div>
      <div class="singer-img">
        <img :src="newSong.al.picUrl" alt="">
      </div>
      <div class="singer-name ">
        <div class="singer-name-gname">{{newSong.name}}</div>
        <div>{{newSong.ar[0].name}}</div>
      </div>

      <div class="play-btn" v-if="Status">
        <svg class="progress">
          <circle class="progress__circle" cx="20" cy="20" r="20" stroke="#ccc"
                  :stroke-dasharray="num" fill="white"/>
        </svg>
        <img class="bofang"  @click.stop="pause('stop')" src="../../static/img/b.png" alt="">
      </div>


      <div class="play-btn"  v-else>
        <svg class="progress">
          <circle class="progress__circle" cx="20" cy="20" r="20" stroke="#ccc"
                  :stroke-dasharray="num" fill="white"/>
        </svg>
        <img class="bofang"  @click.stop="play" src="../../static/img/z.png" alt="">
      </div>


      <audio :src="url"   ref="audio"  @pause="onPause"  @play="onPlay">
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
              player:false,
              num:'0 125',
              timer:null,
              minNums:0
          }
        },
      computed: {
        ...mapGetters(['songList','index','Status']),
      },
      methods:{
        ...mapActions(['Index','PlayStatus','playTime']),
//     获取url
        songUrl(id){
          this.$axios.get(`/song/url?id=${id}`,
            {
              xhrFields: { withCredentials: true }
            }
          ).then((res) => {
            this.url = res.data.data[0].url;
            this.player = true;
              this.clearInterval();
//            获取到url地址之后 说明要播放，所以这里要改变播放的状态
              this.PlayStatus().then(() =>{
                this.play()
              })
          })
        },
//        清空定时器，所有归0
        clearInterval(){
          clearInterval(this.timer);
          this.minNums = 0;
          this.num = '0'+ ' '+ '125';
        },
//        进度条
        progress(dt){
          let minNum  = 125/dt ;
          let minNums = this.minNums;
          let timeNum = 0
          this.timer = setInterval(() =>{
            minNums+=minNum;
            timeNum+=1;
            if(minNums >= 125){
              this.clearInterval()
            }else {
              this.minNums = minNums;
              this.num = minNums+ ' '+ '125';
              this.playTime(timeNum)
            }
          },1000)
        },
        // 播放音频
        play () {
          this.PlayStatus();
          this.$refs.audio.play()
        },
        // 暂停音频
        pause (stop) {
          clearInterval(this.timer);
          this.PlayStatus(stop);
          this.$refs.audio.pause();
        },
        // 当音频正在播放
        onPlay () {
          this.progress(this.newSong.dt/1000)
        },
        // 当音频正在暂停
        onPause () {
          console.log("暂停")



//       怎么判断当前是播放完毕还是点击了暂停
          if(this.Status){
            let index = this.index + 1;
            let id = this.songList[index].id;
            this.Index(index);
            this.songUrl(id)
          }
        },
//        进入播放器
        goplayer(){


          this.$router.push({
            path:'/player',

          })

        }
      },
      watch:{
//         监听当前的位置的变化
        index(newVal){
          this.newSong = this.songList[newVal];   //当前播放的歌
          let id = this.newSong.id;     // 当前歌的id
          this.songUrl(id)
        },

      },

    }
</script>
<style scoped>

  .progress{
  position: relative;
  top: 10px;
  left: 13px;
  width: 40px;
  height: 40px;
  border: 1px #ccc solid;
  border-radius: 50%;

  }
  .progress__circle {
  fill: none;
  stroke: red;
  stroke-width: 2;
    z-index: 99;

  }


  .play{
    display: flex;
    height: 55px;
    background-color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px #f6f6f6 solid;
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
