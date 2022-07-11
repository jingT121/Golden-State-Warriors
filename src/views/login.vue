<template>
  <div class="all">
    <div class="login">
      <div class="log">
        <img class="warImg" src="https://res.nba.cn/media/img/teams/logos/GSW_logo.svg" alt="金州勇士">
        <div class="warText">Warroir</div>
      </div>
      <el-form :model="ruleForms" :rules="rules" ref="loginForm" class="login-form">
        <el-form-item label="账号" prop="user">
          <el-input type="text" placeholder="请输入账号" v-model.trim="ruleForms.user" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" placeholder="请输入密码" v-model.trim="ruleForms.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-button class="bunLog" style="width: 100%" type="primary" @click="submitForm(loginForm)">立即登录</el-button>
        <div class="not-login">
          <el-button type="primary" text @click="toRegistered">立即注册</el-button>
          <el-button type="primary" text @click="forgetPassword">忘记密码</el-button>
        </div>
        <!-- <el-form-item>
          <div style="color: #333">登录表示您已同意<a>《服务条款》</a></div>
          <div class="not-login">
            <el-button type="primary" text @click="toRegistered">立即注册</el-button>
            <el-button type="primary" text @click="forgetPassword">忘记密码</el-button>
          </div>
        </el-form-item> -->
      </el-form>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import type { FormRules } from 'element-plus'
import { getLogin } from '../api/user'

interface RulesForm {
  user: string,
  password: string
}

interface StateInterface {
  rules: FormRules,
  ruleForms: RulesForm,
  
}

export default defineComponent({
  name: 'login',
  setup () {
    const router = useRouter()
    const state = reactive<StateInterface>({
      ruleForms: {
        user: '',
        password: ''
      },
      rules: {
        user: [
          { required: true, message: '账户不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    })
    const submitForm = () => {
      console.log(state.ruleForms);
      let params = {
        username: state.ruleForms.user || '',
        password: state.ruleForms.password
      }
      getLogin(params).then((res: any) => {
        window.localStorage.setItem('token',res.data.token)
        router.push('/')
      })
    }
    return {
      ...toRefs(state),
      submitForm
    }
  }
})
</script>
 
<style scoped>
  .all {
    width: 100%;
    height: 100vh;
    background-color: #409EFF;
    display: flex;
  }
  .login {
    width: 600px;
    height: 400px;
    background-color: #fff;
    margin: auto;
    padding: 20px;
  }
  .login .log {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    margin-top: 20px;
  }
  .log .warImg {
    width: 80px;
    height: 80px;
    margin-right: 40px;
  }
  .log .warText {
    line-height: 80px;
    color: rgba(222, 236, 25, 0.827);
  }

  .login .bunLog {
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .not-login {
    display: flex;
    justify-content: end;
  }

  .login-form {
    width: 70%;
    margin: 0 auto;
  }
</style>