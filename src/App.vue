<template>
  <div id="nav">
    <router-view />
  </div>
</template>

<script lang='ts'>
import { defineComponent, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  setup () {
    const noMenu = ['/login', '/registered', '/changePassword']
    const router = useRouter()
    const unwatch = router.beforeEach((to, from, next) => {
      if (noMenu.includes(to.path)) {
        // 如果路径是 /login 则正常执行
        next()
      } else {
        // 如果不是 /login，判断是否有 token
        if (!window.localStorage.getItem('token')) {
          // 如果没有，则跳至登录页面
          next({ path: '/login' })
        } else {
          // 否则继续执行
          next()
        }
      }
      // state.showMenu = !noMenu.includes(to.path)
      // state.currentPath = to.path
      // document.title = pathMap[to.name]
    })

    onUnmounted(() => {
      unwatch()
    })

    return {
      
    }
  }
})
</script>

<style>
body,html {
  margin: 0;
  padding: 0;
}
</style>
