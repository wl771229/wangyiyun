<template>
  <div class="catlist">
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
  </div>
</template>

<script>
  export default {

    data () {
      return {

        jpcat:''
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
    },
    mounted(){
      this.list()
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


</style>
