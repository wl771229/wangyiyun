<template>
    <div class="tab">

      <router-link tag="li"
                   v-for="(item,index) in items"
                   :to="item.ref"
                   :class="{menu:item.routeName==$route.name}"
                   :key="index">
          <img class="tab_img" :src="item.imgUrl" alt="">

        <p>{{item.routeName}}</p>
      </router-link>
    </div>
</template>

<script>
    export default {

        data () {
            return {
              items:[
                {
                  ref:'/',
                  name:'歌曲',
                  routeName: '歌曲',
                  imgUrl:require('../../../static/img/wyy.png')
                },
                {
                  ref:'/Book',
                  name:'歌手',
                  routeName: '歌手',
                  imgUrl:require('../../../static/img/wyy.png')
                },
                {
                  ref:'/catlist',
                  name: '歌单',
                  routeName: '歌单',
                  imgUrl:require('../../../static/img/wyy.png')
                },
                {
                  ref:'/ranking',
                  name: '排行榜',
                  routeName: '排行榜',
                  imgUrl:require('../../../static/img/wyy.png')
                }
              ]
            }
        }
    }
</script>

<style scoped>
  .tab{
    width: 100%;
    margin: 0 auto;
    display: flex;
    padding: 20px 0;
    box-sizing: border-box;
    border-bottom: 1px #f6f6f6 solid;

  }
  .tab li{
    flex: 1;
    cursor: pointer;
    letter-spacing: 3px;
    text-align: center;
    font-size:14px;

  }
  .tab_img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 5px;
    box-shadow: 2px 2px 10px rgba(255, 0, 0, 0.22);

  }


</style>
