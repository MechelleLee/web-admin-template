<template>
  <el-row>
    <el-col>
      <el-menu
        default-active="1"
        :router="routerMode"
        class="el-menu-vertical-demo full-height"
        background-color="#545c64"
        text-color="#fff">
        <div class="title-box">
          <img src="../assets/images/ent-logo.png">
          xxx后台管理
        </div>
        <el-menu-item index="1" route="/admin-management">
          <i class="el-icon-menu"></i>
          <span slot="title">管理员管理</span>
        </el-menu-item>
        <el-menu-item index="2" route="/user-management">
            <i class="el-icon-menu"></i>
            <span slot="title">用户管理</span>
        </el-menu-item>
        <el-menu-item index="3" >
          <i class="el-icon-document"></i>
          <span slot="title">抽纸盒管理</span>
        </el-menu-item>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>充值管理</span>
          </template>
          <el-menu-item index="4-1">
            <span slot="title">数据统计</span>
          </el-menu-item>
          <el-menu-item index="4-2">
            <span slot="title">充值设定</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>礼卡管理</span>
          </template>
          <el-menu-item index="5-1">
            <span slot="title">礼卡列表</span>
          </el-menu-item>
          <el-menu-item index="5-2">
            <span slot="title">礼卡设定</span>
          </el-menu-item>
          <el-menu-item index="5-3">
            <span slot="title">使用列表</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <span slot="title">故障反馈</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-setting"></i>
          <span slot="title">消息通知</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default{
      data(){
          return{
              routerMode:true
          }
      }
  }
</script>

<style scoped>
  .full-height{
      height: 100vh;
  }
  .title-box{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
    width: 100%;
    padding: 8px 20px 0px 20px;
    color:#fff;
    font-size: 16px;
  }
  .title-box img{width: 33px;height:33px}
</style>
