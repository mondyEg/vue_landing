<template>
  <div class="reg-section layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li>
            <router-link :to="{ name: 'login' }">登入</router-link>
          </li>
          <li class="layui-this">注册</li>
        </ul>
        <div
          class="layui-form layui-tab-content"
          id="LAY_ucm"
          style="padding: 20px 0"
        >
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <FormLabel method="post">
                <div class="layui-form-item">
                  <label for="L_email" class="layui-form-label">邮箱</label>
                  <div class="layui-input-inline">
                    <Field
                      type="text"
                      name="username"
                      class="layui-input"
                      placeholder="将会成为您唯一的登入名"
                      rules="required|email"
                    />
                  </div>
                  <ErrorMessage
                    class="layui-form-mid error"
                    name="username"
                  ></ErrorMessage>
                </div>
                <div class="layui-form-item">
                  <label for="L_username" class="layui-form-label">昵称</label>
                  <div class="layui-input-inline">
                    <Field
                      type="text"
                      name="nickname"
                      class="layui-input"
                      rules="required"
                    />
                  </div>
                  <ErrorMessage
                    class="layui-form-mid error"
                    name="nickname"
                  ></ErrorMessage>
                </div>
                <div class="layui-form-item">
                  <label for="L_pass" class="layui-form-label">密码</label>
                  <div class="layui-input-inline">
                    <Field
                      type="password"
                      name="password"
                      class="layui-input"
                      rules="required|minLength:8|maxLength:16"
                    />
                  </div>
                  <ErrorMessage
                    class="layui-form-mid error"
                    name="password"
                  ></ErrorMessage>
                  <div class="layui-form-mid layui-word-aux">8到16个字符</div>
                </div>
                <div class="layui-form-item">
                  <label for="L_repass" class="layui-form-label"
                    >确认密码</label
                  >
                  <div class="layui-input-inline">
                    <Field
                      type="password"
                      name="confirmation"
                      class="layui-input"
                      rules="required|confirmed:password"
                    />
                  </div>
                  <ErrorMessage
                    class="layui-form-mid error"
                    name="confirmation"
                  ></ErrorMessage>
                </div>
                <div class="layui-form-item">
                  <label for="L_vercode" class="layui-form-label">验证码</label>
                  <div class="layui-input-inline">
                    <Field
                      type="text"
                      id="L_vercode"
                      name="code"
                      placeholder="请输入验证码"
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
                  <button class="layui-btn" lay-filter="*" lay-submit>
                    立即注册
                  </button>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者直接使用社交账号快捷注册</span>
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
import { Form as FormLabel, Field, ErrorMessage } from "vee-validate";
import getCode from "../api/login.js";

export default {
  name: "RegSection",
  components: {
    FormLabel,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      username: "",
      code: "",
      password: "",
      confirmation: "",
      nickname: "",
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
.error {
  color: red;
}

.svg {
  position: relative;
  top: -5px;
}
</style>
