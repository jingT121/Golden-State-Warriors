<template>
  <div class="home">
    <el-container>
      <el-header class="header">
          <div class="left">
            <img class="warImg" src="https://res.nba.cn/media/img/teams/logos/GSW_logo.svg" alt="">
            <div class="warText">Warroir</div>
          </div>
          <el-button class="btn" type="primary">退出登录</el-button>
      </el-header>
      <el-container>
        <el-aside class="aside">

          <!-- <el-menu 
          router
          collapse-transition
          background-color="#409EFF"
          active-text-color="#ffd04b"
          text-color="#fff">

          <el-submenu index="/index">
            <template #title>
              <span>勇士队介绍</span>
            </template>
            <el-menu-item-group>
              <el-menu-item><i class="el-icon-data-line" />系统介绍</el-menu-item>
              <el-menu-item><i class="el-icon-odometer" />Dashboard</el-menu-item>
              <el-menu-item><i class="el-icon-plus" />添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu>
            <template #title>
              <span>勇士队员</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/user"><i class="el-icon-picture" />勇士队员介绍</el-menu-item>
              <el-menu-item><i class="el-icon-star-on" />热销商品配置</el-menu-item>
              <el-menu-item><i class="el-icon-sell" />新品上线配置</el-menu-item>
              <el-menu-item><i class="el-icon-thumb" />为你推荐配置</el-menu-item>
            </el-menu-item-group>
          </el-submenu> -->

            <!-- <el-menu-item index='/index'>
                <i class="el-icon-location"></i>
                <span>勇士队介绍</span>
            </el-menu-item>
            <el-submenu>
              <template #title>
                <i class="el-icon-location"></i>
                <span>勇士队员</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/user">勇士队员介绍</el-menu-item>
              </el-menu-item-group>
            </el-submenu> -->
          <!-- </el-menu> -->

        <el-menu
          background-color="#222832"
          text-color="#fff"
          :router="true"
        >
          <el-submenu index="1">
            <template #title>
              <span>Dashboard</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/introduce"><i class="el-icon-data-line" />系统介绍</el-menu-item>
              <el-menu-item index="/dashboard"><i class="el-icon-odometer" />Dashboard</el-menu-item>
              <el-menu-item index="/add"><i class="el-icon-plus" />添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template #title>
              <span>首页配置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/swiper"><i class="el-icon-picture" />轮播图配置</el-menu-item>
              <el-menu-item index="/hot"><i class="el-icon-star-on" />热销商品配置</el-menu-item>
              <el-menu-item index="/new"><i class="el-icon-sell" />新品上线配置</el-menu-item>
              <el-menu-item index="/recommend"><i class="el-icon-thumb" />为你推荐配置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template #title>
              <span>模块管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/category"><i class="el-icon-menu" />分类管理</el-menu-item>
              <el-menu-item index="/good"><i class="el-icon-s-goods" />商品管理</el-menu-item>
              <el-menu-item index="/guest"><i class="el-icon-user-solid" />会员管理</el-menu-item>
              <el-menu-item index="/order"><i class="el-icon-s-order" />订单管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template #title>
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/account"><i class="el-icon-lock" />修改密码</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>

        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
  setup () {
    
    return {

    }
  }
})
</script>
 
<style scoped>
  .el-container {
    height: 100vh;
    overflow: hidden;
  }
  .header {
    background-color: #efff40;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header .left {
    display: flex;
  }
  .header .left .warImg {
    margin:0 40px;
  }
  .header .left .warText {
    line-height: 80px;
    color: #fff;
  }
  .aside {
    background-color: #409EFF;
  }

  .el-menu {
    border-right: none!important;
  }
  .el-submenu {
    border-top: 1px solid hsla(0, 0%, 100%, .05);
    border-bottom: 1px solid rgba(0, 0, 0, .2);
  }
  .el-submenu:first-child {
    border-top: none;
  }
  .el-submenu [class^="el-icon-"] {
    vertical-align: -1px!important;
  }
</style>