<template>
    <div class="login">

      <img class="logo" src="../../static/img/wyy.png" alt="">
      <div class="login_password">
        <input type="text" placeholder="请输入账号" v-model="name">
        <input type="text" placeholder="请输入密码" v-model="password">
        <button class="btn" @click="btn">登录</button>
      </div>



    </div>
</template>

<script>
    export default {

        data () {
            return {
              name:'13594232798',
              password:'mizi7729..'
            }
        },
      methods:{
        btn(){
          let name = this.name;
          let password = this.password;
          this.$axios.get(`/login/cellphone?phone=${name}&password=${password}`,
            {
              xhrFields: { withCredentials: true }
            }
          ).then((res) => {
              if(res.data.code == 200){

                  this.$router.push({ path: '/everydaysong' })
              }

          })

        }
      }
    }
</script>

<style scoped>
  .login{
    text-align: center;
  }
  .login .logo{
    width: 85px;
    height: 85px;
    margin-top: 100px;
  }
  .login_password{
    margin-top: 80px;
  }
  .login_password input{
    display: block;
    width: 80%;
    height: 35px;
    border: 1px #e82202 solid;
    margin: 20px auto;
    border-radius: 30px;
    text-align: center;
  }
  .login_password .btn{
    width: 80%;
    height: 35px;
    border-radius: 30px;
    background-color: #e82202;
    color: #fff;
    margin-top: 50px;



  }
</style>
