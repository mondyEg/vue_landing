<template>
  <div class="login-section layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li>
            <router-link :to="{ name: 'reg' }">注册</router-link>
          </li>
        </ul>
        <div
          class="layui-form layui-tab-content"
          id="LAY_ucm"
          style="padding: 20px 0"
        >
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <FormLabel class="layui-form">
                <div class="layui-form-item">
                  <label for="L_email" class="layui-form-label">用户名</label>
                  <div class="layui-input-inline">
                    <Field
                      type="text"
                      id="L_email"
                      name="username"
                      v-model="username"
                      placeholder="请输入用户名"
                      autocomplete="off"
                      class="layui-input"
                      rules="required|email"
                    />
                  </div>
                  <ErrorMessage
                    class="layui-form-mid error"
                    name="username"
                  ></ErrorMessage>
                </div>
                <div class="layui-form-item">
                  <label for="L_pass" class="layui-form-label">密码</label>
                  <div class="layui-input-inline">
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      v-model="password"
                      placeholder="请输入密码"
                      autocomplete="off"
                      class="layui-input"
                      rules="required|minLength:8|maxLength:16"
                    />
                  </div>
                  <ErrorMessage
                    class="layui-form-mid error"
                    name="password"
                  ></ErrorMessage>
                </div>
                <div class="layui-form-item">
                  <label for="L_vercode" class="layui-form-label">验证码</label>
                  <div class="layui-input-inline">
                    <Field
                      type="text"
                      id="L_vercode"
                      v-model="code"
                      name="code"
                      placeholder="请输入验证码"
                      autocomplete="off"
                      class="layui-input"
                      rules="required|minLength:4|maxLength:4"
                    />
                  </div>

                  <div class="layui-input-inline svg" v-html="svg"></div>

                  <ErrorMessage
                    class="layui-form-mid error"
                    name="code"
                  ></ErrorMessage>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn" lay-filter="*">立即登录</button>
                  <span style="padding-left: 20px">
                    <router-link :to="{ name: 'forget' }"
                      >忘记密码？</router-link
                    >
                  </span>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者使用社交账号登入</span>
                  <a
                    href
                    onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-qq"
                    title="QQ登入"
                  ></a>
                  <a
                    href
                    onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-weibo"
                    title="微博登入"
                  ></a>
                </div>
              </FormLabel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { Form as FormLabel, Field, ErrorMessage } from "vee-validate";
import getCode from "../api/login.js";
export default {
  name: "LoginSection",
  components: {
    FormLabel,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      username: "",
      password: "",
      code: "",
      svg: "",
    };
  },
  mounted() {
    this._getCode();
  },
  methods: {
    _getCode() {
      getCode().then((res) => {
        console.log(res);

        if (res.code === 200) {
          this.svg = res.data;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.svg {
  position: relative;
  top: -5px;
}
.error {
  color: red;
}
</style>
