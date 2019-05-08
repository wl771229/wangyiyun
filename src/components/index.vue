
<template>
    <div>
      <input type="text">

      <!--banner 轮播-->
      <div class="banner">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item in bannerList" :key="item.id">
            <img class="banner-img" :src="item.imageUrl" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="box">
        <div class="box-sun"></div>
      </div>
      <tablist></tablist>

        <top></top>



    </div>
</template>

<script>

  import top from  "./Top.vue"

  import tablist from  "./list/TabList.vue"
    export default {
      name:"home",
      components:{
        top,

        tablist
      },
        data(){
            return{
              bannerList:'',
              msg:'我是'
            }
        },
      methods:{
        banner(){
          this.$axios.get(`/banner`,
            {
              xhrFields: { withCredentials: true }
            }
          ).then((res) => {
              this.bannerList = res.data.banners
          })

        },

      },

     mounted(){
        this.banner()
      },






    }
</script>
<style lang="scss" scoped="">
  .banner{
    width: 100%;
    height: 160px;
    .banner-img{
      width: 100%;
      height: 100%;
    }
  }

</style>
