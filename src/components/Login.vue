<template>
  <div>
    <!-- 表单 -->
    <h1>测试登录</h1>
    <ul>
      <li>
        <label for="uname">用户名: </label>
        <input type="text" v-model='username' id="uname">
      </li>
      <li>
        <label for="pw">密码: </label>
        <input type="text" v-model='password' id="pw">
      </li>
      <li>
        <input type="button" value="提交" @click="login">
      </li>
    </ul>
  </div>
</template>

<script>
import {login} from '../api/api.js'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      let params = {
        username: this.username,
        password: this.password
      }
      login(params).then(res => {
        if (res.meta.status === 200) {
          this.$router.push({name: 'home'})
        } else {
          console.log('用户或者密码不正确')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
