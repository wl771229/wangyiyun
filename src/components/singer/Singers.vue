<template>
    <div>
      <mt-index-list>
        <mt-index-section v-for="(item,index) in artistList" :index="item[0].piny" :key="index">
          <mt-cell v-for="(items,index2) in item"   :title="items.name" :key="index2" @click.native="closeSinger(items.id)" ></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
</template>

<script>
  import { IndexList, IndexSection } from 'mint-ui';
  import pinyin from 'pinyin';
    export default {

        data () {
            return {
              artistList:''
            }
        },
      methods:{
        list(id){
          this.$axios.get(`/top/artists`,
            {
              xhrFields: { withCredentials: true }
            }
          ).then((res) => {


            let artistList = res.data.artists;

            this.allLetter(artistList)

          })
        },
  //处理字体转换
        allLetter(artistList){
          artistList.forEach((item) =>{

              let value = pinyin(item.name,{ style: pinyin.STYLE_NORMAL})[0][0].slice(0,1).toUpperCase();

               item.piny = value

          });
          this.artistList = artistList;
          return this.sorting()
        },

//  按字母排序
        sorting(){
          let artistList = this.artistList;
          artistList.sort((a,b) =>{
              if(a.piny >b.piny){
                  return 1
              }
              return -1
          });

          this.singerClass(artistList,'piny')
        },
//        相同字母之间分类
        singerClass(arr,type){
          let artistList = arr;
          var singer = {};
          var typeCount = [];
          var num = 0;
          artistList.forEach((item) =>{
            var value  = singer[item[type]];
            if(value !== undefined ){
              typeCount[value].push(item)
            }else {
              singer[item[type]] = num;
              typeCount[num] = [].concat([item]);
              num++
            }
          });
          this.artistList = typeCount;
        },
//        选择
        closeSinger(id){



          this.$router.push({
            path:'./SingerDel',
            query:{
              id


            }

          })



        },
      },
      mounted(){
        this.list()
      }
    }
</script>

<style scoped>

</style>
