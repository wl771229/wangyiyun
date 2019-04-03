<template>
  <!--播放组件-->
    <div class="play">

      <audio :src="url" controls ref="audio"  @pause="onPause"  @play="onPlay">
      </audio>
    </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
    export default {

        data(){
            return{
              url:'',
              newSong:''
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
//            获取到url地址之后 说明要播放，所以这里要改变播放的状态
              this.PlayStatus().then(() =>{
                this.play()

              })

          })

        },

        // 播放音频
        play () {
          this.$refs.audio.play()

        },
        // 暂停音频
        pause () {
          this.$refs.audio.pause()
        },
        // 当音频播放
        onPlay () {
          console.log("正在播放")
        },
        // 当音频暂停
        onPause () {
          console.log("正在暂停");
//          当这里暂停的时候，判断是暂停还是一首歌播放完毕  ， 如果是一首歌播放完毕 ， 那么，获取当前的列表， 以及当前的索引，然后加一，拿到当前的id，去获取当前的播放详情 ， 然后继续播放
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
    width: 100%;
    height: 50px;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    bottom: 0;
  }

</style>
