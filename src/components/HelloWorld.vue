<template>
  <div class="hello" ref="root1">
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545c64"
      text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">
        <template #title>
          <router-link to="/Car">处理中心</router-link>
        </template>
      </el-menu-item>
      <el-menu-item index="2">
        <template #title>
          <router-link to="/Workbench">我的工作台</router-link>
        </template>
      </el-menu-item>
      <el-menu-item index="3">
        <template #title>
          <router-link to="/Xx">消息中心</router-link>
        </template>
      </el-menu-item>
      <el-menu-item index="4">
        <template #title>
          <router-link to="/Order"> 订单管理</router-link>
        </template>
      </el-menu-item>
      <el-menu-item index="5" style="margin-left: 1200px;">
        <template #title>
          <span @click="TC()"> 退出</span>
        </template>
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
// import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'
export default {
  name: 'HelloWorld',
  inject: ['count1'],
  setup() {
    const root1 = ref(null)
    onMounted(() => {
      console.log(root1.value)

    })
    return {
      root1
    }
  },
  data() {
    return {
      activeIndex2: '1'
    }
  },
  methods: {
    jian() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
      // console.log(this.$refs.)
      // console.log(this.count1.name)
      // this.$mysay('ssk')
    },
    TC() {
      this.$router.push({
        name: 'login',
        path: '/login'
      })
    }
  },
}
</script>

