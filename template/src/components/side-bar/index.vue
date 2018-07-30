<template>
  <el-row>
    <el-col>
      <el-menu
        :default-active="$route.path"
        :router="routerMode"
        class="el-menu-vertical-demo full-height"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
      >
        <slot name="trademark"/>
        <slot name="router"/>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      routerMode: true,
    };
  },
};
</script>

<style scoped>
.full-height {
  height: 100vh;
}

.el-menu {
  overflow: hidden;
  overflow-y: auto;
}
</style>
