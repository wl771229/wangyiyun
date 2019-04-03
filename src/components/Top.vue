
<template>
  <div>
    <!--排行榜-->
    <div class="topList" v-for="(item,index) in topList" :key="item.id" @click="songDetail(index)">
      <span>{{index+1}}</span>
      <div class="topList_name">
        <p>{{item.name}}</p>
        <p>{{item.ar[0].name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  export default {

    data(){
      return{
        topList:''
      }
    },
    methods: {
      ...mapActions(['Index','SongList']),
        list(){
          this.$axios.get(`/top/list?idx=3`,
            {
              xhrFields: { withCredentials: true }
            }
          ).then((res) => {
            this.topList = res.data.playlist.tracks

          })

        },
//      详情
      songDetail(index){
          this.Index(index)
          this.SongList(this.topList)

//        this.$axios.get(`/song/url?id=${id}`,
//          {
//            xhrFields: { withCredentials: true }
//          }
//        ).then((res) => {
//            let songUrl = res.data.data[0].url;
//
//
//        })
      },
    },
    mounted(){
      this.list()
    }




  }
</script>
<style lang="scss" scoped="">
  .topList{
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 20px;
    border-bottom: 3px #f6f6f6 solid;

  }
  .topList_name{
    line-height: 25px;
    margin-left: 20px;
  }


</style>
