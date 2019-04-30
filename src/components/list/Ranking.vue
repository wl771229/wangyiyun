<template>
    <div class="ranking">
      <div class="ranking_title">官方榜</div>
          <div class="ranking_list" v-for="item in toplist" :key="item.id">
            <div class="ranking_list_img">
              <img   v-lazy="item.coverImgUrl" alt="">
            </div>
            <div class="ranking_list_data">
                <p v-for="(tracks,index) in item.tracks">{{index+1}}.{{tracks.first}}<span class="geng" :key="index" >-</span>{{tracks.second}}</p>

            </div>
          </div>
    </div>
</template>

<script>
    export default {

        data () {
            return {

              toplist:''
            }
        },
      methods:{
          list(){
            this.$axios.get(`/toplist/detail`,
              {
                xhrFields: { withCredentials: true }
              }
            ).then((res) => {
              this.toplist = res.data.list


            })

          },
      },
      mounted(){
              this.list()
      }
    }
</script>

<style scoped>
  .ranking{
    padding: 0 10px;
    box-sizing: border-box;
  }
  .ranking_title{
    line-height: 50px;
    font-weight: 600;
  }
  .ranking_list{
    display: flex;
    font-size:14px;
    color: rgba(78, 78, 78, 0.98);
    height: 113px;
    align-items: center;

  }
  .ranking_list_img{
    width: 105px;
    height: 105px;
  }
  .ranking_list_img img{
    width: 100%;
    height: 100%;
  }
  .ranking_list_data{
    margin-left: 10px;
    height: 100%;
    border-bottom: 1px #f6f6f6 solid;
    width: calc(100% - 115px);
    display: flex;
    flex-direction:column;
    justify-content:center;
    line-height: 30px;
  }
  .ranking_list_data p{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;

  }
  .geng{
    margin: 0 6px;
  }
  img[lazy=loading] {
    width: 100%;
    height: 100%;
    margin: auto;
    /*background-image: url("../../assets/img/gq.png") no-repeat center center;*/
    background-color: #ccc;
    background-size: cover;
  }


</style>
