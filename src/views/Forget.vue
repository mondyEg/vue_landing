<template>
  <div class="forget-section layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li>
            <router-link :to="{ name: 'login' }">登入</router-link>
          </li>
          <li class="layui-this">
            找回密码
            <!--重置密码-->
          </li>
        </ul>
        <div
          class="layui-form layui-tab-content"
          id="LAY_ucm"
          style="padding: 20px 0"
        >
          <div class="layui-tab-item layui-show">
            <!-- 重置密码 -->
            <!--
          <div class="fly-msg">{{d.username}}，请重置您的密码</div>
          <div class="layui-form layui-form-pane"  style="margin-top: 30px;">
            <form action="/user/repass" method="post">
              <div class="layui-form-item">
                <label for="L_pass" class="layui-form-label">密码</label>
                <div class="layui-input-inline">
                  <input type="password" id="L_pass" name="pass" required lay-verify="required" autocomplete="off" class="layui-input">
                </div>
                <div class="layui-form-mid layui-word-aux">6到16个字符</div>
              </div>
              <div class="layui-form-item">
                <label for="L_repass" class="layui-form-label">确认密码</label>
                <div class="layui-input-inline">
                  <input type="password" id="L_repass" name="repass" required lay-verify="required" autocomplete="off" class="layui-input">
                </div>
              </div>
              <div class="layui-form-item">
                <label for="L_vercode" class="layui-form-label">人类验证</label>
                <div class="layui-input-inline">
                  <input type="text" id="L_vercode" name="vercode" required lay-verify="required" placeholder="请回答后面的问题" autocomplete="off" class="layui-input">
                </div>
                <div class="layui-form-mid">
                  <span style="color: #c00;">{{d.vercode}}</span>
                </div>
              </div>
              <div class="layui-form-item">
                <input type="hidden" name="username" value="{{d.username}}">
                <input type="hidden" name="email" value="{{d.email}}">
                <button class="layui-btn" alert="1" lay-filter="*" lay-submit>提交</button>
              </div>
            </form>
          </div>

          <div class="fly-error">该重置密码链接已失效，请重新校验您的信息</div>
          <div class="fly-error">非法链接，请重新校验您的信息</div>
            -->

            <div class="layui-form layui-form-pane">
              <FormLabel method="post">
                <div class="layui-form-item">
                  <label for="L_email" class="layui-form-label">邮箱</label>
                  <div class="layui-input-inline">
                    <Field
                      type="text"
                      id="L_email"
                      name="username"
                      rules="required|email"
                      autocomplete="off"
                      class="layui-input"
                      placeholder="请输入邮箱"
                    />
                  </div>
                  <ErrorMessage
                    class="layui-form-mid error"
                    name="username"
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
                  <!-- <div class="layui-form-mid">
                    <span style="color: #c00">Hello</span>
                  </div> -->
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn" alert="1" lay-filter="*" lay-submit>
                    提交
                  </button>
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
