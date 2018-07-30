<template>
  <div class="container">
    <div class="login-box">
      <div class="title-box">
        <p class="title">登录</p>
      </div>
      <div class="edit-box">
        <img
          class="icon"
          src="../assets/images/ic_login_account.png">
        <input
          class="input"
          placeholder="账号" >
      </div>
      <div class="edit-box">
        <img
          class="icon"
          src="../assets/images/ic_login_password.png">
        <input
          class="input"
          type="password"
          placeholder="密码" >
      </div>
      <div class="verify-box">
        <div
          class="edit-box"
          style="width: 40%;margin: 0;float: left">
          <img
            class="icon"
            src="../assets/images/ic_login_check_code.png">
          <input
            class="input"
            style="width: 0"
            placeholder="验证码"
            maxlength="4" >
        </div>
        <img
          class="img-verify"
          arc="code"
          id="code"
          @click="event().onVerifyImgClicked()">
      </div>
      <el-button
        type="primary"
        class="login-btn"
        @click="event().onLogin()">登录</el-button>
    </div>
  </div>
</template>

<script>

import { encrypt } from '../filters/filter'

export default {
  data() {
    return {
      code: '',
      permissionList: [
        {
          name: '权限管理',
          children: [],
        },
        {
          name: '样例管理',
        },
      ],
    };
  },

  created() {},

  mounted() {
    this.handler().refreshCode();
  },

  methods: {

    event() {
      const self = this;
      return {
        onVerifyImgClicked() {
          self.handler().refreshCode();
        },

        onLogin() {
          const jsonStrPer = JSON.stringify(self.permissionList)
          // 对权限列表进行加密
          const encryptPer = encrypt(jsonStrPer).toString()
          sessionStorage.setItem('permission', encryptPer)
          self.$router.push({
            path: 'index',
          });
        },
      };
    },

    network() {
      return {
        getListA() {},
      };
    },

    handler() {
      const self = this;
      return {
        refreshCode() {
          // eslint-disable-next-line no-undef
          const res = verifyCode();
          const img = document.getElementById('code');
          img.src = res.dataURL;
          self.code = res.code;
        },
      };
    },
  },
  watch: {},
  computed: {},
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
}

.title-box {
  width: 80%;
  margin: 0 auto;
}

.title {
}

.login-box {
  width: 400px;
  height: 300px;
  margin: auto auto;
  border: 1px solid darkgray;
}

.login-box .edit-box {
  margin-bottom: 20px;
}

.edit-box {
  display: flex;
  align-items: center;
  width: 80%;
  height: 40px;
  margin: 0 auto;
  padding: 0 12px;
  border: 1px solid darkgray;
}

.edit-box .icon {
  width: 22px;
  margin-right: 20px;
}

.edit-box .input {
  flex: 1;
  outline: none;
  border: none;
}

.verify-box {
  position: relative;
  width: 80%;
  height: 40px;
  margin: 0 auto;
}

.login-btn {
  display: block;
  width: 80%;
  margin: 20px auto;
}

.img-verify {
  float: left;
  width: 100px;
  height: 40px;
  margin-left: 20px;
}
</style>
