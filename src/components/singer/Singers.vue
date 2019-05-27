<template>
    <div>
      <mt-index-list>
        <mt-index-section index="A">
          <mt-cell title="Aaron"></mt-cell>
          <mt-cell title="Alden"></mt-cell>
          <mt-cell title="Austin"></mt-cell>
        </mt-index-section>
        <mt-index-section index="B">
          <mt-cell title="Baldwin"></mt-cell>
          <mt-cell title="Braden"></mt-cell>
        </mt-index-section>

        <mt-index-section index="C">
          <mt-cell title="Zack"></mt-cell>
          <mt-cell title="Zane"></mt-cell>
        </mt-index-section>

        <mt-index-section index="D">
          <mt-cell title="Zack"></mt-cell>
          <mt-cell title="Zane"></mt-cell>
        </mt-index-section>

        <mt-index-section index="E">
          <mt-cell title="Zack"></mt-cell>
          <mt-cell title="Zane"></mt-cell>
        </mt-index-section>

        <mt-index-section index="F">
          <mt-cell title="Zack"></mt-cell>
          <mt-cell title="Zane"></mt-cell>
        </mt-index-section>

        <mt-index-section index="G">
          <mt-cell title="Zack"></mt-cell>
          <mt-cell title="Zane"></mt-cell>
        </mt-index-section>

        <mt-index-section index="H">
          <mt-cell title="Zack"></mt-cell>
          <mt-cell title="Zane"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
</template>

<script>
  import { IndexList, IndexSection } from 'mint-ui';
    export default {

        data () {
            return {}
        },
      methods:{
        list(id){
          this.$axios.get(`/artist/list?cat=1001&initial=`,
            {
              xhrFields: { withCredentials: true }
            }
          ).then((res) => {


          })

        },
      },
      mounted(){

        this.list(

        )
      }
    }
</script>

<style scoped>

</style>
