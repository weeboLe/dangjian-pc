<template>
  <div class="register">
    <div class="box">
      <img src="../../assets/images/db2d51.png" />
      <div class="cc">
        <label for>
          账号：
          <input type="text" v-model="params.login_id" placeholder="请输入账号" />
        </label>

        <label for>
          密码：
          <input type="password" v-model="params.pwd" placeholder="请输入密码" />
        </label>

        <button class="btn" @keyup.enter="login" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api";
export default {
  name: "Login",
  data() {
    return {
      params: {
        login_id: "",
        pwd: ""
      }
    };
  },
  methods: {
    login() {
      if (!this.testing()) return;
      login
        .login(this.params)
        .then(res => {
          if (res.type == "success") {
            localStorage.setItem("ticket", res.data.ticket);
            localStorage.setItem("sessionId", res.data.sessionId);
            localStorage.setItem("user", JSON.stringify(res.data));
            this.$router.push({ name: "Index" });
          } else {
            this.$message.error({ message: "信息错误请核对后提交" });
          }
        })
        .catch(e => {});
    },
    testing() {
      let message = "";
      if (!this.params.login_id.trim()) {
        message = "请填写用户名";
        this.$message.error({ message });
        return false;
      }
      if (!this.params.pwd.trim()) {
        message = "请填写密码";
        this.$message.error({ message });
        return false;
      }
      return true;
    }
  },
  created() {
    let that = this;
    document.onkeypress = function(e) {
      var keycode = document.all ? event.keyCode : e.which;
      if (keycode == 13) {
        that.login();
        return false;
      }
    };
  }
};
</script>
<style scoped>
.register {
  width: 100%;
  height: 100%;
  background: url("~@/assets/images/bg.jpg") no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  position: relative;
}

.box {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.register img {
  width: 100%;
}

.cc {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0.625rem;
  box-sizing: border-box;
  font-size: 1.25rem;
  margin: 10px 50px 0;
  padding: 40px 10px;
}

.cc label {
  display: block;
  margin-bottom: 30px;
}
.cc input {
  display: inline-block;
  padding: 0 10px;
  width: 20.625rem;
  line-height: 36px;
  height: 36px;
  box-sizing: border-box;
  border: 1px solid #aaa;
  border-radius: 5px;
  font-size: 16px;
}

.cc .btn {
  display: inline-block;
  width: 18.9375rem;
  height: 3.125rem;
  line-height: 3.125rem;
  background: #ff0000;
  border-radius: 2.1875rem;
  color: #fff;
  font-size: 1.25rem;
  border: 0;
}

.cc .btn:active {
  box-shadow: 0 2px 0px 1px #aaa;
}
input:focus,
button:focus {
  outline: none;
}
</style>