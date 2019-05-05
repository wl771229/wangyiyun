<template>
    <div>
      歌单详情{{id}}
    </div>
</template>

<script>
    export default {

        data () {
            return {

            }
        },
      computed:{
        id(){
          return this.$route.query.id
        }


      },
      mounted(){

      }
    }
</script>

<style scoped>

</style>
