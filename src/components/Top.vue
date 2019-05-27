
<template>
  <div>
      <!--<div @click="jia" style="color: red">加</div>-->
    <!--排行榜-->
    <div class="topList" v-for="(item,index) in list" :key="item.id" @click="songDetail(index)">
      <span>{{index+1}}</span>
      <div class="topList_name">
        <p class="topList_gname">{{item.name}}</p>
        <p>{{item.ar[0].name}}</p>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  export default {
      props: ['list'],
    data(){
      return{

      }
    },
    methods: {
      ...mapActions(['Index','SongList']),

//      详情
      songDetail(index){

          this.Index(index);
          this.SongList(this.list)

      },
    },
    mounted(){

    }




  }
</script>
<style lang="scss" scoped="">


</style>
