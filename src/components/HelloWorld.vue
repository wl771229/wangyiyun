<template>
  <div class="hello">
      <div class="box" @click="login">
        登录
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      phone: '13594232798',
      password:'mizi7729..'
    }
  },
  methods:{
        login(){
          this.$axios.get(`/login/cellphone?phone=${this.phone}&password=${this.password}`,
            {
              xhrFields: { withCredentials: true }
            }
          ).then((res) => {

            })

        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>

</style>
