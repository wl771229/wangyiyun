<template>
  <div id="app">
    <!--<keep-alive >-->
    <!--<router-view/>-->
    <!--</keep-alive>-->

    <keep-alive>
      <router-view v-if="this.$route.meta.keepAlive"></router-view>

    </keep-alive>

    <router-view v-if="!this.$route.meta.keepAlive"></router-view>

    <play></play>


  </div>
</template>

<script>
  import play from  "./components/Play.vue"
export default {
  name: 'App',
  components:{
    play
  },
}
</script>

<style>
  #app{
    padding-bottom: 55px;
  }


</style>
