<template>
  <div>
    <div class="login" v-show="show">
      <el-form ref="form" :model="form" label-width="80px" v-show="show">
        <el-form-item label="用户名" prop="name" :rules="[
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 8, max: 16, message: '长度在8-16位之间', trigger: 'blur' }
        ]">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" :rules="[
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 8, max: 16, message: '长度在8-16位之间', trigger: 'blur' }
        ]" prop="passwd">
          <el-input v-model="form.passwd" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')">登录</el-button>
          <el-button @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <router-view v-show="!show"></router-view>
  </div>
</template>
<script>
import { login } from '@/api/api.js'
export default {
  data() {
    return {
      form: {
        name: '',
        passwd: ''
      },
      show: true
    }
  },
  methods: {
    //登录校验
    onSubmit(form) {
      // console.log(this.$store.commit('JIA', 2))
      this.$refs[form].validate((valid) => {
        if (valid) {
          //模拟请求数据接口
          login(this.form).then((res) => {
            if (res.data.status === 200) {
              localStorage.setItem('name', this.form.name)
              this.show = false
              this.$router.push(
                {
                  name: 'app',
                  path: '/app'
                }
              )
            }
          }).catch((err) => {
            console.log(err)
          });
        }
        else {
          console.log('校验失败')
        }
      })
      // alert(this.form.name + ' ' + this.form.passwd)

    },
    cancel() {
      this.form.name = ''
      this.form.passwd = ''
    }
  },
}
</script>
<style scoped>
.login {
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>