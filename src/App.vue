<template>
  <div id="app">
    <!--<keep-alive >-->
    <!--<router-view/>-->
    <!--</keep-alive>-->

    <keep-alive>
      <!--这里是会被缓存的组件-->

      <router-view v-if="this.$route.meta.keepAlive"></router-view>

    </keep-alive>

    <router-view v-if="!this.$route.meta.keepAlive"></router-view>



  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
