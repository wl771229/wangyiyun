<template>
    <div>
      <mt-index-list>
        <mt-index-section v-for="(item,index) in lists" :index="item.name" :key="index">
          <mt-cell v-for="(items,index2) in item.nameList" :title="items.name" :key="index2"></mt-cell>
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
                lists:[
                  {
                      name:'A',
                      nameList:[
                        {
                            name:'阿达'
                        },
                        {
                            name:"阿尔"
                        },
                        {
                          name:"阿尔"
                        },
                        {
                          name:"阿尔"
                        },
                        {
                          name:"阿尔"
                        },
                        {
                          name:"阿尔"
                        },
                        {
                          name:"阿尔"
                        },
                        {
                          name:"阿尔"
                        }
                      ]
                  },
                  {
                    name:'B',
                    nameList:[
                      {
                        name:"阿尔"
                      },
                      {
                        name:"阿尔"
                      },
                      {
                        name:"阿尔"
                      },{
                        name:"阿尔"
                      },{
                        name:"阿尔"
                      }
                    ]
                  }
                ]
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
            artistList.forEach((item) =>{
              item.piny = pinyin(item.name, {
                style: pinyin.STYLE_INITIALS, // 设置拼音风格
                heteronym: true
              })
            })
            console.log(artistList)
//


          })

        },

//        字母排序
        sorting(){

        }
      },
      mounted(){

        this.list()
      }
    }
</script>

<style scoped>

</style>
