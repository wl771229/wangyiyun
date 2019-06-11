<template>
    <div>
      <top :list="singerplay"></top>
    </div>
</template>

<script>
  import top from  "../Top.vue"
    export default {

        data () {
            return {
                singerplay:''
            }
        },
      components:{
        top
      },
      computed:{

        id(){
          return this.$route.query.id
        }
      },
      methods:{
        singerList(id){

          this.$axios.get(`/artists?id=${id}`,
            {
              xhrFields: { withCredentials: true }
            }
          ).then((res) => {

            this.singerplay = res.data.hotSongs


          })
        }

      },
      mounted(){
            this.singerList(this.id)
      }
    }
</script>

<style scoped>

</style>
