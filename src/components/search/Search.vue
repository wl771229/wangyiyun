<template>
    <div class="search">
      <input type="text" class="search_input" placeholder="请输入关键字" @keyup.enter="submit" v-model="searchVal">

      <div class="hot_search">
        <h4>热门搜索</h4>
        <div class="hot_search_data">
          <span v-for="(item,index) in searchHotList" :key="index">{{item.first}}</span>
        </div>
      </div>


      <div class="hot_search" v-if="historyList">

        <div class="history">
          <h4>历史搜索</h4>
          <span @click="clear">X</span>
        </div>
        <div class="hot_search_data">
          <span v-for="item in historyList" :key="item">{{item}}</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {

        data () {
            return {
              searchHotList:'',
              historyList:'',
              searchVal:''
            }
        },
      methods:{

        searchHot(){
          this.$axios.get(`/search/hot`,
            {
              xhrFields: { withCredentials: true }
            }
          ).then((res) => {

            this.searchHotList = res.data.result.hots

          })
        },
        //      获取当前缓存
        getlocation(){
          var history=localStorage.getItem("history")?localStorage.getItem("history").split(","):'';

          this.historyList = history

        },
        submit(){

            var name = this.searchVal;
            var history=localStorage.getItem("history");
            var historyVal = '';
            if(history){
              historyVal = history+','+name
            }else {
              historyVal =  name
            }

          localStorage.setItem("history", historyVal);     // 保存当前的时间戳

          this.getlocation()

        },
        clear(){
          localStorage.clear();
          this.getlocation()
        }

      },


      mounted(){
        
        this.$axios.all([this.getlocation(), this.searchHot()])
      }
    }
</script>
<style scoped>
  .search{
    padding: 0 20px;
  }
  .search_input{
    width: 100%;
    height: 35px;
    border:1px red solid;
    border-radius: 20px;
    margin-top: 20px;
    box-sizing: border-box;
    text-align: center;
  }
  .hot_search{
    margin-top: 30px;
  }
  .hot_search_data{

    display: flex;
    align-items: center;
    margin-top: 7px;
    flex-wrap: wrap;
  }
  .hot_search_data span{
    height: 30px;
    background-color: rgba(0, 0, 0, 0.1);
    color: black;
    margin-right: 20px;
    padding: 0 20px;
    border-radius: 20px;
    font-size:12px;
    line-height: 30px;
    margin-top: 10px;
  }
  .history{
    display: flex;
    justify-content: space-between;
  }
</style>
